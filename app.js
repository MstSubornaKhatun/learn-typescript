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
console.log(books);
