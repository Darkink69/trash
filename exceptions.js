// try {
//     throw new Error('Что-то пошло не так!');
//   } catch (e) {
//     console.log(e.name + ': ' + e.message);
//   }

  

  // Функция вычисляет факториал, но кидает исключение, если подают число меньше 0
// function testFactorial(inputData) {
//     if (inputData < 0)                                    // Проверяем - положительное ли число
//       throw new Error("Число не должно быть меньше нуля");   // Создаем и бросаем экземпляр объекта Error
//     return (inputData) ? (inputData * testFactorial(inputData - 1)) : 1;
//   }
  
//   var myNumber = 5;
  
//   try {
//     console.log(testFactorial(myNumber));    //  попытка вызова функции
//   } catch(ex) {
//     console.log(ex.message);                 // вывод сообщения об ошибке
//   }

// Простой хороший пример
// try {
//     console.log('Начало блока try');  // (1) <--
//     lalala; // ошибка, переменная не определена!
//     console.log('Конец блока try');  // (2)
  
//   } catch(e) {
//     console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--
//   }
  
//   console.log("Потом код продолжит выполнение...");

try {
func(a);
}  
catch(e) {
function testErrorFunc(a, func) {         
    a = 9;
    let x = e.name; 
    return x;
    }
} 
  console.log(testErrorFunc(9, func));