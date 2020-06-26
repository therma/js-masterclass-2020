let __ = undefined;
describe('Objects', () => {
  it('object type', () => {
    const empty_object = {};
    expect(typeof empty_object).toEqual('object');
  });

  it('object literal notation', () => {
    let person = {
      name: 'Amory Blaine',
      age: 102,
    };
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  it('dynamically adding properties', () => {
    const person = {};
    person.name = 'Amory Blaine';
    person.age = 102;
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  it('adding properties from strings', () => {
    const person = {};
    person['name'] = 'Amory Blaine';
    person['age'] = 102;
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  it('shallow copy object', () => {
    const person = {
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
      five: 'five',
    };

    // Create a copy of the object to manipulate it
    let result = Object.assign({}, person, { six: 'six' });
    delete result.five;

    expect(person).not.toBe(result);
    expect(result).toEqual({
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
      six: 'six',
    });
  });

  it('return the number of keys', () => {
    let person = { name: 'Amory', age: 24, isAdmin: true };
    const nbKeys = Object.keys(person).length;
    expect(nbKeys).toEqual(3);
  });

  it('check existence', () => {
    let person = { name: 'Amory', age: 24, isAdmin: true };
    function hasKey(value) {
      // return true if person has a key named `value`. Otherwise return false
      return person.hasOwnProperty(value);
    }
    expect(hasKey('name')).toEqual(true);
    expect(hasKey('company')).toEqual(false);
  });

  it('lowercase key names', () => {
    let person = { Name: 'Amory', Age: 24, IsAdmin: true };

    let result = {};

    for (let k in person) {
      let propertyName = `${k.slice(0, 1).toLowerCase()}${k.slice(1)}`;
      result[propertyName] = person[k];
    }

    expect(result).toEqual({ name: 'Amory', age: 24, isAdmin: true });
  });
});
