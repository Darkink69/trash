// const url = 'https://jsonplaceholder.typicode.com/todos'
// async function fetchAsync() {
//     try {
//         const response = await fetch(url);
//         const data = await response.json()
//         console.log(data)
//     } catch {}

// }

// fetchAsync()


// Ловушка Proxy
const person = {
    name: 'Vova',
    age: 44,
    job: 'Designer'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log(target)
        return target[prop]
    },

    set (target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            console.log('Error!')
        }
    },

    has (target, prop) {
        return ['age', 'job', 'year'].includes(prop)
    },

    deleteProperty (target, prop) {
        delete target[prop]
    }

})

// передаем в прокси функцию
const log = text => `Лог: ${text.toUpperCase()}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('...')
        return target.apply(thisArg, args).toUpperCase()
    }
})

