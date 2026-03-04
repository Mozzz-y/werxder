// задание 1
console.log('Старт');
setTimeout(() => {
    console.log("Прошло 2 секунды")
}, 2000)
setTimeout(() => {
    console.log("Прошло 3 секунды")
}, 3000)
setTimeout(() => {
    console.log("Прошло 4 секунды")
}, 4000)
// задание 2
function delayedMessage(message: string, delay: number): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve(message), delay));
}
delayedMessage("Привет, мир!", 2000).then(result => console.log(result));
// задание 3 
function stepA(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Шаг A выполнен"), 1000));
}
function stepB(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Шаг B выполнен"), 1000));
}
function stepC(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Шаг C выполнен"), 1000));
}
async function allSteps() {
    const resultA = await stepA();
    console.log(resultA);
    const resultB = await stepB();
    console.log(resultB);
    const resultC = await stepC();
    console.log(resultC);
}
allSteps();
// Задание 4
function fsFunc(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Первая функция"), 1000));
}
function scFunc(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Вторая функция"), 2000));
}
function thFunc(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Третья функция"), 3000));
}
async function allFunc() {
    console.time("Время выполнения");
    const results = await Promise.all([fsFunc(), scFunc(), thFunc()]);
    results.forEach(fin => console.log(fin));
    console.timeEnd("Время выполнения");
}
allFunc();
// задание 5
let userName = 'user223242';
let userPosts: string = 'Пост 1, Пост 2, Пост 3, Пост 4';
function loadUser(id: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Пользователь ${userName} загружен!`);
        }, 6000)
    })
}
function loadPosts(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${userPosts} загружены!`);
        }, 1000)
    })
}
async function loadUserWithPosts() {
    const userResult = await loadUser(223242);
    console.log(userResult);
    const postResult = await loadPosts();
    console.log(postResult); 
}
loadUserWithPosts();
