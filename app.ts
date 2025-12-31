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
};

const user1: User = {
    name: 'Rabia',
    age: 30
};

const user2: User = {
    name: 'Sabrina',
    age: 35,
    address: 'Main Street'
}

console.log(user2); // { name: 'Sabrina', age: 35, address: 'Main Street' }
console.log(user1.name); // Rabia



// Interfaces 
/*
Interfaces holo typescript er ekta 
structure/blueprint jeta bole dei- 
kono object er vitore ki ki property 
thakbe and segulor type ki hobe.

--> interface nije data?value rakhena 
--> only shape define kore
*/


// interface User1 {
//     name: string;
//     age: number; 
//     isActive: boolean;
// } 


// transition interface
interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number; 
};

//BankAccount Interface
interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number; 
    isActive: boolean;
    transactions: Transaction[];
};

// create transaction objects
const transaction1: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 455,
};


const transaction2: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 455,
};


// create BankAccount object
const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolder: 'Jphn Doe',
    balance: 4000,
    isActive: true,
    transactions: [transaction1, transaction2],
};

// console.log
console.log(bankAccount);

console.log('------------------------')

/*
Output:
{
  accountNumber: 123,
  accountHolder: 'Jphn Doe',
  balance: 4000,
  isActive: true,
  transactions: [
    { payerAccountNumber: 123, payeeAccountNumber: 455 },
    { payerAccountNumber: 123, payeeAccountNumber: 455 }
  ]
}
*/


/*
Transaction[] mane array of Transaction objects
interface only for type checking
interface only work compile time
JavaScript a interface thakena
*/


// Interface extends (Inheritance):
/*
extends mane holo ekta interface er sob 
property inerit (niye nei) tarpor 
new property joog kore

*/
// Interface = object er blueprint(noksha)
// Extends = Inheritance(uttoradhikar)

/*
Example: 
Book ---> basic totho
EBook ---> Book + extra info
AudioBook ---> EBook + aroo extra info

*/


// parent interface 
interface Book {
    name: string;
    price: number;
}

// child interface
interface EBook extends Book {
    // name: string;
    // price: number;
    fileSize: number;
    format: string;
}


// grand child interface
interface AudioBook extends EBook {
    // name: string;
    // price: number;
    // fileSize: number;
    // format: string;
    duration: number;
}



// object using AudioBook interface
const book: AudioBook = {
    name: 'Atomic Habits',
    price: 1200,
    fileSize: 300,
    format: 'mp3',
    duration: 5,
};

console.log(book)

/*
{
  name: 'Atomic Habits',
  price: 1200,
  fileSize: 300,
  format: 'mp3',
  duration: 5
}
*/ 

console.log('-----------------------')
/*
Interface extends holo ekta interface anno
 interface er property inherit kore new 
 interface banano.



extends: new interface ager interface er sob property niye nibe.
tarpor caile nijer new property joog korte paro.

object bananor somoi all inherited property dite hobe.

*/ 








// Interface Merging
/*
same name a multiple interface declare kora jai
typescript sob interface merge kore ektate
sob property combined hoi.
object bananor somoi sob property dite hoi
*/

//


interface Note {
    name: string;
    price: number;
}

interface Note {
    size: number;
}

// object
const note: Note ={
    name: 'Shokhher Khata',
    price: 1990,
    size: 45
};

console.log(note); // { name: 'Shokhher Khata', price: 1990, size: 45 }
console.log('-----------------')
// typescript ete error deina, etar naam interface merging.



// Type Alias vs Interface
//1. Interface
/*
- same name multiple declare korle merge hoi 
- object structure define kore
- extend support kore
*/
//1. Type Alias
/*
- same name multiple declare korle error hoi 
- merge korte hole intersection (&) use korte hoi
- primitive, union, tuple sob type declare kora jai
*/


type Book1 = {
    name: string;
    price: number;
}

type Book2 = {
    size: number;
}

type Books = Book1 & Book2 // combine


// object create --
const books: Books = {
    name: 'Atomtic Habit',
    price: 1200,
    size: 45
};
console.log(books); // { name: 'Atomtic Habit', price: 1200, size: 45 }
console.log('-------------')
/*
Primitive type caile --> type alias use koro
object structure caile ---> interface use koro
*/