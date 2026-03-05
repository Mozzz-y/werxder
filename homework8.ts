// Задание 1
console.log('Задание 1')
let film = {title : 'Оно', 
    year: 2018,
    rating: 7.5
}
console.log(film);
// Задание 2
console.log('Задание 2')
film.year = 2019;
film.director = 'Andreas';
console.log(film);
// Задание 3
console.log('Задание 3')
let person = {name: 'Elena',
    age: 23,
    address: {city: 'Moscow', street:'Nikitinskaya'}
}
console.log(person.address.city)
// Задание 4
console.log('Задание 4')
let object = { name: 'Анна',
    age: 25,
    city: 'Москва'
}
for (let keys in object) {
    console.log(`${keys}: ${object[keys]}`)
}
// Задание 5
console.log('Задание 5')
let manObject = { name: 'Иван',
    age: 25,
    city: 'Москва'
}
let updateUser = {...manObject};
updateUser.city = 'СПб';
console.log(updateUser);
console.log(manObject);
// Задание 6
console.log('Задание 6')
let newPerson = {name: 'alex',
    age: 22
}
let contact = {email: 'alex2004@gmail.com',
    phone: 22241123234
}
let fullUserInfo = {...newPerson, ...contact};
console.log(fullUserInfo);
// Задание 7
console.log('Задание 7')
let user = { name: 'Иван',
    age: 25,
    city: 'Москва'
}
let updatedUser = {...user};
updatedUser.city = 'СПб';
console.log(updatedUser);
// Задание 8
console.log('Задание 8')
let Ivan = {name: 'Ivan', grade: 3};
let Sveta = {name: 'Sveta', grade: 5};
let Nikita = {name: 'Nikita', grade: 4};
let students = [Ivan, Sveta, Nikita];
let studentsName = students.map(x => x.name);
let studentsGrade = students
    .map(x => x.grade)
    .filter(x => x >= 4);
let studentGrade = students.map(x => x.grade);
let totalGrade = studentGrade.reduce((acc, grade) => acc + grade, 0) / studentGrade.length;
console.log(studentsName);
console.log(studentsGrade);
console.log(totalGrade);