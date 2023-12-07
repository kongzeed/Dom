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
export { echo, sum, MAX_VALUE };
