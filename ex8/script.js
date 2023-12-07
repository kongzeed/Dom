let imageIndex = 0
let imageLinks = ['rabbit.jpg', 'panda.jpg', 'bird.jpg']
let image = document.querySelector('.image')

function prevImage() {
  if (imageIndex > 0) {
    imageIndex--
    image.src = imageLinks[imageIndex]
  }
}

function nextImage() {
  if (imageIndex < imageLinks.length - 1) {
    imageIndex++
    image.src = imageLinks[imageIndex]
  }
}

function keyup(event) {
  console.log(event.key)
  if (event.key === 'ArrowLeft') {
    prevImage()
  } else if (event.key === 'ArrowRight') {
    nextImage()
  }
}

document.addEventListener('keyup', keyup)
