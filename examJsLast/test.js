// // // NodelistVsHTMLCollection
// // const liHTMLCollection = document.getElementsByTagName('li');
// // let liNodeList = document.querySelectorAll('li');
// // const ulNodeList = document.querySelector('ul');
// // console.log(liHTMLCollection);
// // console.log(liNodeList);
// // console.log('After add li ===========');
// // const newli = document.createElement('li');
// // ulNodeList.appendChild(newli);
// // console.log(liHTMLCollection);
// // // liNodeList = document.querySelectorAll('li');
// // console.log(liNodeList);

const tagUl = document.querySelector('ul');
// console.log(tagUl);

const html = '<li>666</li>';
tagUl.insertAdjacentHTML('beforeend', html);

// // const result = prompt('input');
// // console.log(result + 8);

// // const newTagDiv = document.createElement('div');
// // console.log(newTagDiv);
// // tagP.appendChild(newTagDiv);

// // console.log(tagP.attributes[2].value);
// // console.log(tagP.getAttribute('class'));

// // //Event ========

// const inslide = document.querySelector('.inslide');
// const outslide = document.querySelector('.outslide');

// // //Event phase
// // outslide.addEventListener(
// //   'click',
// //   function (e) {
// //     console.log(e.eventPhase);
// //   },
// //   true
// // );

// // //target

// outslide.addEventListener('click', function (e) {
//   console.log('currentTarget', e.currentTarget);
//   console.log('target', e.target);

//   e.currentTarget.style.backgroundColor = 'yellow';
// });

// outslide.addEventListener('click', function (event) {
//   console.log('currentTarget', e.currentTarget);
//   console.log('target', e.target);

//   e.currentTarget.style.backgroundColor = 'yellow';
// });

// const input = document.getElementById('massage');

// input.addEventListener('keypress', (e) => {
//   console.log(e.code + 2);
// });

// input.addEventListener('keydown', (e) => {
//   console.log(e.code + 1);
// });

const stduent = {
  id: '078',
  name: 'mos',
  walk: function () {
    console.log('walk');
  },
};

console.log(stduent);
localStorage.setItem('mos', JSON.stringify(stduent));

const JsonStudent = localStorage.getItem('mos');

const newStduent = JSON.parse(JsonStudent);
console.log(newStduent);
localStorage.clear();
