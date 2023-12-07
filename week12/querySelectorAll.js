//select a collection of specified condition
const programmingLect = document.getElementsByClassName("programming");
//return HTMLCollection data type - array-like (can use index or length, cannot use array function (forEach, filter, map,...))
console.log(programmingLect);
console.log(programmingLect.length);

const ulTagname = document.getElementsByTagName("ul");
console.log(ulTagname);
console.log(ulTagname.length);
//return HTMLCollection

const coursesEle = document.querySelectorAll(".courses");
console.log(coursesEle);
//NodeList data type - array-like (can use index, length) but NodeList implements only forEach but can not use other array functions

const divEle = document.getElementById("bscit-courses");
const courseUnderDiv = divEle.querySelectorAll(".courses");
console.log(courseUnderDiv);

const courseUnderDoc = document.querySelectorAll(".courses");
console.log(courseUnderDoc);
