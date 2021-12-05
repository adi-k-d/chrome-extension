function injectTheScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: 'utilities.js' })
  })
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(
    tabs[0].id,
    { greeting: 'hello' },
    function (response) {
      console.log(response.farewell)
      a = response.farewell
      progressBar.style.background = `conic-gradient(
     green ${a * 3.6}deg,
     white ${a * 3.6}deg
    )`
      valueContainer.textContent = `${a}`
      button.textContent = 'Stop Connecting'
      button.style.background = `red`
    }
  )
})

document.getElementById('connect').addEventListener('click', injectTheScript)
let connectButton = document.getElementById('connect')
let progressBar = document.querySelector('.circular-progress')
let valueContainer = document.querySelector('.value-container')

let a = 0
let progressValue = 0
let progressEndvalue = a
let speed = 1

progressBar.style.background = `conic-gradient(
     green ${a * 3.6}deg,
     white ${a * 3.6}deg
    )`

// let progress = setInterval(() => {
//   progressValue++
//   valueContainer.textContent = `${progressValue}`
//   if (progressValue == progressEndvalue) {
//     clearInterval(progress)
//     progressBar.style.background = `conic-gradient(
//      green ${progressValue * 3.6}deg,
//      white ${progressValue * 3.6}deg
//     )`
//   }
// })
