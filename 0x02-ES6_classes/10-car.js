export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    const symbols = Object.getOwnPropertySymbols(this);

    for (const symbol of symbols) {
      clonedCar[symbol] = this[symbol];
    }

    return clonedCar;
  }
}
