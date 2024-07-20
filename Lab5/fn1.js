function square(number){
    let ans = number**2;
    return ans;
}
 let answer = square(2);
 console.log("Output is : "+answer);

 function emphasize(string1,string2){
    let concat= `<i><b>${string1} ${string2}</b></i>`;
    return concat;
    
}
let reString = emphasize("Hello ","World");
let para = document.createElement("p");
para.innerHTML= reString;
document.body.appendChild(para);

// function isShortOrLong(phoneNumber) {
//     // Remove all non-digit characters
//     let cleanedNumber = phoneNumber.match(/\d/g);
    
//     // Check the length of the cleaned number
//     return cleanedNumber.length < 7;
// }

// // Example usage
// console.log(isShortOrLong("123-456"));  // true (shorter than 7 digits)
// console.log(isShortOrLong("123-456-7890"));  // false (10 digits)
// console.log(isShortOrLong("(123) 456-7890"));  // false (10 digits)
// console.log(isShortOrLong("123456"));  // true (6 digits)
// console.log(isShortOrLong("1234567"));  // false (7 digits)
// console.log(isShortOrLong("1234567890"));  // false (10 digits)

function isShortOrLong(phoneNumber) {
    // Initialize a counter for digits
    let digitCount = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < phoneNumber.length; i++) {
        // Check if the character is a digit
        if (phoneNumber[i] >= '0' && phoneNumber[i] <= '9') {
            digitCount++;
        }
    }
    
    // Return true if the digit count is less than 7
    return digitCount < 7;
}

// Example usage
console.log(isShortOrLong("123-456"));  // true (shorter than 7 digits)
console.log(isShortOrLong("123-456-7890"));  // false (10 digits)
console.log(isShortOrLong("(123) 456-7890"));  // false (10 digits)
  // false (10 digits)

function isTriple(number) {
    // Check if the number is divisible by 3
    if (number % 3 === 0) {
        // Check if the result of the division is an integer
        let singleValue = number / 3;
        return Number.isInteger(singleValue);
    }
    return false;
}

// Example usage
console.log(isTriple(6));   // true (6 = 2 + 2 + 2)
console.log(isTriple(0));   // true (0 = 0 + 0 + 0)
console.log(isTriple(7));   // false (7 is not a multiple of 3)
console.log(isTriple(9));   // false (10 is not a multiple of 3)


let triangle = (n) => {
    return (n*(n+1)/2);
}
let term5 = triangle(5);
let term10 = triangle(10);
console.log("5th term of triangular number is "+ term5)
console.log("10th term of triangular number is "+ term10)

function xorTake(value1,value2){
    return Boolean(value1^value2);
}
console.log(xorTake(true,true));
console.log(xorTake(false,true));

function isYesOrNo(inputString) {
    // Convert inputString to lowercase for case insensitivity
    let lowerCaseString = inputString.toLowerCase();
    
    // Check if the string contains at least one 'o'
    return lowerCaseString.includes('o');
}

// Example usage:
console.log(isYesOrNo("Yes"));   // true (contains 'o')
console.log(isYesOrNo("No"));    // true (contains 'o')
console.log(isYesOrNo("MOMO")); /// false (does not contain 'o')

function round(number){
    return Math.round(number);
}
let roundValue1 = round(3.6);
let roundValue2 = round(3.2);
console.log(roundValue1);
console.log(roundValue2);

function mystery(num,string){
    return num == string.length;
}
let equal_1 = mystery(3,"Eye");
let equal_2 = mystery(4,"Eagle");
console.log(equal_1);
console.log(equal_2);