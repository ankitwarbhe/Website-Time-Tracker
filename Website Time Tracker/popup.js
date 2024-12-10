document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#timeTable tbody");
  const resetButton = document.getElementById("resetButton");

  let timerInterval;

  function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  function updateTable(data, activeTab, elapsedTime) {
    tableBody.innerHTML = "";
    for (const [website, seconds] of Object.entries(data)) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${website}</td><td>${formatTime(seconds + (website === activeTab ? elapsedTime : 0))}</td>`;
      tableBody.appendChild(row);
    }
  }

  function fetchData() {
    chrome.runtime.sendMessage({ type: "getTime" }, (response) => {
      const { websiteTimes, activeTab, elapsedTime } = response;
      updateTable(websiteTimes, activeTab, Math.floor(elapsedTime));
    });
  }

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      fetchData();
    }, 1000);
  }

  resetButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "reset" }, () => {
      fetchData();
    });
  });

  fetchData();
  startTimer();
});
