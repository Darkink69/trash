'use strict';
// alert("Я JavaScript!");
// let age = 19;
// let accessAllowed = (age > 18) ? true : false;
// console.log(accessAllowed)



// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );

// let message = 'No';
// let companyName = prompt('Какое «официальное» название JavaScript?', '')
// if (companyName == 'ECMAScript') {
//     message = 'Верно!';
// } 
// alert(message);


// let inputNumber = prompt('Число?', 0);
// if (inputNumber < 0){
//     alert('-1');
// } else if (inputNumber > 0) {
//     alert('1');
// } else {
//     alert('0');
// }


// let inputNumber = prompt('Число?', 0);
// let message = (inputNumber < 0) ? 'Это меньше нуля!' :
//     (inputNumber > 0) ? 'Это явно больше нуля!' :
//     'Это полный ноль!';
// alert(message);    

// let inputNumber = 5;
// if (inputNumber >= 14 && inputNumber <= 90) {
//     alert('В диапазоне');
// } else {
//     alert('Вне диапазона')
// }

// let loginName = prompt('Логин', 'Вася');
// if (loginName == 'Админ' || loginName == 'Вася') {
//     let password = prompt('Пароль', '•••••••');
//     if (password == '123') {
//         alert('Привет, админ!');
//     } else alert('Не тот пароль');
// } else {
//     alert('Мы вас не знаем...')
// }


// let i = 3;
// while (i) alert(i--);

// Проверка после тела цикла
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);


// let i = 0;

// for (; i < 3;) {
//   console.log( i++ );
// }

// // Бесконечный цикл ))
// for (;;) {
//     // будет выполняться вечно
//   }


// Вводятся числа пока не надоест и потом выводится сумма
// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", ''); // получает число и сразу преобразует в число из строки
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Сумма: ' + sum );



// for (let i = 0; i < 10; i++) {
//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
//       alert(i); // 1, затем 3, 5, 7, 9
//   }



// Выход из цикла на метку
// outer: for (let i = 0; i < 3; i++) {

// for (let j = 0; j < 3; j++) {

//     let input = prompt(`Значение на координатах (${i},${j})`, '');

//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)

//     // сделать что-нибудь со значениями...
// }
// }

// alert('Готово!');

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 != 0) continue;
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     console.log( `number ${i}!` );
//     i++;
// }

// // Вводится число до тех пор, пока оно меньше 100
// let num;
// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num); // Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''. В этом случае цикл while тоже нужно прекратить.


// Определяем простое или состовное
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }

// Конструкция switch
// let browser = 'Edge';
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// // Функция-экспрешн с коллбэками
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );


// Анонимные функции с "?"
// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   function() { alert("Привет!"); } :
//   function() { alert("Здравствуйте!"); };

// welcome();


// Функции-стрелки
// let func = function(arg1, arg2, ...argN) {
//   return expression;
// };

// let sum = (a, b) => a + b;
// console.log(sum(1, 2))

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert('Привет') :
//   () => alert("Здравствуйте!");

// welcome(); 



function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);