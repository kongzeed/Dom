//class ., id #
const productImg = document.querySelector('.card-img')
const productTitle = document.querySelector('.card-title')
const redColor = document.querySelector('.red')
const whiteColor = document.querySelector('.white')
const addToCart = document.querySelector('.add-to-cart')
const cartAdded = document.querySelector('.cart-added')

redColor.addEventListener('click', () => {
  // do something
  productImg.style.backgroundImage = "url('./img/benz-red.jpeg')"
  productTitle.innerHTML = 'Red Mercedes-Benz'
  productTitle.style.color = 'red'
  addToCart.style.backgroundColor = 'red'
  addToCart.style.color = 'white'
  addToCart.style.border = '1px solid red'
})
whiteColor.addEventListener('click', () => {
  //do something
  productImg.style.backgroundImage = "url('./img/benz-white.jpeg')"
  productTitle.innerHTML = 'White Mercedes-Benz'
  productTitle.style.color = 'black' // = css=>color:red
  addToCart.style.backgroundColor = 'white'
  addToCart.style.color = 'black'
  addToCart.style.border = '1px solid black'
})

addToCart.addEventListener('click', () => {
  addToCart.style.display = 'none'
  cartAdded.style.display = 'block'
})
