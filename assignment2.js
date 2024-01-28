// Q1 Solution:
const getsqrt = (sqr) => {
  return sqr ** 2;
};

// Example
let num = getsqrt(2);
console.log(`The square root of 2 is ${num}`);

// Q2 Solution:
const ages = [19, 22, 24, 20, 25, 26, 24, 25, 24];

// Sorting an array
let sortedArray = ages.sort();
console.log(`The Sorted array of the ages is ${sortedArray}`);

// Finding Maximum and Minimum values of an array
let maxAge = Math.max(...ages);
let minAge = Math.min(...ages);
console.log(`The Maximum age is ${maxAge} and Minimum age is ${minAge}`);

// Finding the median of an array
const sortedAges = ages.slice().sort((a, b) => a - b);
let median;

if (sortedAges.length % 2 === 1) {
  // Odd number of elements
  median = sortedAges[Math.floor(sortedAges.length / 2)];
} else {
  // Even number of elements
  const middle1 = sortedAges[sortedAges.length / 2 - 1];
  const middle2 = sortedAges[sortedAges.length / 2];
  median = (middle1 + middle2) / 2;
}

console.log(`The Median of the array is ${median}`);

// Finding the average of an array
let sum = ages.reduce((pre, curr) => pre + curr);
let avgAge = sum / ages.length;
console.log(`The average age in the given array is ${avgAge}`);

const range = Math.max(...ages) - Math.min(...ages);
console.log(range);

// Comparing the values of (min-avg) and (max-avg) using abs() methods
const absMinDiff = Math.abs(minAge - avgAge);
const absMaxDiff = Math.abs(maxAge - avgAge);
console.log(`The Value of (min - avg): ${absMinDiff} and (max - avg): ${absMaxDiff}`);

// Q3 Solution
const ContactInfo = new Map();

function addContact(name, age, email, location) {
  // Creating object
  const contactDetails = { age, email, location };
  // Setting contact info in name
  ContactInfo.set(name, contactDetails);
}

function getContactByName(name) {
  return ContactInfo.get(name);
}

addContact("Syed Rahman Ur Lateef", 22, "rahmanlateef5@gmail.com", "Hyderabad");
console.log(getContactByName("Syed Rahman Ur Lateef"));

// Q4 Solution
const person1 = {
  name: "Syed Rahman Ur Lateef"
};

const person2 = {
  Introduce: function (age) {
    console.log(`Hello, I'm ${this.name}, and I'm ${age} years old`);
  }
};

person2.Introduce.call(person1, 22);

// Q5 Solution
const getUniqueSqrt = (arr) => {
  // Getting unique Array from the array
  const uniqueArr = [...new Set(arr)];
  // Creating Square Root of each element of an Array
  const SqrtOfArray = uniqueArr.map((val) => val ** 2);
  // Printing Unique Array and Square root of each element of an Array
  console.log(`The Unique Elements of an Array is: ${uniqueArr}`);
  console.log(`The Square Root of each array element is: ${SqrtOfArray}`);
};

const myArr = [1, 2, 3, 4, 5, 6, 1, 3, 4, 5, 6, 6, 7, 8];
getUniqueSqrt(myArr);

// Q6 Solution
function displayInfo(name, role) {
  console.log(`Name: ${name} Role: ${role}`);
}

// Using Call to invoke the displayInfo function with the arguments
displayInfo.call(null, "Syed Rahman Ur Lateef", "Web Developer");

// Using apply to invoke the displayInfo function with arguments passed as an array
const infoArray = ["Syed Rahman Ur Lateef", "Web Developer"];
displayInfo.apply(null, infoArray);

// Creating Function named greet that logs greetings with this context
function greet() {
  console.log(`Hello, ${this.name}`);
}

// Example usage with an object as the context
const person = {
  name: "Syed Rahman Ur Lateef"
};

const boundGreet = greet.bind(person);
boundGreet();

// Q7 Solution
// Creating an object named calculator with methods add, subtract, and multiply
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,

  // Implementing the calculate method in calculator object
  calculate: function (operation, a, b) {
    if (operation === 'add') {
      return this.add(a, b);
    } else if (operation === 'subtract') {
      return this.subtract(a, b);
    } else if (operation === 'multiply') {
      return this.multiply(a, b);
    } else {
      return NaN; // Handle invalid operation
    }
  }
};

// Using call to perform an addition operation using the calculate method
const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
console.log('Addition Result:', additionResult);

// Using apply to perform a multiplication operation using the calculate method with arguments as an array
const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 4, 2]);
console.log('Multiplication Result:', multiplicationResult);

// Creating another object with discountCalculator with a discount property and the method applyDiscount
const discountCalculator = {
  discountPercentage: 10,

  applyDiscount: function (amount) {
    const discountAmount = (this.discountPercentage / 100) * amount;
    return amount - discountAmount;
  }
};

// Using bind to create a new function calculateDiscount that is bound to the discountCalculator object
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

// Example usage of the bound function
const discountedPrice = calculateDiscount(100);
console.log('Discounted Price:', discountedPrice);
