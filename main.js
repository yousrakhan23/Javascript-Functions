/* Q #1: Write a JavaScript function that accept a string as a perimeter and counts the
number of vowels within the string.*/
function countVowelsss(string) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowelsss("Hello Vowels"));
//---------------------------------------------------------------------------------------------------
// Q #2: Write a JavaScript function that accept a string as a perimeter 
// and checks whether it is prime or not using recursion
function isPrime(num, divisor = 2) {
    // Base cases
    if (num <= 2) {
        return (num === 2);
    }
    if (num % divisor === 0) {
        return false;
    }
    if (divisor * divisor > num) {
        return true;
    }
    // Recursively check with the next divisor
    return isPrime(num, divisor + 1);
}
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
// ------------------------------------------------------------------------------------------------------------------------
// Q3: write a javascript function to find the first not repeated character. 
// function firstNonRepeatedChar(string:any){
//     const charCount={};
//     for (let char of string){
//         charCount[char]=(charCount[char]||0)+1;
//     }
//     for (let char of string){
//         if(charCount[char]===1){
//             return char;
//         }
//     }
//     return null;
// }
// console.log(firstNonRepeatedChar("swiss"));
//----------------------------------------------------------------------------------------------------------------------------
// Q4: write a function that returns of a number.
function square(num) {
    return num * num;
}
console.log(square(5)); // 25
//--------------------------------------------------------------------------------------------------------------------------------
// Q5: function displayMessag() prints "hello world" string using console.log function.
function displayMessag() {
    console.log("Hello World");
}
displayMessag();
export {};
