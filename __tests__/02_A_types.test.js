let __ = undefined;

describe('typeof...', () => {
  it('object, number, boolean, string, function...', () => {
    expect(typeof {}).toEqual('object');
    expect(typeof []).toEqual('object');
    expect(typeof 'hackages').toEqual('string');
    expect(typeof -5).toEqual('number');
    expect(typeof false).toEqual('boolean');
    expect(typeof NaN).toEqual('number');
    expect(typeof undefined).toEqual('undefined');
    expect(typeof null).toEqual('object');
    expect(typeof Symbol(12)).toEqual('symbol');
    expect(typeof function () {}).toEqual('function');
  });

  it('Everything is an object', () => {
    expect(Object.prototype.toString.call({})).toEqual('[object Object]');
    expect(Object.prototype.toString.call([])).toEqual('[object Array]');
    expect(Object.prototype.toString.call('hackages')).toEqual(
      '[object String]'
    );
    expect(Object.prototype.toString.call(-5)).toEqual('[object Number]');
    expect(Object.prototype.toString.call(false)).toEqual('[object Boolean]');
    expect(Object.prototype.toString.call(NaN)).toEqual('[object Number]');
    expect(Object.prototype.toString.call(undefined)).toEqual(
      '[object Undefined]'
    );
    expect(Object.prototype.toString.call(null)).toEqual('[object Null]');
    expect(Object.prototype.toString.call(Symbol(12))).toEqual(
      '[object Symbol]'
    );
    expect(Object.prototype.toString.call(function () {})).toEqual(
      '[object Function]'
    );
  });
});
