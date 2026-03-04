// задание 1
let secretNumber: number = 7;
let guess: number = 5;
let win: string = '"Ты победил!"';
let tryAgain: string = '"Попробуй еще"';
if (guess === 7) {
    console.log(win);
} else {
    console.log(tryAgain);
}
// задание 2
let purchaseAmount: number = 4000;
if (purchaseAmount >= 5000) {
    console.log(`Итого ${purchaseAmount - purchaseAmount * 0.1}, скидка активна.`);
} else {
    console.log(`Итого ${purchaseAmount}, скидки нет.`);
}
// задание 3
let age: number = 20;
if (age < 12){
    console.log('Ребёнок');
}
else if (age >= 12 && age <= 17){
    console.log('Подросток');
}
else if (age >= 18 && age <= 60){
    console.log('Взрослый');
}
else{
    console.log('Пенсионер');
}
// задание 4
let login: string = 'wexder206';
let password: string = 'pigeon_23';
if ( login === 'werxder206' && password === 'pigeon_23') {
    console.log('"Добро пожаловать!"');
} 
else if ( login !== 'werxder206' ) {
    console.log('"Пользователь не найден"');
}
else if ( login === 'werxder206' && password !== 'pigeon_23') {
    console.log('"Неверный пароль"');
}
// задание 5
let parity: string  = 17 % 2 === 0 ? 'чётное': 'нечётное';
console.log(parity);
// задание 6
let dayNumber: number = 5;
let dayName: string;
switch (dayNumber) {
    case 1:
        dayName = 'Понедельник';
        break; 
    case 2:
        dayName = 'Вторник';
        break; 
    case 3:
        dayName = 'Среда';
        break; 
    case 4:
        dayName = 'Четверг';
        break; 
    case 5:
        dayName = 'Пятница';
        break; 
    case 6:
        dayName = 'Выходной';
        break; 
    case 7:
        dayName = 'Выходной';
        break; 
    default:
        dayName = 'Некорректный день';
}
console.log(`День ${dayNumber} - это ${dayName}.`);