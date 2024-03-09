const arr = ['ab','bcd','e','fghijk','xy','zee']
function findLength(arr){
  return arr.map(i => i.length)
}

console.log(arr,findLength(arr));

// example 2

function mapStringLengths(strings) {
  return strings.map(function(str) {
      return str.length;
  });
}

// o/p
let strings = ['apple', 'banana', 'cherry'];
let lengths = mapStringLengths(strings);
console.log(lengths);
