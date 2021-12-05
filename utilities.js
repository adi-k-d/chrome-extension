var sent = document.getElementsByClassName(
  ' artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view'
)
var sentInvite = sent.length
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  )
  if (request.greeting === 'hello') sendResponse({ farewell: sent.length })
})
function connectToPeople() {
  var buttons = document.getElementsByClassName(
    'artdeco-button artdeco-button--2 artdeco-button--secondary ember-view'
  )
  let count = 0
  console.log(buttons.length)
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent.trim() == 'Connect') {
      buttons[i].click()
    }
  }
}

connectToPeople()
