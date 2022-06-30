const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,

  areLightsOn: false,

  turnLightsOn() {
    this.areLightsOn = true;
  },

  turnLightsOff() {
    this.areLightsOn = false;
  },

  flashLights() {
    this.turnLightsOn();

    window.setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  },

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}`);
  },

  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },

  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      this.displaySpeed();
      return;
    }
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);
