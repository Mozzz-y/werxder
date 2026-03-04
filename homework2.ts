// задание 1
let x: number = 20;
let y: number = 5;
console.log('20 + 5 =', x + y);
console.log('20 - 5 =', x - y);
console.log('20 * 5 =', x * y);
console.log('20 / 5 =', x / y);
console.log('20 % 5 =', x % y);
// задание 2 
let heigth: number = 8;
let width: number = 12;
console.log('Площадь прямоугольника со сторонами 12 и 8 равна', heigth * width);
// задание 3
let apples: number = 47;
let people: number = 8;
console.log(`Каждому человеку достанется ровно по ${Math.floor(apples / people)} яблок `);
// Задание 4
console.log('5 ** 4 = ', 5 ** 4);
// 5 задание
console.log('(10 + 5) * 2 - 8 / 4 = ',(10 + 5) * 2 - 8 / 4);
//// результаты совпадают
// 6 задание
let str: string = '123';
let num: number = 100;
let numStr: number = Number(str);
console.log('123 + 100 =', numStr + num);
// 7 задание 
let k: number = 3;
console.log(`${k++}\n${k}`);
//// так как k++ является постфиксным инкрементом он производит прибавление единицы однако 
//// выводит старое значение