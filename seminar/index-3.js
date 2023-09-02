// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const getPrototypeChain = (obj) => {
    let current = obj;
    const outArr = [];
    while (current) {
      outArr.push(current);
      current = current.prototype;
    }
    console.log(current);
    console.log(outArr);
  };
  
  const obj1 = {
    a: 1,
    b: 2,
  };
  obj1.prototype = globalThis;
  const obj2 = {
    c: 3,
  };
  obj2.prototype = obj1;
  const obj3 = {
    d: 4,
  };
  obj3.prototype = obj2;
  getPrototypeChain(obj3);


// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    };
    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} y.o`);
    }
}
const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет

// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму, если на счету есть достаточно средств.
// Если средств недостаточно, выводится сообщение "Недостаточно
// средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета
// const account1 = new BankAccount("1234567890", 1000);
// console.log(account1.getBalance()); // Вывод: 1000
// account1.deposit(500);
// console.log(account1.getBalance()); // Вывод: 1500
// account1.withdraw(200);
// console.log(account1.getBalance()); // Вывод: 1300
// account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Not enough money');
      return;
    }
    this.balance -= amount;
  }
  getBalance() {
    return `Balance: ${this.balance}`;
  }
}

const account1 = new BankAccount('1234567890', 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

// 
//   Создайте класс Animal, который будет представлять животное. У
//   класса Animal должны быть следующие свойства и методы:
//   ● Свойство name (строка) - имя животного.
//   ● Метод speak() - выводит в консоль звук, издаваемый животным.
//   Создайте подкласс Dog, который наследует класс Animal. Для
//   подкласса Dog добавьте дополнительное свойство и метод:
//   ● Свойство breed (строка) - порода собаки.
//   ● Метод fetch() - выводит в консоль сообщение "Собака [name]
//   принесла мяч.".
//  

class Animal {
  name = 'Animal';
  speak() {
    console.log('Boo');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super();
    this.name = name;
    this.breed = breed;
  }
  fetch() {
    console.log(`Dog ${this.name} brought the ball`);
  }
}

const dog = new Dog('sharik', 'boo');
dog.fetch();
delete dog.name;
dog.fetch();
