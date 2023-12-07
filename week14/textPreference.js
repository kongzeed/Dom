const form = document.getElementById("form")
const input = document.getElementById("input")
const text = document.getElementById("text")

if (localStorage.getItem("fontSize")) {
  text.style.fontSize = `${localStorage.getItem("fontSize")}px`
}

form.addEventListener("submit", function (e) {
  e.preventDefault()
  text.style.fontSize = `${input.value}px`
  localStorage.setItem("fontSize", input.value)
})
