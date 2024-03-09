function flattenArray(arr) {
    let flat = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat = flat.concat(flattenArray(arr[i]));
        } else {
            flat.push(arr[i]);
        }
    }

    return flat;
}

// Example 
let nestedArray = [1, [2, [3, 4], 5], 6];
let flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); 



let nestedArray1 = [1, [2, [3, 4], 5], [6], [2, 3]];
let flattenedArray1 = flattenArray(nestedArray1);
console.log(flattenedArray1); 