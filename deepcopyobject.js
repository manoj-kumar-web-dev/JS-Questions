function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
      return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          copy[key] = deepCopy(obj[key]);
      }
  }

  return copy;
}


// Example

let original = {
  a: 1,
  b: {
      c: 2,
      d: [3, 4, 5]
  }
};

let copied = deepCopy(original);
console.log(copied);
original.b.c = 100;
console.log(original);
console.log(copied);