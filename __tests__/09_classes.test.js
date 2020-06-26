let __ = undefined;
describe('ES5 class', () => {
  // Declare and implement the Human class using Pseudoclassical Instantiation
  function Human(name, age = 0) {
    this.name = name;
    this.age = age;
  }

  Human.prototype.walk = function () {
    console.log('walk');
  };

  Human.inject = function () {
    return [];
  };

  it('should be prototype linked ', () => {
    let human = new Human();
    expect(Object.getPrototypeOf(human)).toBe(Human.prototype);
  });

  it('should have properties name & age ', () => {
    let human = new Human('Samih', 27);
    expect(human.name).toEqual('Samih');
    expect(human.age).toEqual(27);
  });

  it('should have default age ', () => {
    let human = new Human('Samih');
    expect(human.age).toEqual(0);
  });

  it('Should contain a property walk of type function', () => {
    expect(Human.prototype).toHaveProperty('walk');
    expect(typeof Human.prototype.walk).toEqual('function');
  });

  it('Should contain a static function called inject which return an array', () => {
    expect(Human).toHaveProperty('inject');
    expect(typeof Human.inject).toEqual('function');
    expect(Array.isArray(Human.inject())).toBe(true);
  });
});
describe('ES6 class', () => {
  // Declare and implement the Man class to satisfy all assertions below
  class Human {
    constructor(name, age = 0) {
      this.name = name;
      this.age = age;
    }
    walk() {
      console.log('walk');
    }
    static inject() {
      return [];
    }
  }

  it('should be prototype linked ', () => {
    let human = new Human();
    expect(Object.getPrototypeOf(human)).toBe(Human.prototype);
  });

  it('should have properties name & age ', () => {
    let human = new Human('Samih', 27);
    expect(human.name).toEqual('Samih');
    expect(human.age).toEqual(27);
  });

  it('should have default age ', () => {
    let human = new Human('Samih');
    expect(human.age).toEqual(0);
  });

  it('Should contain a property walk of type function', () => {
    expect(Human.prototype).toHaveProperty('walk');
    expect(typeof Human.prototype.walk).toEqual('function');
  });

  it('Should contain a static function called inject which return an array', () => {
    expect(Human).toHaveProperty('inject');
    expect(typeof Human.inject).toEqual('function');
    expect(Array.isArray(Human.inject())).toBe(true);
  });
});
