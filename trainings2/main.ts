
// enum Color{
//     blue = 'blue',
//     gray = 'gray',
//     red = 'red',
//     black = 'black',
//     green = 'green'
// }


// class Car{
//     constructor(public mark: string,
//         public engine: string,
//         public price: number,
//         public year: number,
//         public color: Color
//         ){ }
//     info(){
//         console.log(this)
//     }
// }

// let Honda = new Car('honda', 'v3', 100000, 2010, Color.green);
// let Mersedes = new Car('Mersedes', 'v3', 100000, 2010, Color.red);
// let BMW = new Car('BMW', 'v3', 100000, 2010, Color.black);
// let Fiat = new Car('Fiat', 'v3', 100000, 2010, Color.red);
// let Kia = new Car('Kia', 'v3', 100000, 2010, Color.blue);



// class superCar extends Car{
//     constructor(public mark: string,
//         public engine: string,
//         public price: number,
//         public year: number,
//         public color: Color,
//         private tires: string,
//         private wheels: string,
//         private doors: string
//         ){ 
//             super(mark, engine, price, year, color)
//         }
//         privInfo():void{
//             console.log(`${this.tires} ${this.wheels} ${this.doors}`)
//         }
// }

// let Porshe = new superCar('Porshe', 'v3', 100000, 2010, Color.red, 'cool', 'b33', 'new');
// let Volkswagen = new superCar('Volkswagen', 'v3', 100000, 2010, Color.red, 'cool', 'b33', 'new');
// let Moskvich = new superCar('Moskvich', 'v3', 100000, 2010, Color.red, 'cool', 'b33', 'new');
// let Mitsubishi = new superCar('Mitsubishi', 'v3', 100000, 2010, Color.red, 'cool', 'b33', 'new');
// let Maybah = new superCar('Maybah', 'v3', 100000, 2010, Color.red, 'cool', 'b33', 'new');

// Porshe.info()
// Porshe.privInfo()



// ! ===================================================== sinderella

// Протокол пошуку попелюшки
// створити класс попелюшка з полями ім'я, вік, розмір ноги
// Створити 10 попелюшок
// Сторити об'єкт класу "принц" який має поля ім'я, вік, туфелька яку він знайшов.
//     Знайти яка попелюшка його)

// interface Sinderella{
//     name: string;
//     age: number;
//     legSize: number;
// }

// let sin1: Sinderella = {name: 'sin1', age: 20, legSize: 37}

interface SinderellaInter{
    legSize: number
}

class Sinderella{
    
    constructor(
        private name: string,
        legSize: SinderellaInter["legSize"]
    ){ }
    // setAge(num){
    //     if(num > 0 && num < 100) this.age = num;
    //     console.log('sorry wrong age')
    // }
}

let sin1 = new Sinderella('sin1', 22)
console.log(sin1)