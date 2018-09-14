console.log('here we go again');

// VERBAL QUESTIONS
// 1. A parameter is a data type that a function must take in to run, an argument is passed when calling the function
// 2. Console.log just shows a value on the console, return performs spits out a value that has been operated on by the function
// 3. A function that returns a value is doing what it's supposed to do, or what javascript is being told to do

// PALINDROME AGAIN

// const isWordaPalindrome = (word) => {
//     let reverse = word.split("").reverse().join("");
//     if (reverse === word){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isWordaPalindrome("radar"));
// console.log(isWordaPalindrome("boston"));


// DIGIT SUM

// const sumDigits = (num) => {
//     const createArr = num.toString.split(" "); //not a function??
//     console.log(createArr);
//     const num1 = parseInt(createArr[0]);
//     const num2 = parseInt(createArr[1]);
  
//     const sumOfArr = num1 + num2;
//     return sumOfArr;
//   }

// console.log(sumDigits(42));

// PYTHAGORAS

// const calculateSide = (sideA, sideB) => {
//     let sideC = sideA * sideB;
//     return(sideC);
// }

// console.log(calculateSide(5, 4));


// SUM ARRAY

// const sumArray = (arr) => {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++){
//     (sum += arr[i]);
// } return sum;
// }
// console.log(sumArray([10 , 20]));

// PRIME NUMBERS

const checkPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) 
    return false; 
    return num !== 1;
}

console.log(checkPrime(27));
console.log(checkPrime(31));

function printPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

// shout out to Eratosthenes.

console.log(printPrimes(97));
