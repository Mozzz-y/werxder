// Задание 1
let num1 = Math.floor(4.3);let num11 = Math.ceil(4.3);let num111 = Math.round(4.3);
let num2 = Math.floor(4.8);let num22 = Math.ceil(4.8);let num222 = Math.round(4.82);
let num3 = Math.floor(-2.3);let num33 = Math.ceil(-2.3);let num333 = Math.round(-2.3);
let num4 = Math.floor(4.3);let num44 = Math.ceil(4.3);let num444 = Math.round(4.3);
console.log(num1, num11, num111, num2, num22, num222, num3, num33, num333, num4, num44, num444)
// задание 2
console.log(`${2 ** 10}\n${3 ** 5}\n${Math.sqrt(144)}\n ${Math.sqrt(50)}`);
// Задание 3
let array: number[] = [34, 67, 12, 89, 45, 23];
const maxElement = Math.max(...array);
const minElement = Math.min(...array);
console.log(`Максимальный элемент: ${maxElement}`);
console.log(`Минимальный элемент: ${minElement}`);
// Задание 4
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * (60 - 50 + 1)) + 50);
console.log(Math.random());
// Задание 5
console.log(Math.abs(10 - 7));
console.log(Math.abs(5 - 12));
// Задание 6
let cube61 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log('выпало число:', cube61);
let cube201 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
console.log('выпало число:', cube201);
let cube62 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log('выпало число:', cube62);
let cube202 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
console.log('выпало число:', cube202);
let cube63 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log('выпало число:', cube63);
let cube203 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
console.log('выпало число:', cube203);
let cube64 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log('выпало число:', cube64);
let cube204 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
console.log('выпало число:', cube204);
let cube65 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log('выпало число:', cube65);
let cube205 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
console.log('выпало число:', cube205);
// задание 7
let pi: number = Math.PI;
let fixedPi = pi.toFixed(2);
let numPi = Number(fixedPi);
console.log(numPi);