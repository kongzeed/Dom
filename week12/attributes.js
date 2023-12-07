const programmingLect = document.querySelectorAll(".programming");
//NodeList, implement only forEach, not all array function implemented
console.log(programmingLect);
programmingLect.forEach((pl) => {
  console.log(pl);
  console.log(pl.nodeName);
  console.log(pl.nodeType);
  console.log(pl.nodeValue);
  console.log(pl.attributes); //get all attributes of element //NamedNodeMap does not implement forEach
  Array.from(pl.attributes).forEach((attr) => console.log(attr));
});
const pEle = document.getElementById("p-01");
const pEleAttributes = pEle.attributes;
console.log(pEleAttributes);
console.log(pEleAttributes.length);
Array.from(pEleAttributes).forEach((attr) => {
  console.log(attr.name);
  console.log(attr.value);
});
console.log(pEle.getAttribute("id"));
const ulEle = document.getElementsByTagName("ul");
//return HTMLCollection -array-like, not implement forEach
const ulEleArray = Array.from(ulEle);
ulEleArray.forEach((ul) => console.log(ul));
