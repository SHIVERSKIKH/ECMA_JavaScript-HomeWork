// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с 
// двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод 
// decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let count = 0;
    return {
        increment: count++,
        decrement:count--
    };
}
console.log(createCounter());


// const createCounter = () => {
//     let counter = 0;
//     return {
//         increment: function() {
//             counter++;
//         },
//         decrement:function() {
//             counter--;
//         },
//         getCount: function() {
//             return counter;
//     }
// };
// }
// const counter = createCounter();
// console.log(counter.getCount()); 

// counter.increment();
// console.log(counter.getCount()); 

// counter.decrement();
// console.log(counter.getCount());

// 3) Напишите рекурсивную функцию findElementByClass, 
// которая принимает корневой элемент дерева DOM и название класса в качестве 
// аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(elem, className) {
    if (elem.classList && elem.classList.contains(className)) {
      return elem;
    }
    for (let i = 0; i < elem.children.length; i++) {
      let foundElement = findElementByClass(elem.children[i], className);
      if (foundElement) {
        return foundElement;
      }
    }
    return null;
  }
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);


// Если не знакомы с DOM-деревом:

// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// / примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

function factorial(num) {
    if(num === 0) {
        return 1;
    }
    return factorial(num - 1) * num;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(10));