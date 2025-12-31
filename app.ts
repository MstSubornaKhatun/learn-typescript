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



interface extend korte hole sob somoi object type hote hobe.

*/
// type SanitizedString = string;
// type EvenNumber = number; 
// interface SanitizedString extends string {
//     //.......
// }
/*
error: interface object type ba interface type
extend korte pare. kintu ekhane string primitive 
type extends korte ---> typescript support kore na.



primitive type extends kora possible na
 primitive type : string, number, boolean
 agulo object noi, only valu type
 tai interface string na number extend korte parbe na



primitive type extend korar solution
 Typescript a primitive extend korte type alias +
 Intersection use korte hoi.
*/
type SanitizedString = string & { __sanitized: true}; 

// akhn aata branded type.
// eta interface niye kora jai na


/* Union Type:
Union type mane ekta variable ba parameter 
ekaathik type hote pare. symble --> | (pipe)


Type Narrowing:
typeof diye type check kora
string hole string method use kora
*/ 


// union type 
type IdCard = number | string;
// function
function printId(id: IdCard){
    if(typeof id === 'string'){
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}
// function call
printId('hello'); // HELLO
printId(1234); // 1234
console.log('------------')




// example
function getFirstThres(x: string | number[]): string | number[] {
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
function logAnything<T>(arg: T): T {
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
function logString(arg: string): string {
    console.log(arg);
    return arg;
}
logString("logged id"); // work only for string

// another function for number
function logNumber(arg: number): number {
    console.log(arg);
    return arg;
}
logNumber(3); // 3


// again a another function for array
function logArray (arg: any[]): any[]{
    console.log(arg);
    return arg;
}

logArray([4,4,4,3,5]); // [4,4,4,3,5]

/*
any usses korle ki problem
typescript r type check korche na.
any mane typescript k andho kore deoya.
akhanei generics dorkar.
*/ 
function logAnythings(arg: any): any {
    console.log(arg);
    return arg; 
}
logAnythings('hello');
logAnythings(74);
logAnythings([1, 2, 4]);


// solution: Generics use kora 
function logAnythingss<T>(arg: T): T {
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
logAnythingss<number[]>([1, 2, 3]); // [ 1, 2, 3 ]
// kintu sadharonoto dorkar hoina typescript nijei in fer kore nei.




/*
Generics with constraint (extends) example: 
typescript a generics er sathe jodi kono nirdisto 
property thaka badhootamulo korahoi, take generic 
contraint bole.



syntax:
function functionName<T extends IterfaceName>(age: T[]): T
*/ 

// example: 
interface HasAge {
    age: number;
}

function getOldest<T extends HasAge>(people: T[]): T{
    return people.sort((a, b) => b.age - a.age)[0];
}

// usage
const peoples = [{age: 30}, {age: 40}];
getOldest(peoples).age;

/*
why use:
generics + type safety
resuable function
type assertion dorkar hoina
cleaner code
*/


// full code of example
// step 1: common interfec
interface HerAge{
    age: number;
}

// step 2: generics function with constraint
function getOldAge<T extends HerAge>(people: T[]): T {
    return people.sort((a, b) =>  b.age - a.age)[0];
}

// step 3: simple age only objects
const people: HerAge[] = [
    {age: 30},
    {age: 40},
    {age: 50}
];
const oldestPerson = getOldAge(people);
console.log(oldestPerson.age); // 50

// step 4:  more complex objects
interface Player {
    name: string;
    age: number;
};
const players: Player[] = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 35},
    {name: 'Joe', age: 18},
];

const oldestPlayer = getOldAge(players);
console.log(oldestPlayer.name); // Jane
console.log(oldestPlayer.age) // 35


console.log('------------------')
/*
generics diye api fetch kora - example
generics use kore emn funcction lekha jeta 
jekono tye er data fech krte pare and type 
safety bojai rakhe.


syntax: 
const fetchData = async <T>(path: string): Promise<T> => {
    return response.join();
    
    
    }


// example
    interface IUser {
        id: number;
        name: string;
        age: number;
    }
    const users = await fetchData<IUser[]>('/users');
    
// explatation:
T holo generic type
fuunction call korar somoi T thik hoi 
return type Promise<T>



why use?
same function diye API call
any use korte hoi na
auto suggestion paoya jai
safer code

****
generics ==> flexible function + strict type
API call a generics khub beshi use hoi
*/ 




// //full code 
// // post interface
// interface IPost {
//     id: number;
//     title: string;
//     description: string;
// }

// // user interface
// interface IUser {
//     id: number;
//     name: string;
//     age: number;
// }

// // generics fetch function 
// const fetchData = async<ResultType>(path: string):
// Promise<ResultType> => {
//     const response = await
//     fetch(`http://example.com${path}`);
//     return response.json();
// };



// // Using the generic function
// (async () => {
//     const posts = await fetchData<IPost[]>('/posts');
//         console.log(posts[0].title);
//         console.log(posts[0].description);


//     const users = await fetchData<IUser[]>('/users');
//         console.log(users[0].name);
//         console.log(users[0].age);
    
// })();




/*
Structural typing/Duck typing:
kono object er nam ba type na dekhe, 
tar property o structure dekhe type thik kora
*/


// example:
interface ICredential {
    username: string;
    password: string;
    isAdmin: boolean;
}

function login (credentials: ICredential): boolean {
    console.log(credentials);
    return true;
} 

const user = {
    username: 'suborna',
    password: 'secret',
    isAdmin: true
};

login(user); // { username: 'suborna', password: 'secret', isAdmin: true }


/*
ekhane user variable ta explicitly ICredential 
type na hole typescript error dei na.

karon --
    user object er vitore ache
        usernaem: string
        password: string

agulo ICredential interface er sathe match korche.



# jodi object er property interface er moto hoi. 
tahole typescript setake sei interface er type mone kore.




why it works: 
Typescript dekhe,
    object er shape/structure
    property nam + type match korche

typescript dekhena,
    variable er naam
    exact interface declare kora ache kina
    
    

why use structural typing: 
    code beshi fexible hoi
    ekoi structure thakle resue kora jai
    kom boilerplate likhte hoi
    javascript er sathe natural vabe kaj kore

*/

// interface IAuth {
//     username: string;
//     password: string;
//     login(username: string, password: string): boolean;

// }

// const auth = {
//     username: 'coderbhai',
//     password: 'secret',
//     login(username: string, password: string): boolean {
//         return true;
//     }
// }




// type annotation ---> type likhi
// type interface ---> typescript type bujhe nei.


/*
typescript a jokhon amra type na likhe o value dekhe
type bujhe nei, take type interface bole.
*/ // example:

let naam = 'Rahim'; // string
let age = 20; // number
let isActive = true; // boolean 


