import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Передаем строку hello, получаем Hello', () => {
    expect(toCapitalizeFirstLetter('hello')).toBe('Hello');
  });
});
