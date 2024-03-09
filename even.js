function filterEvenNumbers(numbers) {
    return numbers.filter(function(num) {
        return num % 2 === 0;
    });
}

// Example 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); 
