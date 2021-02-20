let obj = { num: 2 };
let addToThis = function (a, b, c) {
  return this.num + a + b + c;
};
console.log(addToThis.call(obj, 3, 4, 5));
console.log(addToThis.apply(obj, [3, 4, 5]));
let bound = addToThis.bind(obj);
console.log(bound(3, 4, 5));
