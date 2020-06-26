let __ = undefined;
describe('About Arrays', () => {
  it('should create arrays', () => {
    const emptyArray = [];
    expect(typeof emptyArray).toEqual('object');
    expect(emptyArray.length).toEqual(0);

    const multiTypeArray = [
      0,
      1,
      'two',
      function () {
        return 3;
      },
      { value1: 4, value2: 5 },
      [6, 7],
    ];
    expect(multiTypeArray[0]).toEqual(0);
    expect(multiTypeArray[2]).toEqual('two');
    expect(multiTypeArray[3]()).toEqual(3);
    expect(multiTypeArray[4].value1).toEqual(4);
    expect(multiTypeArray[4]['value2']).toEqual(5);
    expect(multiTypeArray[5][0]).toEqual(6);
  });

  it('should understand array literals', () => {
    const array = [];

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should understand array length', () => {
    let array = [1, 2, 3, 4];

    expect(array.length).toEqual(4);
    array.push(5, 6);
    expect(array.length).toEqual(6);

    array = new Array(10);
    expect(array.length).toEqual(10);

    array.length = 5;
    expect(array.length).toEqual(5);
  });

  it('should slice arrays', () => {
    const array = ['peanut', 'butter', 'and', 'jelly'];

    expect(array.slice(0, 1)).toEqual(['peanut']);
    expect(array.slice(0, 2)).toEqual(['peanut', 'butter']);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(['and', 'jelly']);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(5, 1)).toEqual([]);
    expect(array.slice(1)).toEqual(['butter', 'and', 'jelly']);
    expect(array.slice(0, -1)).toEqual(['peanut', 'butter', 'and']);
    expect(array.slice(0, -3)).toEqual(['peanut']);
  });

  it('should know array references', () => {
    const array = ['zero', 'one', 'two', 'three', 'four', 'five'];

    function passedByReference(refArray) {
      refArray[1] = 'changed in function';
    }

    passedByReference(array);
    expect(array[1]).toEqual('changed in function');

    const assignedArray = array;
    assignedArray[5] = 'changed in assignedArray';
    expect(array[5]).toEqual('changed in assignedArray');

    const copyOfArray = array.slice();
    copyOfArray[3] = 'changed in copyOfArray';
    expect(array[3]).toEqual('three');
  });

  it('should push and pop', () => {
    const array = [1, 2];
    array.push(3);
    expect(array).toEqual([1, 2, 3]);

    const poppedValue = array.pop();
    expect(poppedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });

  it('should transform array', () => {
    const array = ['samih', 'booba'];

    var result = array.map(function (value) {
      return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
    });

    expect(result).toEqual(['Samih', 'Booba']);
  });

  it('should filter array', () => {
    const array = ['samih', undefined, 3, 'booba'];
    // Filter values that are not string
    var result = array.filter(function (value) {
      return typeof value === 'string';
    });

    expect(result).toEqual(['samih', 'booba']);
  });

  it('should reduce array', () => {
    const array = ['samih', 'booba'];
    // Should retun the number of characters
    var result = array.reduce(function (acc, value) {
      return acc + value.length;
    }, 0);

    expect(result).toEqual(10);
  });

  it('should remove duplicate value', () => {
    const array = ['samih', 'booba', 'samih'];

    var result = array.reduce(function (acc, value) {
      if (!acc.includes(value)) {
        acc.push(value);
      }
      return acc;
    }, []);

    expect(result).toEqual(['samih', 'booba']);
  });
});
