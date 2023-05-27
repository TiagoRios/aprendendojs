const { formatarStringMetroReinoUnido } = require('./strings.js');
const { transformaPalavraCapitalizada } = require('./strings.js');

const REGEXP_CITIES = /London/;

let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

describe('Work string', () => {
  test('formatar string metro Reino unido' , function () {
    expect(formatarStringMetroReinoUnido(stations)).toHaveLength(stations.length);
  });
  test('transformar em capital Letter' , () => {
    expect(transformaPalavraCapitalizada(cities)[0]).toMatch(REGEXP_CITIES);
  });
});