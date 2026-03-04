// задание 1
function parseJSON(str: string) {
    try {
        return JSON.parse(str);
    } catch (error) {
        console.error('Ошибка при парсинге JSON')
        return null;
    }
} 
parseJSON('dgkrkgf');
// задание 2
function checkAge(age: number) {
    if (age < 0) {
    throw new Error('Невозможный возраст');
    }
    if(age > 150) {
    throw new Error('Слишком большой возраст');
    }
}
try {
    checkAge(170);
} catch (error) {
    console.error('Похоже, был введён некорректный возраст');
}  finally {
    console.log('Задание 2 завершено');
}
console.log()
// задание 3
function divideWithLog(a: number, b: number): number {
    try {
        if (b === 0) {
            throw new Error('Деление на ноль');
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
        return NaN; // Возвращаем NaN в случае ошибки
    } finally {
        console.log("Операция завершена");
    }
}
console.log(divideWithLog(10, 0));
// задание 4
function randomSuccess(): Promise<string> {
    return new Promise((resolve, reject) => {
        if (Math.random() >= 0.7) {
        reject('Неудача');
        } else {
        resolve('Успех');
        }
    })
}
async function useRandomSucces() {
    let successCount = 0;
    let errorCount = 0;
    for (let i = 0; i < 5; i++) {
        try {
            const result = await randomSuccess();
            console.log(result)
            successCount++;
        } catch (error) {
            console.error(error);
            errorCount++;
        }
    }
    console.log(`Количество успехов: ${successCount}`);
    console.log(`Количество ошибок: ${errorCount}`)
}
useRandomSucces();
// Задание 5
function step1():Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(5);
        }, 1000)
    });
}
function step2(num: number): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(num * 2);
        }, 1000)
    })
}
function step3(num: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve('успех');
            } else {
                reject('Слишком мало');
            }
        }, 1000)
    })
}
async function allCommands() {
    try {
        const result1 = await step1();
        console.log(result1);
        const result2 = await step2(5);
        console.log(result2);
        const result3 = await step3(11);
        console.log(result3);
    } catch (error) {
        console.error(error);
    }
}
allCommands();
// Задание 6 
function step1Reworked():Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(5);
        }, 2000)
    });
}
function step2Reworked(num: number): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve(num * 2);
        }, 2000)
    })
}
function step3Reworked(num: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve('успех');
            } else {
                reject('Слишком мало');
            }
        }, 2000)
    })
}
async function allCommandsReworked() {
    let result1: number | null = null;
    let result2: number | null = null;
    try {
        result1 = await step1Reworked();
        console.log(result1);
    } catch (error) {
        console.error(error);
        return null;
    }
    try {
        result2 = await step2Reworked(5);
        console.log(result2);
    } catch (error) {
        console.error(error);
        return result1;
    }
    try {
        const result3 = await step3Reworked(result2);
        console.log(result3);
    } catch (error) {
        console.error(error);
        return result2;
    }
}
allCommandsReworked();