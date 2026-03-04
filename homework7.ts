// Задание 1
console.log('задание 1\n')
let firstArray = [92, 5, 8, 11, 14];
let mapFirstArray = firstArray.map(num => num *3);
console.log(mapFirstArray);
let strArray = ['привет', 'мир', 'typescript'];
let mapStrArray = strArray.map(x => x.toUpperCase());
console.log(mapStrArray);
// Задание 2
console.log('задание 2\n')
let secondArray = [15, 22, 8, 31, 12, 47, 19];
let filtredArray = secondArray.filter(x => x % 2 === 0);
console.log(filtredArray);
let animals = ['кот', 'собака', 'хомяк', 'слон', 'тигр'];
let filtredAnimals = animals.filter(x => x.length > 3);
console.log(filtredAnimals);
let fruits = ['яблоко', 'банан', 'апельсин', 'киви', 'груша'];
let filtredFruits = fruits.filter(x => x.includes('а'));
console.log(filtredFruits);
// Задание 3
console.log('задание 3\n')
let thirdArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let combinedArray = thirdArray
    .filter(x => x % 2 === 0)
    .map(x => x * 10);
console.log(combinedArray);
let fruitsArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let combinedFruits = fruitsArray
    .filter(x => x.length > 5)
    .map(x => x.toUpperCase());
console.log(combinedFruits);
// Задание 4
console.log('задание 4\n')
let sumArray = [23, 45, 12, 67, 34];
let finalSumArray = sumArray.reduce((x, y) => x + y);
console.log(finalSumArray);
let multiArray = [1,2,3,4,5];
let finalMultiArray = multiArray.reduce((x, y) => x * y);
console.log(finalMultiArray);
const numbers: number[] = [42, 17, 85, 23, 91, 36];
const maxNumber = numbers.reduce((x, y) => {
    return Math.max(x, y);
}, numbers[0]); 
console.log(maxNumber); 
const minNumber = numbers.reduce((x, y) => {
    return Math.min(x, y);
}, numbers[0]); 
console.log(minNumber); 
let count = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.even++;
    } else {
        acc.odd++;
    }
    return acc;
}, { even: 0, odd: 0 });

console.log(count); 
// Задание 5
console.log('задание 5\n')
let chainArray = [5, 12, 8, 130, 44, 67, 23, 9];
let finalChainArray = chainArray
    .filter(x => x > 10)
    .map(x => x * 2)
    .filter( x => x > 50)
    .map(x => x.toString())
    .map(x => `Результат: ${x}`);
console.log(finalChainArray);
// Задание 6
console.log('задание 6\n')
const words: string[] = ['кот', 'собака', 'хомяк', 'попугай', 'рыбка'];
const totalLetters = words.reduce((accumulator, currentWord) => {
    return accumulator + currentWord.length;
}, 0);
console.log(totalLetters);
const longestWord = words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
}, '');
console.log(longestWord);
const wordsWithLength = words.map(word => `${word} (${word.length})`);
console.log(wordsWithLength); 
