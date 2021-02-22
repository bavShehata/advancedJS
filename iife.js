//Immediately Invoked Function Expression

const fn = (() => {
  console.log("Hello");
})();

// How libraries are created
let counter = (() => {
  let i = 0;

  return {
    i,
    get: () => {
      return i;
    },
    set: (val) => {
      i = val;
    },
    print: () => {
      console.log(i);
    },
  };
})();

counter.print();
counter.set(5);
counter.print();
