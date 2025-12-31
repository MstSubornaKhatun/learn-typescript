// // app.js 
// let num1 = '1';

// function calculate (num1, num2){
//     return num1 + num2;
// }
// console.log(num1,3); // 1 3 it's a bug but JavaScript kichu bole na.
// output see: node app.js




// // app.js 
// let num1 = 1;
// function calculate (num1: number, num2:number) {
//     return num1 + num2;
// }
// console.log(calculate(num1, 3)) // 4
// // output see: 1st of all, compile tsc app.ts then node app.js


// typescript check data type and shows error early. It does not allow adding string with number. This helps to avoid bugs in development.

// Type Safety: Typescript does not allows using wrong data type. (vhul data type use korte dei na.)
//Static Safety: TypeScript checks types before running the code. (code run korar agei type check kore.)



// Typescript allows defining array types like number[].

// number[] ==> array of numbers
// Array<number> ==> same thing




// function getTotal (numbers: number[]){
//     return numbers.reduce((acc, item)=> {
//         return acc + item;
//     }, 0); 
// }
// console.log(getTotal([3, 4, 5, 8])); // 20

// reduce holo array er ekta method. eta array er sob value ekta value te porinoto kore. 
// acc ==> accumulator ===> ager result joma rakhe, surute eta 0.



// // Union Type
// type ID = number | string;

// const userID1: ID = 123; // right
// const userID2: ID = '123'; // right 
// // const userID3: ID = true; // wrong

// Type Alias
/*
Type alias is used to define object structure. 
Optional property is defined using ? . 
Function can have typed parameters and return types. 
Union type allows multiple data types(number | string).
*/ 


/*
You can create your own custom types using type keyword. can be used for objects, arrays, Union types, functions.

*/

type User = {
    name: string;
    age: number;
    address?: string; // optional
}