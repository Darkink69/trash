'use strict'
/*
let S = 0, m = 10, n = 5;
all:
for(let i=1; i <= n; ++i)
  for(let j=1; j <= m; ++j) {
    if(j == 5) break all;
    S += i*j;

  }

  for(let i =- 5; i <= 5; ++i) {
    if(i == 0) continue;
    console.log('i = '+ i)

  }
    

console.log('S =', S);    


// Выводим в строку через пробел цифру k n-раз.
function testCycle1(k, n) {
  var x='';
  for (let i = 1; i <= k; ++i) {
    x += n + ' ';
  }

  return x;
}

console.log(testCycle1(2, 4));


//Выводим все числа от k до n через пробел
function testCycle2(k, n) {
  var x='';
  for (let i = k; i <= n; ++i) {
    x += i + ' ';
  }

  return x;
}

console.log(testCycle2(6, 24));



//Выводим все числа от k до n через пробел, сперва определяя, кто больше
function testCycle3(k, n) {
  var x='';
  if (k > n) n = [k, k = n][0];
  for (let i = k; i <= n; ++i) {
    x += i + ' ';
  }

  return x;
}

console.log(testCycle3(6, 6));


// Выводим числа в обратном порядке с проверкой от большего
function testCycle4(a, b) {
  var x='';
  if (b > a) b = [a, a = b][0];
  for (let i = a; i >= b; --i) {
    x += i + ' ';
  }

  return x;
}

console.log(testCycle4(11, 14));
*/

// Находим сумму квадратов в диапазоне чисел с проверкой на границы диапазона
// function testCycle5(a, b) {
//   var x = 0;
//   if (b < a) b = [a, a = b][0];
//   for (let i = a; i <= b; ++i) {
//     x += i ** 2;
//   }

//   return x;
// }

// console.log(testCycle5(2, 7));



// Печатаем квадраты чисел от 1 до n
// function testCycle6(a) {
//   var x = '';
//   for (let i = 1; i <= a; ++i) {
//     x += i ** 2 + ' ';
//   }

//   return x;
// }

// console.log(testCycle6(8));


// TODO
// function testCycle7(a) {
//   var x = 1, y = 0;
//   for (let i = 1; i <= a; i+0.5) {
//     // y += 0.5
//     x += i;
//   }

//   return x;
// }

// console.log(testCycle7(9));


// Вычисляем n!!=n∗(n−2)∗(n−4)∗...∗2 (или 1, в зависимости от четности n).
// function testCycle8(a) {
//   var x = a;
//   for (let i = 2; i < a; i+=2) {
//     x *= (a - i);
//     console.log(x)
//   }

//   return x;
// }

// console.log(testCycle8(7));



// Наибольший общий делитель - алгоритм Евклида
// function testCycle9(a, b) {
//   var x = 0;
//   while(a != 0 && b != 0){
//    (a > b) ? (a -= b) : (b -= a);
//   }
//   x = a;
//   return x;
// }

// console.log(testCycle9(13, 182));


// Простое число или составное
// function testCycle10(a) {
//   var x = 'Простое число';
//   for (let i=1; i < a; ++i) {
//     if (i != 1 & i != a & (a % i == 0)) {
//       x = 'Составное число';
//       break;
//     }
//   }
//   return x;
// }

// console.log(testCycle10(2));


// Сумма всех цифер числа
// function testCycle11(a) {
//   var x, s = 0;
//   x = ''+ a;
//   for (let i = 0; i < (x.length); ++i) {
//     s += Number(x[i])
//   }
//   return s;
// }

// console.log(testCycle11(2260));



// Перевод в двоичную систему
// function testCycle12(a) {
//   var x;
//   return x = a.toString(2);
// }

// console.log(testCycle12(42));


// Числа Фибоначчи
function testCycle13(a) {
  var i, x;
  var fib = []; // Initialize array!

  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= a; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
    // console.log(fib[i]);
    x = fib[i];
  }
  return x;
}

console.log(testCycle13(4));