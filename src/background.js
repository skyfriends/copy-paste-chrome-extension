chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo && changeInfo.status == 'complete') {
    chrome.tabs.executeScript(tabId, { file: 'jquery.js' }, () => {
      chrome.tabs.executeScript(tabId, { file: 'listening.js' });
    });
  }
});

// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//   // LOG THE CONTENTS HERE
//   console.log(request.content)
// })

// chrome.tabs.getSelected(null, function(tab) {
//   // Now inject a script onto the page
//   chrome.tabs.executeScript(
//     tab.id,
//     {
//       code:
//         "chrome.extension.sendRequest({content: document.body.innerHTML}, function(response) { console.log('success'); });"
//     },
//     function() {
//       console.log('done')
//     }
//   )
// })
