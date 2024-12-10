# Website Time Tracker

Website Time Tracker is a Chrome extension that helps you monitor the time you spend on websites. It dynamically updates the time in real-time and tracks usage across all tabs and browsing sessions.

## Features
- **Real-Time Tracking:** Shows the time spent on the active website in hours, minutes, and seconds.
- **Comprehensive Logs:** Keeps track of time spent on all visited websites.
- **Reset Functionality:** Clear all tracked data with a single click.
- **User-Friendly Interface:** Simple and easy-to-use popup UI.

---

## Installation

### Step 1: Clone or Download the Repository
1. Clone this repository using Git:
   ```bash
   git clone https://github.com/ankitwarbhe/website-time-tracker.git

Or download it as a ZIP and extract the files.
### Step 2: Load the Extension in Chrome
1. Open Google Chrome and navigate to chrome://extensions/.

2. Enable Developer mode (toggle it on at the top right).

3. Click Load unpacked and select the folder containing the downloaded/extracted files.

4. The extension will now be loaded and visible in your toolbar.
   
### Usage
1. Click the Website Time Tracker icon in the toolbar to open the popup.
  
2. View the time spent on each website in real-time, displayed in a clean table format.
  
3. Click the Reset button to clear all tracked time data.
   
### File Structure
  ```bash
  📂 Website Time Tracker
  ├── manifest.json   # Defines metadata and permissions for the extension
  ├── background.js   # Handles logic for tracking time
  ├── popup.html      # The popup UI
  ├── popup.js        # Manages dynamic updates in the popup
  ├── styles.css      # Optional: For styling the popup
  └── icon.png        # Extension icon
```
### Contributing
We welcome contributions! To contribute:

1. Fork this repository.

2. Create a new branch:
      ```bash
   git checkout -b feature/YourFeatureName
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeatureName
4. Push to your branch:
   ```bash
   git push origin feature/YourFeatureName
5. Open a pull request.
   
### License
This project is licensed under the MIT License.
