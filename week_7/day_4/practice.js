//example 1
// let person = {}
// person.name = 'sud'
// person.energy = 10;
// console.log(person)

// person.eat = function(amount){
//     console.log(`${this.name} is eating`);
//     this.energy += amount
// }

// person.sleep = function(time){
//     console.log(`${this.name} is sleeping`)
//     this.energy += time;
// }

// person.code = function(time){
//     console.log(`${this.name} is codeing`)
//     this.energy -= time;
// }


// person.eat(10)
// person.sleep(10)
// person.code(24)
// console.log(person)

//examp 2

// function Person(name, energy){
//     let person = {}
//     person.name = name,
//     person.energy = energy,

//     person.eat = function(amount){
//         console.log(`${this.name} is eating`)
//         this.energy += amount
//     }

//     person.sleep = function(time){
//     console.log(`${this.name} is sleeping`)
//         this.energy += time;
//     }

//     person.code = function(time){
//         console.log(`${this.name} is codeing`)
//         this.energy -= time;
//     }

//     return person
// }

// const sud = new Person('sud', 15)
// const ashish = new Person('Ashish', 15)
// console.log(ashish)
// sud.code(10)
// ashish.eat(17)


//example 3
// const personMethod = {
//     eat(amount){
//         console.log(`${this.name} is eating`)
//         this.energy += amount
//     },
//     sleep(time){
//     console.log(`${this.name} is sleeping`)
//         this.energy += time;
//     },
//     code(time){
//         console.log(`${this.name} is codeing`)
//         this.energy -= time;
//     }
// }

// function Person(name, energy){
//     let person = {}
//     person.name = name
//     person.energy = energy
//     person.eat = personMethod.eat
//     person.sleep = personMethod.sleep
//     person.code = personMethod.code

//     return person

// }

// const sud = new Person('sud', 10)
// sud.eat(10)
// console.log(sud)

//example 4
// const personMethod = {
//     eat(amount){
//         console.log(`${this.name} is eating`)
//         this.energy += amount
//     },
//     sleep(time){
//     console.log(`${this.name} is sleeping`)
//         this.energy += time;
//     },
//     code(time){
//         console.log(`${this.name} is codeing`)
//         this.energy -= time;
//     }
// }

// function Person(name, energy){
//     let person = Object.create(personMethod)
//     person.name = name
//     person.energy = energy

//     return person
// }

// const sud = new Person('sud' ,13)
// sud.eat(10)
// sud.code(10)
// sud.sleep(30)
// console.log(sud)

// example 5
// function Person(name, energy){
//     let person = Object.create(Person.prototype)
//     person.name = name
//     person.energy = energy

//     return person
// }

// Person.prototype.eat = function (amount){
//     console.log(`${this.name} is eating`)
//     this.energy += amount
// }

// const sud = new Person('sud' ,13)
// sud.eat(10)
// console.log(sud)

//example 6 class
// class Person {
//     constructor(name, energy){
//         this.name = name
//         this.energy = energy
//     }

//     eat(amount) {
//         console.log(`${this.name} is eating`)
//         this.energy += amount
//     }
//     sleep(time) {
//         console.log(`${this.name} is sleeping`)
//         this.energy += time
//     }
//     code(time) {
//         console.log(`${this.name} is eating`)
//         this.energy -= time
//     }
// }

// const sud = new Person('sud', 12)
// sud.eat(29)
// sud.code(29)
// sud.sleep(29)
// console.log(sud)

// example 7 class super
// class Person {
//     constructor(name, energy){
//         this.name = name
//         this.energy = energy
//     }

//     eat(time){
//         console.log(`${this.name} is eating`)
//         this.energy += time
//     }

//     code(time){
//         console.log(`${this.name} is coding`)
//         this.energy += time
//     }
// }
// //extneds the funtioanlity of person instance
// class Coder extends Person{
//     constructor(name, energy, age, gender){
//         super(name, energy)
//         this.age = age
//         this.gender = gender
//     }

//     sleep(amount){
//         console.log(`${this.name} is sleeping`)
//         this.energy += amount
//     }


// }
// const sud = new Coder('sud', 12, 25, 'male')
// console.log(sud)
// // sud.eat(12)
// // sud.code(23)

//class extend new eexample
// class LinvingThing {
//     constructor(breathe, reproduce, move){
//         this.breathe = breathe
//         this.move = move
//         this.reproduce = reproduce
//     }
// }

// class Cow extends LinvingThing{
//     constructor(breathe, reproduce, move, legs, color){
//         super(breathe, reproduce, move)
//         this.move = false
//         this.legs = legs
//         this.color = color
//     }
// }

// const man = new LinvingThing('Yes', 'No', 'Yes')
// console.log(man)
// const cow = new Cow('Yes', 'Yes', 'Yes', 4, 'White')
// console.log(cow)

//example 8
// class Rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }

//     area(){
//         return this.width * this.height
//     }
// }

// const rec = new Rectangle(10, 20)
// console.log(rec.area(10,20))
// console.log(rec)

// two classes car
// class Car{
//     constructor(hp){
//         this.hoursPower = hp
//         this.fuel = 100;
//     }

//     consumeFuel(amount){
//         this.fuel -= amount
//     }
// }

// let myCar = new Car(102)
// console.log(myCar)

// class Sedan{
//     constructor(name){
//         this.name = name
//     }
//     printName(){
//         console.log(this.name)
//     }
// }

// let mySedan = new Sedan('Civic')
// console.log(mySedan)
// mySedan.printName() 

//inheritence
// class Car{
//     constructor(hp, name){
//         this.hoursPower = hp
//         this.name = name
//         this.fuel = 100
//     }

//     consumeFuel(amount){
//         this.fuel -= amount
//     }
// }

// class Sedan extends Car{
//     printName(){
//         console.log(this.name)
//     }
// }

// let mySedan = new Sedan(150, 'Civic')
// console.log(mySedan)
// mySedan.consumeFuel(10)
// console.log(mySedan)
// mySedan.printName()

//super

// class Car{
//     constructor(hp, name){
//         this.hoursePower = hp
//         this.name = name
//         this.fuel = 100
//     }

//     consumeFuel(amount){
//         this.fuel -= amount
//     }
// }

// class Sedan extends Car{
//     constructor(hp, name, numSeats){
//         super(hp, name)
//         this.numSeats = numSeats
//     }

//     printName(){
//         console.log(this.name)
//     }

//     updateHorsePower(input){
//         super.hoursePower = input
//     }
// }

// let mySedan = new Sedan(150, 'Civic', 8)
// mySedan.updateHorsePower(350)
// console.log(mySedan)

//test.md ques
// class Room{
//     constructor(l = 0,b = 0, h = 0,t = 0 ){
//         this.len  = l;
//         this.br   = b;
//         this.ht   = h;
//         this.tempC = t;
//     }
//     toKelvinFromCelsius( a = 0){
//         this.tempC =  this.tempC || a
//         return this.tempC+273.15;
//     }
//     toFarFromCelsius(){

//     }
// }

// s1 = new Room(10,10,10)
// console.log(s1)

// c =s1.toKelvinFromCelsius()
// console.log(c)
// console.log(s1)
// a = s1.toKelvinFromCelsius(100)
// console.log(a)
// console.log(s1)
// b = s1.toKelvinFromCelsius(200)
// console.log(b)
// console.log(s1)

const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)
