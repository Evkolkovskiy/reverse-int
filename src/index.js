
module.exports = function reverse (n) {
  let nnew = Math.abs(n);
  let str = nnew.toString();
  return str.split('').reverse().join('');
}
