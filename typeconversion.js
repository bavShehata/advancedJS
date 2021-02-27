let x = 2 + "2"; // 22

x = 2 + 2 + "2"; // 42

x = 2 + "2" + 2; // 22

x = "2" + 2 + 2; // 22

x = true + true; // 2

x = 2 + true + "2"; // 32

x = 2 + "2" + true; // 22true

x = Number("2"); // 2

x = Number("hello"); // NaN

x = typeof NaN; // Number

x = Number(""); //0

x = Number(" "); //0

x = Number(true); // 1

x = Boolean(5); //true

x = Boolean(-2); //true

x = Boolean("hello"); //true

x = Boolean(" "); //true

x = Boolean(""); //false

x = Boolean(null); //false

x = Boolean(undefined); //false

x = Boolean("false"); //true

if (x) {
  // x != 0, null, undefined, ''
}

if ([]) {
  // true
}
console.log(x);
