const spoilButtons = document.querySelectorAll('.spoil-button')

function spoilClick(event) {
  const messageId = event.target.dataset.messageId
  const message = document.querySelector('#' + messageId)
  message.classList.toggle('show')
}

spoilButtons.forEach((button) => {
  button.addEventListener('click', spoilClick)
})
