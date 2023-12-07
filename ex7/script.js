const weapons = document.querySelectorAll('.weapon')
const equipSlot = document.querySelector('.equip-slot')
const equipWeapon = document.querySelector('.equip-weapon')

//1.Drag
function dragWeapon(event) {
  event.dataTransfer.setData('text/plain', event.target.id)
  console.log(event.target.id)
}
weapons.forEach((weapon) => {
  weapon.addEventListener('dragstart', dragWeapon)
})

//2.Drop
function dragOverWeapon(event) {
  event.preventDefault()
}
function dropWeapon(event) {
  event.preventDefault()
  const id = event.dataTransfer.getData('text/plain')
  const image = document.querySelector('#' + id)
  equipWeapon.src = image.src
}
equipSlot.addEventListener('dragover', dragOverWeapon)
equipSlot.addEventListener('drop', dropWeapon)
