// Вычесляем синус в радианах
// function testMath(a) {
//     return (Math.sin(a * Math.PI / 180));
// }

// console.log(testMath(348));


// Площадь треугольника
// function testMath(a, b, c) {
//     c = c * Math.PI / 180;
//     return 1/2*a*b*Math.sin(c);
// }

// console.log(testMath(2, 10, 16));

// Нахождение большего-меньшего, округление
function testMath(a, b, c, d) {
    let maximum = Math.max(a, b, c, d)
    let minimum = Math.min(a, b, c, d)
    return Math.ceil(maximum / minimum);
}

console.log(testMath(1, 4, 8, 8));

// Math.min ([Значение1[,значение2[, ...]]]) - возвращает минимальное значение из аргументов.
// Math.max ([Значение1[,значение2[, ...]]]) - возвращает максимальное значение из аргументов.  
// Math.floor (x) - округление до ближайшего целого в меньшую сторону
// Math.ceil (x) - округление до ближайшего целого в большую сторону
// Math.abs(x) - возвращает абсолютное значение числа, его еще называют "модуль"
// Math.round(x) - округляет число по правилам математики

// Math.sqrt(x) - возвращает квадратный корень из аргумента
// Math.pow(base, exponent) - возводит число "base" в степень "exponent"
// Math.log(x) - вычисляет натуральный (по основанию е) логарифм числа
// Math.exp(x) - вычисляет экспоненту - значение числа е в степени аргумента "х"
// Math.random() - возвращает случайное число от 0 (включительно) до 1


// Возведение в степень
// function testMath(a, b) {
//     return Math.pow(a, b);
// }

// console.log(testMath(5, 1));

function myFunction() { };

// var myFunction = (function() {document.write(a)}; );

// function myFunction {document.write("Hello world!"); };

function Function(a) { document.write(a); };

var myFunction = function(a) {document.write(a); } ;

// function %myFunction() {document.write("Hello World!"); };