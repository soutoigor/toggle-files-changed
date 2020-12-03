const $btnClose = document.getElementById('close')
const $btnOpen = document.getElementById('open')

const closeAll = `
  document.querySelectorAll('.file').forEach((item) => {
    item.classList.remove('open')
    item.classList.remove('Details--on')
  })
`

const openAll = `
  document.querySelectorAll('.file').forEach((item) => {
    item.classList.add('open')
    item.classList.add('Details--on')
  })
`

$btnOpen.addEventListener('click', () => {
  chrome.tabs.getSelected(null, (tab) => {
    chrome.tabs.executeScript(tab.id, { code: `${openAll}` })
  })
})

$btnClose.addEventListener('click', () => {
  chrome.tabs.getSelected(null, (tab) => {
    chrome.tabs.executeScript(tab.id, {code: `${closeAll}`})
  })
})
