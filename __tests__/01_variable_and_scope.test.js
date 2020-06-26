let __ = undefined;
describe('var...', () => {
  // var are function scoped
  function iterator(bool) {
    if (bool) {
      var name = 'Hackages';
    }
    return name;
  }

  it('what do you expect?', () => {
    const actual = iterator(true);
    expect(actual).toEqual('Hackages');
  });
});

describe('let...', () => {
  function iterator(bool) {
    let variable;
    if (bool) {
      variable = 'Hackages';
    }
    // you can see that the variable is not defined, that's because of the block scope
    //TODO Make the test pass by declaring the variable before the if
    return variable;
  }

  it('what do you expect?', () => {
    const actual = iterator(true);

    expect(actual).toEqual('Hackages');
  });
});

describe('scope', () => {
  it('Scope 1', () => {
    function foo(a) {
      return a + b;
    }
    var b = 2;
    const actual = foo(2);

    expect(actual).toEqual(4);
  });

  it('Scope 2', () => {
    function foo(a) {
      var b = a * 2;
      function bar(c) {
        return a + b + c;
      }
      const result = bar(b);
      return result;
    }
    const actual = foo(2);
    expect(actual).toEqual(10);
  });
});
