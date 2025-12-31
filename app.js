// // app.js 
// let num1 = '1';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
console.log(oldestPlayer.name); // Jane
console.log(oldestPlayer.age); // 35
console.log('------------------');
// generics fetch function 
var fetchData = function (path) { return __awaiter(_this, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("http://example.com".concat(path))];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.json()];
        }
    });
}); };
// Using the generic function
(function () { return __awaiter(_this, void 0, void 0, function () {
    var posts, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchData('/posts')];
            case 1:
                posts = _a.sent();
                console.log(posts[0].title);
                console.log(posts[0].description);
                return [4 /*yield*/, fetchData('/users')];
            case 2:
                users = _a.sent();
                console.log(users[0].name);
                console.log(users[0].age);
                return [2 /*return*/];
        }
    });
}); })();
