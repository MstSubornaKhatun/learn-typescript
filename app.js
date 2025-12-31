// // app.js 
// let num1 = '1';
var user1 = {
    name: 'Rabia',
    age: 30
};
var user2 = {
    name: 'Sabrina',
    age: 35,
    address: 'Main Street'
};
console.log(user2); // { name: 'Sabrina', age: 35, address: 'Main Street' }
console.log(user1.name); // Rabia
;
;
// create transaction objects
var transaction1 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 455,
};
var transaction2 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 455,
};
// create BankAccount object
var bankAccount = {
    accountNumber: 123,
    accountHolder: 'Jphn Doe',
    balance: 4000,
    isActive: true,
    transactions: [transaction1, transaction2],
};
// console.log
console.log(bankAccount);
console.log('------------------------');
// object using AudioBook interface
var book = {
    name: 'Atomic Habits',
    price: 1200,
    fileSize: 300,
    format: 'mp3',
    duration: 5,
};
console.log(book);
/*
{
  name: 'Atomic Habits',
  price: 1200,
  fileSize: 300,
  format: 'mp3',
  duration: 5
}
*/
console.log('-----------------------');
// object
var note = {
    name: 'Shokhher Khata',
    price: 1990,
    size: 45
};
console.log(note); // { name: 'Shokhher Khata', price: 1990, size: 45 }
console.log('-----------------');
// object create --
var books = {
    name: 'Atomtic Habit',
    price: 1200,
    size: 45
};
console.log(books); // { name: 'Atomtic Habit', price: 1200, size: 45 }
console.log('-------------');
// function
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// function call
printId('hello'); // HELLO
printId(1234); // 1234
console.log('------------');
// example
function getFirstThres(x) {
    return x.slice(0, 3);
}
// string dile
console.log(getFirstThres("hello")); // hel
// number dile
console.log(getFirstThres([1, 2, 3, 4, 5])); // [ 1, 2, 3 ]
/*
TypeScript a variable ba function er parameters
and return value er type age theke likhe deoyake
Type Annotation bole.

*/
// Generics:
/*
TypeScript a function ba class k amnvabe lekha
 jate eta jekono type er sathe kaj korte pare.
  kintu type safety bojai thake - eke Generics bole.


syntax:
function functionName<T>(arg: T): T {
    return arg;
}
*/
// Example:
function logAnything(arg) {
    console.log(arg);
    return arg;
}
// usage
logAnything('hello'); // T = string
logAnything(33); //  T = number
logAnything([1, 2, 3]); // T = number
/*
why use:
code reuse kora jai
any use korte hoi na
type safty bojai thake
runntime error kome
ekoi function barbar use kora jai



any = typescript
generics = flexible + safe

"Generics lets us write reusable and
type-safe code."

Generics keno any theke valo?
any-
type safety nai
error dhora pore na
risky

generics -
type safe
compile time error
safe
*/
// Example full code
// only for string
function logString(arg) {
    console.log(arg);
    return arg;
}
logString("logged id"); // work only for string
// another function for number
function logNumber(arg) {
    console.log(arg);
    return arg;
}
logNumber(3); // 3
// again a another function for array
function logArray(arg) {
    console.log(arg);
    return arg;
}
logArray([4, 4, 4, 3, 5]); // [4,4,4,3,5]
/*
any usses korle ki problem
typescript r type check korche na.
any mane typescript k andho kore deoya.
akhanei generics dorkar.
*/
function logAnythings(arg) {
    console.log(arg);
    return arg;
}
logAnythings('hello');
logAnythings(74);
logAnythings([1, 2, 4]);
// solution: Generics use kora 
function logAnythingss(arg) {
    console.log(arg);
    return arg;
}
// string
logAnythingss("hello"); // T = string
// number
logAnythingss(43); // T = number
// array
logAnythingss([3, 4]); // T = array 
// explict type o deoya jai optional
logAnythingss([1, 2, 3]); // [ 1, 2, 3 ]
function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
// usage
var peoples = [{ age: 30 }, { age: 40 }];
getOldest(peoples).age;
// step 2: generics function with constraint
function getOldAge(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
// step 3: simple age only objects
var people = [
    { age: 30 },
    { age: 40 },
    { age: 50 }
];
var oldestPerson = getOldAge(people);
console.log(oldestPerson.age); // 50
;
var players = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 35 },
    { name: 'Joe', age: 18 },
];
var oldestPlayer = getOldAge(players);
console.log(oldestPlayer.name);
console.log(oldestPlayer.age);
