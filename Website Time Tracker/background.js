const websiteTimes = {}; // {hostname: totalSeconds}
let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  if (activeTab) {
    updateActiveTime();
  }

  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url.startsWith("http")) {
    activeTab = new URL(tab.url).hostname;
    startTime = Date.now();
  } else {
    activeTab = null;
  }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.url) {
    if (activeTab) {
      updateActiveTime();
    }

    if (tab.url.startsWith("http")) {
      activeTab = new URL(tab.url).hostname;
      startTime = Date.now();
    } else {
      activeTab = null;
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getTime") {
    updateActiveTime(); // Ensure the latest time is included.
    sendResponse({ websiteTimes, activeTab, elapsedTime: startTime ? (Date.now() - startTime) / 1000 : 0 });
  } else if (request.type === "reset") {
    Object.keys(websiteTimes).forEach((key) => (websiteTimes[key] = 0));
    sendResponse({ success: true });
  }
});

function updateActiveTime() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  if (activeTab) {
    websiteTimes[activeTab] = (websiteTimes[activeTab] || 0) + elapsed;
  }
  startTime = null;
  activeTab = null;
}
