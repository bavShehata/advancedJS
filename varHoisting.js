var a = function () {
  if (true) {
    var x = 3;
  }
  console.log(x); //3
};
a();
var x = function () {
  console.log(y); //undefined instead of error because of hoisting
  var y = 3;
};
x();
y = 2;
var z = function () {
  console.log(y); //undefined instead of 2
  var y = 3;
};
z();
