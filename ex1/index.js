let message = document.querySelector('.message')
let spoilButton = document.querySelector('.spoil-button')
let text = document.querySelector('.text')
let body = document.body
let theme = document.querySelector('.theme-button')
text.classList.add('orange-box')
text.classList.replace('orange-box', 'green-box')

theme.addEventListener('click', () => {
  //change theme
  body.classList.toggle('dark-theme')
})

spoilButton.addEventListener('click', () => {
  if (message.style.display === 'none') {
    message.style.display = 'block'
  } else {
  }
})
