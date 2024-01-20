//Q1 Solution:
const getsqrt = (sqr)=>{
  return sqr**2
}
//Example
let num = getsqrt(2);
console.log(`The square root of 2 is ${num}`);

//Q2 Solution:
const ages = [19,22,24,20,25,26,24,25,24]
//sorting an array
let sortedArray  = ages.sort();
console.log(`The Sorted array of the ages is ${sortedArray}`);
//finding Maximum value of an array
let maxAge = Math.max(...ages)
//finding minimum value of an array
let minAge = Math.min(...ages)
console.log(`The Maximum age is ${maxAge} and Mimimun age is ${minAge}`);
//finding the meadin of an array

// Step 1: Sort the array

const sortedAges = ages.slice().sort((a, b) => a - b);

// Step 2: Find the median
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

console.log(`The Median of and array is ${median}`);

//finding the average of an array
let sum = ages.reduce((pre,curr)=>{
  
    return pre + curr;
   
});
avgAge = sum / ages.length
console.log(`The average age in give  the array is ${avgAge}`);

const  range = Math.max(...ages)-Math.min(...ages);
console.log(range);

//comparing the value of (min-avg) and (max-avg) using abs() methods
const absMinDiff = Math.abs(minAge - avgAge);
const absMaxDiff = Math.abs(maxAge - avgAge);
console.log(`The Value of the (min - avg) : ${absMinDiff} and (max - avg) ${absMaxDiff}`);

//Q3 solution
const ContactInfo = new Map()
function addContact(name,age,email,location){
  //creating object
  const contactDetails = {age,email,location};
  //setting contact ino in name
  ContactInfo.set(name,contactDetails);
  //getting contactInfo by get()
  return ContactInfo.get(name);
}

const contact1 = addContact("Syed Rahman Ur Lateef",22,"rahmanlateef5@gmail.com","Hyderabad");
console.log(contact1);

