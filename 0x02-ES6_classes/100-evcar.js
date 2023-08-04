import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();
    const symbols = Object.getOwnPropertySymbols(this);

    for (const symbol of symbols) {
      clonedCar[symbol] = this[symbol];
    }

    return clonedCar;
  }
}
