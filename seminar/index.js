//  1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); 
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

const mergeArrays = (arr1, arr2) => {
   return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// const removeDuplicates = (...rest) => {
//     return rest.filter((item, index) => {
//         return rest.indexOf(item) === index;
//     });
// }
const removeDuplicates = (...rest) => {
    const unikRi = [...new Set(rest)];
    return unikRi;
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

const getEvenNumbers = (arr) => {
    return arr.filter(el => !(el % 2));
}
console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
const calculateAverage = (arr) => {
    return (arr.reduce((akk, el) => akk + el, 0)) / arr.length;
}
console.log(calculateAverage([1, 2, 3, 2, 4, 1, 5]));
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

const capitalizeFirstLetter = (str) => {
    const newArr = str.split(' '); //разбиваем строку на массив
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1);
    }
    return newArr.join(' ');
}
console.log(capitalizeFirstLetter('строка1, строка2, строка3'));

// const capitalizeFirstLetter = (str) => str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
// console.log(capitalizeFirstLetter('строка1, строка2, строка3'));

// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

const createCalculator = (params) => {
    return{
        add:(num) => params + num, 
        subtract:(num) => num - params
    };
}
const first = createCalculator(1);
console.log(first.add(5));
console.log(first.subtract(10));

// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); Ожидаемый результат: "Hello, John!"

const createGreeting = (name) =>
    () => console.log(`Hello ${name}`);

const greeting = createGreeting('John');
greeting();

// const createGreeting = (name) => {
// 	const greering = (name) => `Hello, ${name}`;
// 	return greering(name);
// };

console.log(createGreeting('Alex'));

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); Ожидаемый результат:
// false
// console.log(isPasswordValid('secret'));  Ожидаемый результат: true

const createPasswordChecker = (len) => {
    return (pass) => pass.length < len;
};
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password'));
console.log(isPasswordValid('secret')); 

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
//  Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

function sumDigits(num) {
    if(num < 10) {
        return num;
    } else {
        return (num % 10) + sumDigits(Math.floor(num / 10));
    };
}
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

const sumDigits = (num) => {
	let sum = 0;
	for (const numb of `${num}`) {
		sum += +numb;
	}
	return sum;
};

console.log(sumDigits(123));
console.log(sumDigits(456789));