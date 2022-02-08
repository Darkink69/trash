// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
//   };

// let key = user["likes birds"];
// alert( user.name ); // John
// alert( user.age ); // 30  
// delete user.age;
// alert( user.age ); // 30  
// console.log(key)


  
// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")


// // Вычесляемое свойство
// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag.apple ); // 5, если fruit="apple"



// Имена переменных совпадают с названиями свойст. Короткая запись
// function makeUser(name, age) {
//     return {
//       name, // то же самое, что и name: name
//       age   // то же самое, что и age: age
//       // ...
//     };
//   }


// Суммируем зарплату всех
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;
// for (key in salaries) {
//     sum += salaries[key];
// }  
// console.log(sum);


// Умножение на 2 числовых параметров с предварительной проверкой
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);
  
// function multiplyNumeric(params) {
//     for (key in params) {
//         if (typeof params[key] == 'number') {
//             params[key] *= 2;
//         }    
//     }    
// }

// console.log(menu.width)




// let user = { name: "Иван" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// // теперь user = { name: "Иван", canView: true, canEdit: true }


// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert("Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );



//   let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   }
  
//   ladder.up().up().down().up().down().showStep(); // 1


// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt('Сколько добавить?', 0);
//     };

//     // this.sum = function() {
//     //     return this.sum + this.value;
//     // }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();

// alert(accumulator.value)


// Преобразования объекта к примитивам
// let user = {
//     name: "John",
//     money: 1000,
  
//     [Symbol.toPrimitive](hint) {
//       alert(`hint: ${hint}`);
//       return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
//   };
  
//   // демонстрация результатов преобразований:
//   alert(user); // hint: string -> {name: "John"}
//   alert(+user); // hint: number -> 1000
//   alert(user + 500); // hint: default -> 1500


//   // Другой способ "устаревший"
//   let user = {
//     name: "John",
//     money: 1000,
  
//     // для хинта равного "string"
//     toString() {
//       return `{name: "${this.name}"}`;
//     },
  
//     // для хинта равного "number" или "default"
//     valueOf() {
//       return this.money;
//     }
  
//   };
  
//   alert(user); // toString -> {name: "John"}
//   alert(+user); // valueOf -> 1000
//   alert(user + 500); // valueOf -> 1500


// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");
// alert(a + b);

// Вводим число или ноль или пустую строку
// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }

// alert(`Число: ${readNumber()}`);

// function random(min, max) {
//   return Math.floor(min + Math.random() * (max - min));

// }

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525



// let str = `Hello`;

// // получаем первый символ
// alert( str[0] ); // H
// alert( str.charAt(0) ); // H

// // получаем последний символ
// alert( str[str.length - 1] ); // o


// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }


// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );
// // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ



// Проверка на "спам"
// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );


// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 20));


// Вводим числа пока это числа (в массив) и в конце выдаем сумму
// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("Введите число", 0);
//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );


// лаконичный перебор массива с описанием
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} имеет позицию ${index} в ${array}`);
// });


// // Поиск по по массиву с параметрами
// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// let user = users.find(item => item.id == 1);

// alert(user.name); // Вася


// // То же, но возвращает массив результатов
// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length); // 2


// // map - получаем массив результатов выполнения функции над исходным массивом
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6

// Простая сортировка
// let arr = [ 1, 2, -15, 85, 3, 6, 4, 32, -5 ];
// arr.sort(function(a, b) { return a - b; });
// alert(arr);  

// // То же самое
// arr.sort( (a, b) => a - b );


// Сумма элементов массива и другие аккумулирующие действия возможны...
// let arr = [1, 2, 3, 4, 5, 34, 7, 2, 465, 234];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result); // 15
// alert(Array.isArray(arr))


// Убрать разделители "-" и каждую первую букву заглавной
// function camelize(str) {
//   return str
//     .split('-')
//     .map(
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join('');

// }

// console.log( camelize("background-color"));
// console.log( camelize("list-style-image"));
// console.log( camelize("-webkit-transition") );


// function filterRangeInPlace(arr, a, b) {
//   for (i of arr) {
//       if (a <= i && i <= b); {
//           arr.splice(i, 1);
//           console.log(i);
//     }
//   }
// }

// Перебираем массив и выкидываем числа подходящие под условие. Сложность в том, что массив с каждым разом уменьшается
// function filterRangeInPlace(arr, a, b) {
  
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
    
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }  
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log( arr ); // [3, 1]


// let arr = ["HTML", "JavaScript", "CSS"];
// let arrClone = arr.slice();
// console.log( arrClone.sort());




// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];


// sortByAge(arr);

// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя


// Перемешиваем элементы массива
// let a = [1, -2, 15, 2, 0, 8];
// let result = a.sort(() => Math.random() - 0.5);
// console.log( result );  


// function unique(arr) {
//     let a = Array.from(new Set(arr));
//     return a;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log( unique(values) ); // Hare,Krishna,:-O


// // минифункция в массиве
// console.log(Array.from([1, 2, 3], x => x + x));  



// // Сумма значений объекта (словаря)
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
// function sumSalaries(salaries) {
//   let sum = 0;
//   let count = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//     count += 1;
//   }
//   return sum; 
// }

// console.log( sumSalaries(salaries) ); 

// // Количество элементов
// function count(obj) {
//     return Object.keys(obj).length;
// }

// Удобное присваивание (Деструктурирующее присваивание). Первое слово в первую переменную, второе - во вторую
// let [firstName, surname] = "Ilya Kantor".split(' ');

// // второй элемент не нужен
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]; // title = 'Consul'

// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);



// let user = { name: "John", years: 30 };

// let {name, years: age, isAdmin=false} = user;
// // ваш код должен быть с левой стороны:
// // ... = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for(let [name, salary] of Object.entries(salaries)) {
        if (salary > max) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries))