const rootNode = document;
console.log(rootNode);
console.log(rootNode.nodeName); //#document
console.log(rootNode.nodeType); //9
console.log(rootNode.nodeValue); //null
console.log(document.documentElement); //html element
console.log(document.documentElement.nodeName); //HTML
console.log(document.documentElement.nodeType); //1
console.log(document.documentElement.nodeValue); //null
console.log(document.body); //body element
console.log(document.body.nodeName); //BODY
console.log(document.body.nodeType); //1
console.log(document.body.nodeValue); //null
console.log(document.head); //head elementx
console.log(document.head.nodeName); //HEAD
console.log(document.head.nodeType); //1
console.log(document.head.nodeValue); //null
console.log(document.title); //head element
console.log(document.title.nodeName); //undefined
console.log(document.title.nodeType); //undefined
console.log(document.title.nodeValue); //undefined
const headElement = document.head;
console.log(headElement);
//Child relationship
//1. childNodes (NodeList data type) = query children with all node types
const headChildren = headElement.childNodes;
console.log(headChildren);
console.log("length:", headChildren.length);
headChildren.forEach((hc) => {
  console.log(hc.nodeName);
  console.log(hc.nodeType);
  console.log(hc.nodeValue);
});
//2. children (HTMLCollection data type) = query children wiht ELEMENT type only
//convert array-like to array before using foreach function
console.log("length:", headElement.children.length);
Array.from(headElement.children).forEach((hc) => {
  console.log(hc.nodeName);
  console.log(hc.nodeType);
  console.log(hc.nodeValue);
});
//parent relationship
//get parent including all node types
const headParentNode = headElement.parentNode;
//get parent only element node type
const headParentElement = headElement.parentElement;
console.log(headParentNode);
console.log(headParentElement);
//sibling relationship
//get previous sibling including all node types
const headPreviousSibling = headElement.previousSibling;
console.log(headPreviousSibling);
//get previous sibling only element node type
const headPreviousSiblingElement = headElement.previousElementSibling;
console.log(headPreviousSiblingElement);
//get next sibling including all node types
const headNextSibling = headElement.nextSibling;
console.log(headNextSibling);
//get next sibling only element node type
const headNextSiblingElement = headElement.nextElementSibling;
console.log(headNextSiblingElement);

//get first child
console.log(headElement.firstChild);
console.log(headElement.firstElementChild);

//get last child
console.log(headElement.lastChild);
console.log(headElement.lastElementChild);
