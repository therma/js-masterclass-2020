let __ = undefined;
describe('About Functions', () => {
  it('should declare function: add', () => {
    function add(first, second) {
      return first + second;
    }
    expect(add(1, 2)).toEqual(3);
  });

  it('should know variables overriding', () => {
    let message = 'Outer';

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      message = 'Inner';
      return message;
    }

    expect(getMessage()).toEqual('Outer');
    expect(overrideMessage()).toEqual('Inner');
    expect(message).toEqual('Inner');
  });

  it('should have default argument', () => {
    function getMessage(message = 'no message') {
      return `Message: ${message}`;
    }

    expect(getMessage()).toEqual('Message: no message');
    expect(getMessage('hello')).toEqual('Message: hello');
  });

  it('should have lexical scoping', () => {
    let variable = 'top-level';
    function parentfunction() {
      let variable = 'local';
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toEqual('local');
  });

  it('should use lexical scoping to synthesise functions', () => {
    function makeMysteryFunction(makerValue) {
      const newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    const mysteryFunction3 = makeMysteryFunction(3);
    const mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toEqual(23);
  });

  it('should manage arguments', () => {
    function firstFunction(firstArg) {
      return firstArg;
    }

    expect(firstFunction('first', 'second', 'third')).toEqual('first');

    function secondFunction(firstArg, secondArg) {
      return secondArg;
    }

    expect(secondFunction('arguments')).toEqual(undefined);

    // TODO: Fix the function to return all arguments.
    function returnAllArgs() {
      return Array.from(arguments);
    }

    expect(returnAllArgs('first', 'second', 'third')).toEqual([
      'first',
      'second',
      'third',
    ]);
  });
});
