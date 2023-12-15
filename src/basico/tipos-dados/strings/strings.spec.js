const {
  capitalizarElementosLista,
  formatarListaEstacoesMetroReinoUnido
} = require('./strings.js');

const { cities, citiesCapitalized, } = require('./citiesMock.js');
const { stations, stationsFormated, } = require('./stationsMock.js');

test('deve formatar string sobre estações do metro do Reino unido', function () {
  expect(formatarListaEstacoesMetroReinoUnido(stations)[0])
    .toBe(stationsFormated[0]);
})

test('deve capitalizar o nome da cidade', () => {
  expect(capitalizarElementosLista(cities)[0])
    .toMatch(citiesCapitalized[0]);
})