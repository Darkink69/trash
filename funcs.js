'use strict';
/*
out_log('Call me!!')
function out_log(mgs) {
    console.log(mgs)
}



function showMess(from='Вася', text) {
    //let email = '###'
    let msg = from + ': ' + email + text;
    console.log(msg);
}

let email = '@@@'
showMess('Эй ты', 'иди отсюда!');
showMess('Ты мне?', 'Сам пошел!');




function abs(x) {
    if(x < 0) x = -x;
    return (x);
}

let res = abs(-5);
console.log(res);

//siple digits
function showPrimes(n) {
    for(let i = 2; i < n; i++) {
        if (!isPrimes(i)) continue;
        console.log(i); //простое
    }
}

function isPrimes(n) {
    for(let i = 2; i < n; i++) {
        if(n % i == 0) return false;
    }
    return true;
}

showPrimes(10);
*/

// let showMsg = function() {
//     console.log('Hello!');
// }

// showMsg();
// let show = showMsg;
// show();


// Запрос печенья
// function agreeCookies(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// function agreeYes() {
//     console.log('Вы приняли соглашение о печенье');
// }

// function agreeNo() {
//     console.log('Вы отказались от использования печенья');
// }

// agreeCookies('Мы используем печенье. Нам нужно ваше согласие', agreeYes, agreeNo);



// Запрос печенья 2
// function agreeCookies(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// agreeCookies(
//     'Мы используем печенье. Нам нужно ваше согласие',
//     //анонимные функции:
//     function() {console.log('Вы приняли соглашение о печенье')},
//     function() {console.log('Вы отказались от использования печенья')}
// );


// agreeCookies('Мы используем печенье. Нам нужно ваше согласие', agreeYes, agreeNo);



// 18 мне уже
// let age = prompt('Сколько лет?', 18);
// let setAccess = null;
// if(age < 18) {
//     setAccess = function() {
//         console.log('Доступ запрещен');
//     };
// }
// else {
//     setAccess = function() {
//         console.log('Доступ - можно :)');
//     };
// }  

// setAccess();


// 18 мне уже 2
// let age = prompt('Сколько лет?', 18);
// // ? - тернарный оператор выбора
// let setAccess = (age < 18) ?
//     function() {console.log('Доступ запрещен');}:
//     function() {console.log('Доступ - можно :)');};

// setAccess();


// function printText(a) {           //Определение функции
//     document.write(a);              //Тело функции - вывод содержимого переменной "а" в документ
//   };

//   printText("Hello World!");


// var person = {
//       name : "Ivan",
//       age : 25,
//       hiredYear : 2017
//     }
    
// console.log(person['name']);   
// for (var i in person) {
//     console.log(i + " is " + person[i]);
// }

// person.sayAll = function() {
//     for (var i in this) {
//     console.log(i + " is " + this[i]);
//     }
// }





// Уроки по строкам


// function testStr(a, b) {
//     return ('' + a + b).length;
// }

// console.log(testStr(5794675, 181683))


// var cat = "Cat";
// console.log(cat[1]);

// function testStr(str, n) {
//     return (str[n-1]);
// }

// console.log(testStr('Ithardlycousinmealways', 19))

// var myString = "cat dog bird";
// var myArray = myString.split(" ", 2);
// console.log(myArray);

// var catName = "Kitty";
// console.log (catName.toUpperCase());


// function testStr(a, b) {
//     return (a.toUpperCase() + b.toLowerCase())
// }

// console.log(testStr('Hello', 'World!'))

// console.log( "testme".slice(-2) ); // "me", от 2 позиции с конца
// console.log( "testme".slice(1, -1) ); // "estm", от 1 позиции до первой с конца.


// var myString = "Это просто проверочная строка!";
// console.log(myString.indexOf("про", 0));

// var myString = "Это просто проверочная строка!";
// console.log(myString.lastIndexOf("про"));

// myString = new String("Hello world");
// console.log(typeof myString.valueOf());


// function testStr(a, b) {
//     return (a.indexOf(b))
// }

// console.log(testStr('This is a test string', 'test'))


// var person = {
//       name : "Ivan",
//       age : 25,
//       hiredYear : 2017
//     }
    
//     person.sayAll = function() {
//       for (var i in this) {
//         console.log(i + " is " + this[i]);
//       }
//     }


