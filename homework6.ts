// задание 1
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(3, 4));
function isPositive(num: number) : boolean {
    return num > 0;
}
console.log(isPositive(-1));
function getLength(str: string) : number {
    return str.length;
}
console.log(getLength('Nascar'));
// Задание 2
function max(a: number, b: number) {
    if (a > b) {
        return a;
    }
    else if (a < b) {
        return b;
    } else {
        return 'числа равны';
    }
}
console.log(max(12, 2));
function canVote(age: number) : boolean {
    return age >= 18;
}
console.log(canVote(18));
// задание 3
let arraySum: number = 0;
function sumArray(num: number[]) : number {
    for (let i = 0; i < num.length; i++) {
        arraySum+=num[i]
    }
    return arraySum;
}
console.log(sumArray([4,12,4,5]));
let longWordArray: string[] = [];
function getLongWords (str: string[]): string[] {
    for (let word of str) {
        if (word.length > 5)  {
            longWordArray.push(word)
        }
    }
    return longWordArray;
}
console.log(getLongWords(['Россия','Чад','Борней','Австралия']))
let doubledArr: number[] = [];
function doubleNumbers(numArr: number[]): number[] {
    for (let num of numArr) {
        doubledArr.push(num * 2)
    }
    return doubledArr;
}
console.log(doubleNumbers([2,5,7,9]))
// задание 4
let greet = (name: string, title?: string): string => {
    if (title) {
        return `Здравствуйте, ${title} ${name}!`;
    } else {
        return `Здравствуйте, ${name}!`;
    }
}
console.log(greet('Степан'))
// Задание 5
let calculatePrice = (price: number, sale: number = 0): number => {
    if (sale > 0) {
        return price * sale;
    } else {
        return price;
    }
}
console.log(calculatePrice(500));
// Задание 6
let numArray: number[] = [1,2,3,4,5];
numArray.forEach(function(element){
    console.log(element);
})
// Задание 7
let sumNum = 0;
let baseStr: string = '';
let analyzeArray = (num: number[]): string => {
    for(let i = 0; i < num.length; i++) {
        sumNum += num[i]
    }
    let max = num[0];
    for (let char of num) {
        if(max < char) {
            max = char;
        }
    }
    let min = num[0];
    for (let minChar of num) {
        if (min > minChar) {
            min = minChar;
        }
    }
    baseStr = `${sumNum}, ${sumNum / num.length}, ${max}, ${min}`;
    return baseStr;
}
console.log(analyzeArray([3,5,10,22]))
