class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }
  constructor({ maxSpeed, price }) {
    this.speed = 0;

    this.maxSpeed = maxSpeed;
    this._price = price;

    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (value + this.speed <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

// console.log(mustang); //Car {speed: 0, maxSpeed: 200, _price: 2000, isOn: false, distance: 0}
// console.log(Car.getSpecs(mustang));
// //maxSpeed: 200, speed: 0, isOn: false, distance: 0, price: 2000

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20); // speed: 30
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

////
class Model extends Car {
  static addModel(car) {
    return `${car.model} it's good!`;
  }
  constructor({ maxSpeed, price }, model) {
    super({ maxSpeed, price }, model);
    this.model = model;
  }
  eliminate() {
    super.turnOff();
    this._price = 0;
    this.distance = 0;
    this.maxSpeed = 0;
    return console.log(`${this.model} is eliminated!`);
  }
}
const mazda = new Model({ maxSpeed: 250, price: 1000 }, 'Mazda');
console.log(mazda);
console.log(Car.getSpecs(mazda)); // maxSpeed: 250, speed: 0, isOn: false, distance: 0, price: 1000
console.log(mazda.price); // 1000
mazda.price = 5000;
console.log(mazda.price); // 5000
mazda.turnOn();
mazda.accelerate(50);
mazda.drive(2);

console.log(Car.getSpecs(mazda)); //maxSpeed: 250, speed: 50, isOn: true, distance: 100, price: 5000
mazda.eliminate();

console.log(Car.getSpecs(mazda)); //maxSpeed: 0, speed: 0, isOn: false, distance: 0, price: 0
console.log(Model.addModel(mazda)); //Mazda it's good!
