// Задание 1
type ID = string | number;
let str: ID = 'Moscow';
let num: ID = 777;
// Задание 2
type DayOfWeek = 'пн' | 'вт' | 'ср' | 'чт' | 'пт' | 'сб' | 'вс';
let day: DayOfWeek = 'пн';
// Задание 3
type Person = {name: string, age: number, city: string};
let person: Person = {
    name: 'Stepan',
    age: 16,
    city: 'Moscow'
}
// Задание 4
type Car = {brand: string, model: string, year?: string};
let volkswagen = {brand: 'volkswagen', model: 'golf', year: 2008};
let honda = {brand: 'honda', model: 'civic'};
// Задание 5
let settings = {theme: 'dark', fontSize: '24', language: 'en'}
type SettingsType = typeof settings;
let anotherSettings: SettingsType = {
    theme: 'light',
    fontSize: '24',
    language: 'en'
};
// Задание 6
type KeyPerson = keyof Person;
let key1: KeyPerson = 'name';
let key2: KeyPerson = 'age';
let key3: KeyPerson = 'city';
let ketPerson = {key1, key2, key3};
// Задание 7
let directions: string[] = ['Юг','Запад','Север','Восток'] as const;
type Direction = typeof directions;
function move(direction: Direction) {
    console.log(`Двигаюсь на ${direction}`);
}
move('Юг');
// Задание 8
type Color = string | {r: number, g: number, b: number};
let color: Color = {r: 256,
    g: 256,
    b: 256
} satisfies Color;
// Задание 9
type Config = {readonly block: number,
    readonly house: number
}
let adress: Config = {
    block:11,
    house: 11
}
// задание 10
function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numberArray = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numberArray);
console.log(reversedNumbers); 
type Pair<T, U> = {
    first: T;
    second: U;
};
const numberStringPair: Pair<number, string> = {
    first: 1,
    second: 'one'
};
console.log(numberStringPair);