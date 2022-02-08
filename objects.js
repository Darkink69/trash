'use strict';

// // Просторое клонирование объекта
// let book = {
//     title: 'название',
//     author: 'автор',
//     nPages: 0,
//     price: 0,
//     // Эта строка "не простая", не склонируется
//     size: {height: 100, width: 50}
// };

// let lib = {};

// for (let key in book) {
//     lib[key] = book[key];
//     console.log(key + ': ' + lib[key]);
// }

// Функция-конструктор (нужная фигня!!). Пишут с большой буквы
// function Book(title, author, price=1) {
//     if(new.target == undefined) // если вызвали без "new"
//         return new Book(title, author); // добавим new автоматически
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }

// // Создаем экземпляр, уже с маленькой буквы!
// let book1 = new Book('Муму', 'Тургенев', 10);
// // let book2 = new Book('Онегин', 'Пушкин', 20);
// let book2 = Book('Тургенев'); // не рекомендуется забывать new!

// console.log(book1);
// console.log(book2)


// МАССИВЫ

// let ar = ['один', 'два', 'три', 'четыре', 'пять']
// ar.forEach((item) => console.log(item) );

// let digit = [1, 2, 3, 4, 5, 6, 7, 8]

// digit.forEach( (item, index, array) => {
//     if(item % 2 != 0) array[index] = 1;
// });
// console.log(digit);

// let cars = [
//     {model: 'toyota', price: 1000},
//     {model: 'opel', price: 800},
//     {model: 'reno', price: 1200},
//     {model: 'gas', price: 100}
// ];

// let result = cars.filter(item => item.price < 1200 && item.price > 200 && item.model != 'opel');
// // console.log(result[0]['price']);
// console.log(result);

// let digits = ['один', 'два', 'три', 'четыре', 'пять']

// let result = digits.map(function(item) {
//     if(item.length < 4) return item.length;
// });

// console.log(result);



// деструктивное присваивание
// let [f1, f2, ...last] = ['груша', 'слива', 'яблоко', 'персик'];
// console.log(f1, f2, last);

// let [f1, f2, f3 = 0, f4 = 0] = ['груша', 'слива'];
// console.log(f1, f2, f3, f4);

// let [f1, f2, f3, f4] = 'abcd';
// console.log(f3, f4);

// let args = {
//     width: 100,
//     height: 200,
//     tag: 'div',
//     class: 'div-id'
// };

// let {width, tag} = args;
// console.log(width, tag)

// let {width: w=0, tag: t} = args;
// console.log(w, t)

// let args = {
//     size: {width: 100, height: 200},
//     tag: 'div',
//     class: 'div-id'
// };

// let {
//     size: {width: w=0},
//     class: c
//     } = args;

// console.log(w, c);    



// Развернуть массив (типа как в питоне звездочка)
// let items = [1, 2, 3, 4, 5];
// let digs = [56, -2, 4, 554, 5];
// let max = Math.max(...items, 1000, ...digs);

// console.log(max);

let letters = [...'Пора в обед'];
console.log(letters);
