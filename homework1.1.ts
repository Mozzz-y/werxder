// Задание 1
let str: string = 'тайп скрипт это круто!';
console.log(`${str[0].toUpperCase()}${str.slice (1)}`);
// Задание 2
let strJS: string = "JavaScript — это круто! Я учу JavaScript.";
let JS: boolean = strJS.includes('JavaScript');
console.log('Есть ли "JavaScript"?', JS);
let firstJS: number = strJS.indexOf('JavaScript');
console.log('индекс первого вхождения:', firstJS);
let lastJS: number = strJS.lastIndexOf('JavaScript');
console.log('индекс второго вхождения:', lastJS);
// Задание 3 
let strPhoto: string = 'photo.jpg';
if (strPhoto.indexOf('photo') === 0  && strPhoto.lastIndexOf('.jpg') === 5) {
    console.log('строка начинается с photo')
    console.log('строка оканчивается на .jpg')
}
let strPgotoPng: string = strPhoto;
if (strPhoto.slice(-4) === '.png') {
    console.log('строка оканчивается на .png')
}
// Задание 4 
let TS: string = 'typeScript';
let sliceTS: string = TS.slice(-6);
console.log(sliceTS);
let date: string = '2024-03-15';
let splitDate = date.split("-")
console.log(splitDate);
// Задание 5
let strApples: string = "я люблю яблоки, яблоки вкусные";
console.log(strApples.replaceAll('яблоки', 'бананы'))
// задание 6
let strAdmin: string = ' admin ';
console.log(strAdmin.trim());
// Задание 7 
let strFruitApple: string = 'apple';
let strFruitBanana: string = 'banana';
console.log (strFruitApple > strFruitBanana);
console.log (strFruitApple < strFruitBanana);
// Задание 8
console.log('*'.repeat(10))
// Задание 9
let word = 'typescript';
let upFirstChar = word[0].toUpperCase();
let restWord = word.slice(1);
let sumWord = upFirstChar + restWord;
console.log(sumWord);