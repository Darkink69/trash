// Дальше идет про массивы

// var myArray = new Array(10);
// var myArray = new Array("Иванов", "Петров", "Сидоров", "Кузнецов");  
// var myArray = ["Иванов", "Петров", "Сидоров", "Кузнецов"];  
// // var myArray = []
// myArray.length = 10;
// myArray.push("Алексанян", 'Ujhmrftdf');
// myArray.unshift("Сергеев", "Дмитриев")   
// myArray.pop()
// myArray.shift()
// console.log(myArray)
// console.log(myArray.reverse());
// console.log(myArray.sort());
// console.log(myArray.sort(function(a, b) {return b - a;}));
// console.log(myArray.sort(function(a, b) {return b.localeCompare(a);}));  
// console.log(myArray.concat("Смит")); 
// x = myArray.slice(2, 4);
// console.log(x)
// console.log(myArray.splice(2, 2));
// myArray.splice(2, 0, "Смит");
// myArray.splice(5, 0, "Сапегин");
// console.log(myArray)

// myString = myArray.join(' ');
// console.log(myString)


// Сумма двух массивов чисел
// function testArray(x, y) {
//     return (x.reduce((a, b) => a + b, 0) + y.reduce((a, b) => a + b, 0));
// }

// console.log(testArray([8, 1, 1, 7, 4, 0], [5, 8, 5, 4, 8]))


function testArray(x, y) {
    z = String(x) + String(y);
    z = z.split('').reverse();
    z.push('Иванов')
    return z.join('');
    
}

// function testArray(a, b) {
//     return ["Иванов", ...a, ...b].reverse().join('');
// }

console.log(testArray(4326, 297515))