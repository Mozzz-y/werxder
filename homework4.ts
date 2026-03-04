
// Задание 1
let cities: string[] = ['Krasnodar', 'Sochi', 'Kursk', 'Orel', 'Omsk'];
// Задание 2
console.log(cities[0], cities[2], cities[4]);
// Задание 3
cities[1] = 'Moscow';
// Задание 4
cities.push('Orsk');
cities.push('Novosibirsk');
console.log(cities);
// Задание 5
cities.pop();
cities.shift();
console.log(cities);
// Задание 6
let hasMoscow: boolean = cities.includes('Moscow');
console.log('Есть Москва?', hasMoscow);
// Задание 7
let numArray: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;
for(let num of numArray) {
    sum += num;
}
console.log(sum);
// Задание 8
let charArray: number[] = [1,2,3];
let copyCharArray: number[] = [ ...charArray, 4]
console.log(charArray);
console.log(copyCharArray);