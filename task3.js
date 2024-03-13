// 1.Do the below programs in anonymous function & IIFE

// a. Print odd numbers in an array

// anonymous function:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = arr.filter(function(num) {
    return num % 2 !== 0;
});
console.log("Odd numbers in the array:", oddNumbers);

// output : Odd numbers in the array: [1, 3, 5, 7, 9]

// IIFE

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(arr1) {
   
    const oddNumbers = arr1.filter(function(num) {
        return num % 2 !== 0;
    });

   
    console.log("Odd numbers in the array:", oddNumbers);
})(arr1);
// output : Odd numbers in the array: [1, 3, 5, 7, 9]

// b.Convert all the strings to title caps in a string array

//anonymous function:

let stringArray = ["hello world", "goodbye world"];

let titleCapsArray = stringArray.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) 
    {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});
console.log(titleCapsArray);
// output : [ 'Hello World', 'Goodbye World' ]

//IIFE:
let stringArray1 = ["hello world", "goodbye world"];

let titleCapsArray1 = (function(arr) {
    return arr.map(function(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
})(stringArray1);
console.log(titleCapsArray1);
// Output:  [ 'Hello World', 'Goodbye World' ]

//c.Sum of all numbers in an array

// Anonymous functions:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output will be 15

// IIFE
const numbers1 = [1, 2, 3, 4, 5];

const sum1 = (function(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
})(numbers1);

console.log(sum1); // Output will be 15

// d.Return all the prime numbers in an array

// anonymous function:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = number.filter(function(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});
console.log(primeNumbers); // Output: [2, 3, 5, 7]

// IIFE

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers1 = (() => {
    const isPrime = num => {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return numbers2.filter(isPrime);
})();

console.log(primeNumbers1); // Output: [2, 3, 5, 7]

// e.Return all the palindromes in an array

// anonymous fuction:
const array = ["level", "hello", "radar", "world", "madam"];

const palindromes = array.filter(function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
});

console.log(palindromes); // Output: ["level", "radar", "madam"]

// IIFE:

const array1 = ["level", "hello", "radar", "world", "madam"];

const palindromes1 = (() => {
    return array1.filter(str => {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
})();

console.log(palindromes1); // Output: ["level", "radar", "madam"]

//f.Return median of two sorted arrays of the same size.

// Anonymous function:
function findMedianSortedArrays(...arrays) {
    const merged = [].concat(...arrays);
    merged.sort((a, b) => a - b);
    const length = merged.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (merged[middle - 1] + merged[middle]) / 2;
    } else {
        return merged[middle];
    }
}
const arr2 = [1, 3, 5];
const arr3 = [2, 4, 6];
console.log(findMedianSortedArrays(arr2, arr3)); // Output: 3.5

//IIFE:

const medianOfSortedArrays = ((arr1, arr2) => {
    const merged = [...arr1, ...arr2];
    merged.sort((a, b) => a - b);
    const length = merged.length;
    const middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (merged[middle - 1] + merged[middle]) / 2;
    } else {
        return merged[middle];
    }
})([1, 3, 5], [2, 4, 6]);

console.log(medianOfSortedArrays); // Output: 3.5
// g. Remove duplicates from an array

// anonymous function :
var array2 = [1, 2, 2, 3, 4, 4, 5];

var uniqueArray = array2.filter(function(item, index) {
    return array2.indexOf(item) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
//IIFE:

var arry = [1, 2, 2, 3, 4, 4, 5];

var uniqueArray = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})(arry);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

//h.Rotate an array by k times

// anonymous function:

const rotateArray = (arr, k) => {
    const rotateByOne = (arr) => {
        const firstElement = arr.shift();
        arr.push(firstElement);
    };
for (let i = 0; i < k; i++) {
        rotateByOne(arr);
    }

    return arr;
};
const ar = [1, 2, 3, 4, 5];
const rotations = 2;
console.log(rotateArray(ar.slice(), rotations));  // Output: [4, 5, 1, 2, 3]

// IIFE:
const rotateArray1 = (arr, k) => {
    return ((arr, k) => {
        
        const rotateByOne = () => {
            const firstElement = arr.shift();
            arr.push(firstElement);
        };
        for (let i = 0; i < k; i++) {
            rotateByOne();
        }

        return arr;
    })(arr.slice(), k); 
};
const ar1 = [1, 2, 3, 4, 5];
const rotations1 = 2;
console.log(rotateArray1(ar1, rotations1)); // Output: [4, 5, 1, 2, 3]

// 2. Do the below programs in arrow functions.

//a.Print odd numbers in an array

const nm = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odNumbers = nm.filter(num => num % 2 !== 0);

console.log(odNumbers); // Output: [1, 3, 5, 7, 9]

//b.Convert all the strings to title caps in a string array

const stringArray3 = ["hello world", "this is a test", "javascript is awesome"];

const titleCapsArray4 = stringArray3.map(str => str.replace(/\b\w/g, char => char.toUpperCase()));

console.log(titleCapsArray4); // [ 'Hello World', 'This Is A Test', 'Javascript Is Awesome' ]

//c.Sum of all numbers in an array

const numbers7 = [1, 2, 3, 4, 5];

const sm = numbers7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sm); // Output will be 15

// d.Return all the prime numbers in an array

const isPrime = num => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const findPrimesInArray = arr => arr.filter(isPrime);
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers4 = findPrimesInArray(numbers4);
console.log(primeNumbers4); // Output: [2, 3, 5, 7]

// e.Return all the palindromes in an array

const isPalindrome = str => {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, ''); 
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  };
  
  const array4 = ["level", "hello", "radar", "world", "civic", "apple"];
  
  const palindromes4 = array4.filter(word => isPalindrome(word));
  
  console.log(palindromes4); // Output: ["level", "radar", "civic"]
  







