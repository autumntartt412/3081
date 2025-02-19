// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;




// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`The sum of ${isSum50} is equal to 50.`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`These are the odd numbers: ${isTwoOdd}.`);


// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
isonsole.log(`${isOver25} is larger than 25.`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`${isUnique} are unique numbers.`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(`${isValid} is not larger than 25.`);
// Finally, log the results.


// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
console.log(`here is the endedin result ${dontDoThis}`);

 n1 = 10;
 n2 = 15;
 n3 = 20;
 n4 = 5;

// Check if all numbers are divisible by 5. 
// Cache the result in a variable.
  const divisibleBy5 = nums.filter(num => num % 5 == 0);
  console.log(`numbers divisible by are ${divisibleBy5}`);

//   Check if the first number is larger than the last. 
//   Cache the result in a variable.
const isFirstLargerThanLast = nums[0] > nums[nums.length -1];
console.log( `first number ${nums[0]} is larger than last ${nums[nums.length -1]}`);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const firstNumber = numbers[0];
const secondNumber = numbers[1];
const thirdNumber = numbers[2];
const fourthNumber = numbers[3];
const subtractionResult = secondNumber - firstNumber;
const multiplyResult = subtractionResult - thirdNumber;
const remainderResult = multiplyResult / firstNumber;
console.log(`The result of ${secondNumber} minus the ${firstNumber} multiplied by the ${thirdNumber} divided by the ${fourthNumber} is the ${remainderResult} .`);

// Change the way that isOver25 calculates so that we do not need to use 
// the NOT operator (!) in other logic comparisons.
//  Rename the variable as appropriate.

const isOver25WithoutNotOperater = [10, 15, 20, 5];
for (i = 0; i < isFirstLargerThanLast.length; i++) {
    if (isFirstLargerThanLast > 25) {
        console.log(`${isOver25WithoutNotOperater} is larger than 25.`); 
     } else {
               console.log((`${isOver25WithoutNotOperater} is not larger than 25.`)) 
            }
        };
    
        

