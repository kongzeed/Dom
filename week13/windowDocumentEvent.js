document.addEventListener('DOMContentLoaded', () => {
    console.log('Your DOM tree built')
  })
  window.addEventListener('load', () => {
    console.log('Your Applciation Loaded')
  })
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('myCat', 'Tom')
  })
  window.addEventListener('mousemove', (e) => {
    console.log(`x:${e.screenX}, y:${e.screenY}`)
  })