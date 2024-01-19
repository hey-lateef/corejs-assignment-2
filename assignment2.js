//Q1 Solution:
const getsqrt = (sqr)=>{
  return sqr**2
}
//Example
let num = getsqrt(2);
console.log(`The square root of 2 is ${num}`);

//Q2 Solution:
const ages = [19,22,24,20,25,26,24,25,24]
console.log(ages.sort());
let maxAge = Math.max(...ages)
let minAge = Math.min(...ages)
console.log(`The Maximum age is ${maxAge} and Mimimun age is ${minAge}`);
