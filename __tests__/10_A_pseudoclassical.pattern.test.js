let __ = undefined;
describe('JavaScript Inheritance Pseudoclassical Patterns', () => {
  // base Animal object
  const Animal = function (name) {
    this.name = name;
  };
  // inhertiable methods
  Animal.prototype = {
    getName: function () {
      return this.name;
    },
  };

  const Male = function (name) {
    Animal.call(this, name);
    this.gender = 'Male';
  };
  Male.prototype = Object.create(Animal.prototype);

  const dog = new Male('dog');
  it('Analysing an instance of Male', () => {
    // What will be his gender?
    expect(dog.gender).toEqual('Male');

    // What will be his name ?
    expect(dog.getName()).toEqual('dog');
  });

  const Female = function (name) {
    Animal.call(this, name);
    this.gender = 'Female';
  };
  Female.prototype = Object.create(Animal.prototype);

  Female.prototype.getName = function () {
    return `${this.name.toUpperCase()}`;
  };

  const cat = new Female('cat');
  it('Analysing an instance of Female', () => {
    // What will be his gender?
    expect(cat.gender).toEqual('Female');

    // What will be their names?
    expect(cat.getName()).toEqual('CAT');
    expect(dog.getName()).toEqual('dog');
  });

  it('reference prototype', () => {
    Male.prototype = Animal.prototype;
    const animal = new Animal('animal');
    const dog = new Male('dog');

    Male.prototype.getName = function () {
      return 'MALE';
    };

    expect(animal.getName()).toEqual('MALE');
    expect(dog.getName()).toEqual('MALE');
  });
});
