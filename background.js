// A listener for when the tab is updated, and if the url contains "youtube.com/watch", it will send a message to the content script with the videoId.
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
  
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"), // Get the videoId from the url ("v=videoId")
      });
    }
});