// задание 1
console.log('задание 1');
for (let i = 1; i <= 30; i+=1) {
    if (i % 3 === 0) {
    console.log(i);
    }
}
// задание 2
console.log('задание 2');
let i = 1;
let result: number = 1;
while (i <= 10) {
    let answer = result *= i;
    i++;
    console.log(answer);
}
// задание 3
console.log('задание 3');
let target: number = 7;
let dice: number;
let rolls: number = 0;
do {
    dice = Math.floor(Math.random() * 6) + 1;
    rolls++;
    console.log(`Бросок ${rolls}: выпало ${dice}`);
} while (dice !== target && rolls < 10);
console.log(`Закончили за ${rolls} бросков`);
// задание 4 
console.log('задание 4');
let x = 1;
let finSum = 0;
while (x <= 50 ) {
    finSum += x;
    if (finSum > 100){
        break;
    }
    console.log(finSum);
    x = x + 1;
}
// задание 5 
console.log('задание 5');
    for (let y = 1; y <= 20; y++) {
        if (y % 3 === 0) {
            continue; // Пропускаем числа, которые делятся на 3
        }
        console.log(y); // Выводим число, если оно не делится на 3
    }
// задание 6
console.log('задание 6');
for (let t = 3; t <= 6; t++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${t} * ${j} = ${t * j}`);
    }
}
// задание 7
console.log('Треугольник:');
let height: number = 5;
for (let z = 1; z <= height; z++) {
    let line: string = '******';
    for (let v = 1; v <= z; v++) {
        line = line.slice(0,-1);
    }
    console.log(line);
}