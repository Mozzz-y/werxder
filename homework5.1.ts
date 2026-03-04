// Задание 1
let numbers: number[] = [4, 17, 8, 22, 9, 35, 12, 6];
let sum = 0;
for (let number of numbers) {
    sum+= number;
}
let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
for (let num of numbers) {
    if (num > max) {
        max = num;
    }
}
let less15 = 0;
for (let y = 0; y < numbers.length; y++){
    if (numbers[y] < 15){
        less15 += 1;
    }
}
let doubled = [];
for (let doubledChar of numbers) {
    doubled.push(doubledChar * 3)
}
console.log(sum, sum / numbers.length);
console.log(max, min);
console.log(less15);
console.log(doubled);
// задание 2
let stringArray: string[] = ['кот', 'собака', 'хомяк', 'попугай', 'рыбка', 'крыса'];
let longestWord = stringArray[0];
for (let strChar of stringArray) {
    if(strChar.length > longestWord.length) {
        longestWord = strChar;
    }
}
console.log(longestWord);
let longCrtr = [];
for (let creature of stringArray) {
    if (creature.length > 5) {
        longCrtr.push(creature);
    }
}
console.log(longCrtr);
let upperArray = [];
for (let upChar of stringArray) {
    upperArray.push(upChar.toUpperCase());
}
console.log(upperArray);
let kWord = [];
for (let kChar of stringArray) {
    if (kChar[0] === 'к') {
        kWord.push(kChar);
    }
}
console.log(kWord);
// Задание 3
let price: number[] = [350, 1200, 85, 430, 2100, 560, 75];
let priceUnder500: number[] = [];
for (let priceChar of price) {
    if (priceChar < 500) {
        priceUnder500.push(priceChar);
    }
}
console.log(priceUnder500);
let catalog: string[] = [];
for (let j = 0; j < price.length; j++) {
    catalog.push(`Цена: ${price[j]} руб.`)
}
console.log(catalog);
//Задание 4
let students: string[] = ['Анна', 'Иван', 'Мария', 'Петр'];
let grades: number[] = [5, 4, 3, 5];
let diaryGrade = [];
for (let l = 0; l < students.length; l++) {
    diaryGrade.push(`Студент ${students[l]} получил оценку ${grades[l]}`);
}
console.log(diaryGrade);
// Задание 5
let fruits: string = "яблоко,груша,банан,апельсин,киви";
let fruitsArray = fruits.split(",");
console.log(fruitsArray);
let excitedFruits = [];
for (let fruit of fruitsArray) {
    excitedFruits.push(fruit + '!');
}
console.log(excitedFruits);
let joinStr = excitedFruits.join(' | ');
console.log(joinStr);