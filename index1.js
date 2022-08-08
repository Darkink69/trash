// const person = new Object({
//     name: 'Vova',
//     age: 44,
//     greet: function() {
//         console.log('Hi!')
//     }
// })

// Object.prototype.sayHello = function() {
//     console.log('hi!')
// }

// const lena = Object.create(person)
// lena.name = 'Elena';

// const str = new String('stroka');



// function hello() {
//     console.log('Hello', this)
// }

// const person = {
//     name: 'Vova',
//     age: 44,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.groupEnd()
//     }
// }

// const olia = {
//     name: 'Olga',
//     age: 23
// }

// // передача, 3 варианта
// // const OliaLog = person.logInfo.bind(olia, 'FrontEnd')()
// // OliaLog()
// // person.logInfo.call(olia, 'Front')
// person.logInfo.apply(olia, ['Front'])

// // +=========??

// const array = [1, 2, 3, 4, 5]

// // function multBy(arr, n) {
// //     return arr.map(function(i) {
// //         return i * n
// //     })
// // }

// Array.prototype.multBy = function(n) {
//     return this.map(function(i) {
//         return i * n
//     })
// }


// console.log(array.multBy(24))


// function createCalc(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalc(42)
// calc()

// function createInc(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createInc(1)
// const addTen = createInc(10)

// console.log(addOne(10))
// console.log(addTen(41))


// function urlGen(domain) {
//     return function(url) {
//         return `http://${url}.${domain}`
//     }
// }

// const comUrl = urlGen('com')
// const ruUrl = urlGen('ru')

// console.log(comUrl('google'))
// console.log(ruUrl('vk'))

// console.log('start');

// setTimeout(function() {
//     console.log('end')
// }, 2000)

// console.log('request data...')

// setTimeout(() => {
//     console.log('Preparing...')

//     const backData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

    // setTimeout(() => {
    //     backData.modified = true
    //     console.log('Data received', backData)
    // }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         const backData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backData)
//     }, 2000)

// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
           
//         }, 2000)
//     }).then(clientData => {
//         console.log('Data received', clientData)
//     })

   
// }).finally(()=> {console.log('final')})

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('after 2'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('all')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('race! first')
})