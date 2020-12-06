import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать 2 аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathName, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: 'api/v1/pokemons',
      query: {},
    });
  });

  test('Должна принимать 2 аргумента "getPokemons" и {name: "Pickahu"}, на выходе получить объект с полями pathName, protocol, host и query с полями name равное "Pickahu"', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pickahu' });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: 'api/v1/pokemons',
      query: {
        name: 'Pickahu',
      },
    });
  });

  test('Должна принимать 2 аргумента "getPokemon" и {id: 25, на выходе получить объект с полями pathName, protocol, host и пустой query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: 'api/v1/pokemon/25',
      query: {},
    });
  });
});
