let __ = undefined;
describe('Strings', () => {
  it('concatenation', () => {
    const fruit = 'apple';
    const dish = 'pie';
    expect(`${fruit} ${dish}`).toEqual('apple pie');
  });

  it('character', () => {
    const name = 'Amory';
    const m = name.charAt(1);
    expect(m).toEqual('m');
  });
  it('character Type', () => {
    const characterType = typeof 'Amory'.charAt(1);

    expect(characterType).toEqual('string');
  });

  it('string.length', () => {
    const fruit = 'apple';
    expect(fruit.length).toEqual(5);
  });

  it('slice', () => {
    const fruit = 'apple pie';
    expect(fruit.slice(0, 5)).toEqual('apple');
  });

  it('split', () => {
    const fruit = 'apple';
    const result = fruit.split('');
    expect(result).toEqual(['a', 'p', 'p', 'l', 'e']);
  });
});
