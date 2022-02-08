'use strict'
let s = 0, i = 1;

while (i <= 1000 && s < 5) {
  s += 1/i;
  ++i;
}

let z=0;
for (let i = 1; i <= 1000; ++i) z += 1/i

//console.log(s);
//console.log(z);

let f, k = 0.5, b = 2;
for (let x = 0; x <= 1; x += 0.1) {
  f = k * x + b;
  //console.log(f)
}

let x=0;
for(;;) {
  if (x > 1) break;
  f = k * x + b;
  console.log(f)
  x += 0.1
}

/*
const PSW = 'pass';
let psw = null;
do {
  psw = prompt('Введите пароль', '...')
}
while (psw != PSW);
console.log('Вы вошли!');
*/
