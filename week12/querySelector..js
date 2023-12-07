//select a node with it's id
const ulStudents = document.getElementById("students");
console.log(ulStudents);

//select the first node with CSS selecter
const ulStudents2 = document.querySelector("#students");
console.log(ulStudents2);
// const programmingLect = document.querySelector(
//   "#std-655000888",
//   "#int101",
//   ".programming",
//   "#p-01"
// );
// console.log(programmingLect);
const programmingLect = document.querySelector(".programming"); //class selecter
console.log(programmingLect);

const ulStudents3 = document.querySelector('ul[id = "students"]'); //tag with attribute selecter
console.log(ulStudents);

const ulEle = document.querySelector("ul"); //tag name
console.log(ulEle);

const divUl = document.querySelector("div>ul");
console.log(divUl); //tag with it's paraent
