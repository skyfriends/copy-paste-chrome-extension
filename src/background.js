chrome.tabs.sendMessage(tab.id, { greeting: 'hello' }, function(response) {
  // JSON.parse does not evaluate the attacker's scripts.
  var resp = JSON.parse(response.farewell)
})
