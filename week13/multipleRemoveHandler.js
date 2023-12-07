//multipleRemoveHandler
//1. select target HTML object
const submitButton = document.querySelector('button')
// console.log(submitButton)
// 2 register handler function on a target HtML object
//add multiple handler functions on the same event type and HTML object
const doSomething = (e) => {
  console.log(`Good bye, ${e.target.id}`)
}
submitButton.addEventListener('click', (e) => {
  console.log(`hello, ${e.target.id}`)
})
submitButton.addEventListener('click', doSomething)
//remove event listener
submitButton.removeEventListener('click', doSomething)

//eventPropagation
// const doSomething = (e) => {
//   // console.log('submit button is clicked')
//   // console.log(e)
//   console.log(e.target.id)
//   // console.log(e.type)
//   // console.log(e.target)
//   console.log(e.currentTarget)
//   console.log(e.eventPhase)
// }
// submitButton.addEventListener('click', doSomething)

// // -----------------------
// // inner-div
// const innerDiv = document.getElementById('inner-div')
// // console.log(innerDiv)
// innerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })
// // outer-div
// const outerDiv = document.getElementById('outer-div')
// // console.log(outerDiv)
// outerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase) 
// })