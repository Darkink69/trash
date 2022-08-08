// const person = Object.create(
//     {
//         calculateAge() {
//             console.log('Age', value)
//         }
//     },

//     {
//         name: {
//             value: 'Vova',
//             enumerable: true,
//             writable: true,
//             configurable: true
//         },
//         birth: {
//             value: 1978,
//             enumerable: false
//         },
//         age: {
//             get() {
//                 return new Date().getFullYear() - this.birth
//             },
//             set(value) {
                
//                 document.body.style.background = 'red'

//             }
//         }
//     }
// )

// for (let key in person) {
//     console.log(key, person[key])
// }



// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// class Animal {

//     static type = 'ANIMAL'

    
//     constructor(options) {
        
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('animal!!!')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal {
//     static type = 'CAT'

//     constructor(options) {
//         super(options)
//         this.color = options.color
//         this.fur = options.fur
//         this.age = options.age

//     }

//     voice() {
//         super.voice()
//         console.log('Im Cat!')
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

// const cat2 = new Cat ({
//     fur: true,
//     age: 2
// })

// cat.ageInfo = 20


// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
        
//     }

//     hide() {
//         this.$el.style.display = 'none'
        
//     }

//     show() {
//         this.$el.style.display = 'block'
//     }
    
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)

//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.color
        
//     }
// }

// const box1 = new Box({
//     selector: "#box1",
//     size: 100,
//     color: 'red'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 150,
//     color: 'blue'
// })

class Drink {
    constructor(options) {
        this.type = options.type
        this.children = options.children
        this.strong = options.strong
        this.brend = options.brend
        this._value = options._value
        this.value = options.value
    }

    drinking() {
        console.log('Пей до дна!')
    }

    empty() {
        console.log('Бутылка пуста')
    }

    full() {
        console.log('Бутылка полна до краев')
    }
}

const drink = new Drink ({
    type: 'alcohol',
    children: false 
})

class Beer extends Drink {
    static type = 'BEER'

    constructor(options) {
        super(options)
        this.color = options.color
        
    }

    text() {
        super.drinking()
        console.log('Пиво без водки..')
    }

    get valueBottle() {
        if(this._value > 0.1) {
            return Number((this._value -= 0.1).toFixed(1))
        } else {
            this._value = 0
            super.empty()
        }
    }

    get valueBottleUp() {
        if(this._value < this.value) {
            return (this._value += 0.1).toFixed(1)
        } else {
            super.full()
        }
        
    }

    set valueBottle(newValue) {
        this._value = newValue
    }
}

const beer1 = new Beer ({
    brend: 'Жигулевское',
    color: 'Светлое',
    strong: 5,
    _value: 0.5,
    value: 0.5,
    children: false
})

const beer2 = new Beer({
    brend: 'Tuborg',
    color: 'Темное',
    _value: 0.33,
    value: 0.33,
})