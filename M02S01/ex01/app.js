class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  topSpeed = 160;
  topReverseSpeed = -50;
  areLightsOn = false;

  turnLighstOn() {
    this.areLightsOn = true;
  }

  turnLighstOff() {
    this.areLightsOn = false;
  }

  flashLights = () => {
    this.turnLighstOn();

    setTimeout(function () {
      this.turnLighstOff();
    }, 3000);
  };

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

// de luat commitul
