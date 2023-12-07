//esModule
function echo(msg) {
  return msg;
}
function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
const MAX_VALUE = 100;
//ES Module
//named export
//export list
// export { sum, echo, MAX_VALUE }
//default export
export { sum as default, echo, MAX_VALUE };