// Регулярки
// function testRegExp(s, sub_s) {
//     var myPattern = new RegExp(sub_s);
//     var myString = s;         
//     let result = myPattern.exec(myString);   
//     console.log(result);
//     var x = '';
//     for (let i=1; i < result['index']; ++i) {
//         x += result[0] + ',';
//     }
//     return x.slice(0, -1);

// }

// console.log(testRegExp('Andsirdaarrevarariarewbutovearrmararan', 'ar'));


// function testRegExp(s, sub_s) {
//     var myString = s;
//     var y = new RegExp(sub_s,'g');
//     let result = myString.match(y);
//     return result.join();
// }    

// console.log(testRegExp('Andsirdaarrevarariarewbutovearrmararan', 'ar'));

// // То же самое, только "красиво"
// function testRegExp(s, sub_s) {
//     return s.match(new RegExp(sub_s, "g")).join(",");
// }
// console.log(testRegExp('Andsirdaarrevarariarewbutovearrmararan', 'ar'));




// function greetPirate(pirateName) {            // Объявление родительской функции
//     var greeting = "Hello ";
  
//     function checkCaptain() {                   // Объявление замыкания
//       if (pirateName != "Jack Sparrow") 
//         return greeting + pirateName;
//       else 
//         return greeting + "CAPTAIN " + pirateName + "!";
//     }
  
//     return checkCaptain();
//   }


// console.log(greetPirate("Mad Dog"));             // Выведет в консоль "Hello Mad Dog"
// console.log(greetPirate("Jack Sparrow"));        // Выведет в консоль "Hello CAPTAIN Jack Sparrow!"



// function pirate() {
//     var pirateName = "noname";
//     return {
//         getName: function() {
//             return pirateName;
//         },
//         setName: function(newName) {
//             pirateName = newName;
//         }
//     }
// }


// var newPirate = pirate();
// console.log(newPirate.getName());    // Выводим текущее содержимое переменной - там изначальный "noname"
// newPirate.setName("Jack Sparrow");   //Изменяем значение переменной на "Jack Sparrow"
// console.log(newPirate.getName());    //Выводим текущее содержимое переменной - получаем "Jack Sparrow"


// // Счетчик
// function makeCounter(initialValue) { 
//     var currentState = initialValue;
//     return function () {
//       currentState = currentState + 1;
//       return currentState;
//     }
//   }

//   var myCounter = makeCounter(5);  // Создаем экземпляр счетчика и устанавливаем его начальное значение = 5
//   console.log(myCounter());        // В консоль будет выведено значение 6
//   console.log(myCounter());        // В консоль будет выведено значение 7 
//   console.log(myCounter());        // В консоль будет выведено значение 8 


// setTimeout(function func() {
//     console.log('!!');
// }, 1000);

// let anon = () => '!!!@';
// console.log(anon());


// рекурсивная функция
// function pow(x, n) {
//     if (n <= 0) return 1;
//     else return x * pow(x, n-1);
// }

// console.log(pow(2, 10));


// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };
  
//   // Функция для подсчёта суммы зарплат
//   function sumSalaries(department) {
//     if (Array.isArray(department)) { // случай (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//       }
//       return sum;
//     }
//   }
  
//   console.log(sumSalaries(company)); // 6700
//   console.log(sumSalaries(company.sales));


// дополнительные свойства функции (кроме name, lenght) с замыканием
// function createCount() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;
//   return counter;
// }

// let counter = createCount();
// console.log(counter());
// console.log(counter());

// создаем функцию сразу в переменную (редко)
// let sumTwo = new Function('a', 'b', 'return a+b');

// console.log(sumTwo(1, 2));


// Выполнение функции с задержкой
// function createMsg() {
//   let mgs = 'Hello';
//   console.log(mgs);
// }

// setTimeout(createMsg, 2000)


// Простой пример ожидания загрузки
// function downloadMgs() {
//   let idLoad = setTimeout(function() {
//     console.log('Идет загрузка...');
//   }, 500); 

//   setTimeout(function() {
//     clearTimeout(idLoad); // останавливает setTimeout
//     console.log('Данные загружены');
//   }, 2000);  // задержка: имитация загрузки с сервера
// }

// downloadMgs();


// Ображение к функции через интервал времени и прерывание этого процесса
function createClock(seconds) {
  let sec = seconds;

  return function() {
    sec++;
    console.log('Не думай о секундах... ' + sec);
  }
}

let clock = createClock(0);
let idClock = setInterval(clock, 1000);

setTimeout(function() {    // Эта функция прервет предыдущую через 5 сек
  clearInterval(idClock)
}, 5000);