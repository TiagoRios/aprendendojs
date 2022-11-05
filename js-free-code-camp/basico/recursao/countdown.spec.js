const {countdown, countdownSolucaoSite, preencherArrayDecrescente} = require('./countdown.js');

const MIN = 1;
let numeroAleatorio; 
let arrayPreenchidoSemRecursividade;

beforeAll(() => {
  numeroAleatorio = Math.floor(Math.random() * 100) + MIN; //Numero aleatoria de 1-100
  arrayPreenchidoSemRecursividade = preencherArrayDecrescente(numeroAleatorio);
});

describe('Deve realizar contagem regressiva utilizando recursao', () => {
  test('Deve retornar array vazio', () => {
    expect(countdown(-1)).toEqual([]);
  });
  test('Deve retonar primeiro valor', () => {
    expect(countdown(numeroAleatorio)[0]).toBe(numeroAleatorio);
  });
  test('Deve retonar ultimo valor', () => {
    expect(countdown(numeroAleatorio)[numeroAleatorio -1 ]).toBe(1);
  });
  test('Deve retonar array regressivo', () => {
    expect(countdown(numeroAleatorio)).toEqual(arrayPreenchidoSemRecursividade);
  });
  test('Arrays devem ser diferentes', () => {
    expect(countdown(numeroAleatorio)).not.toEqual([2,6,3]);
  });
  test('Array deve ter seu length igual ao numeroAleatorio', () => {
    expect(countdown(numeroAleatorio)).toHaveLength(numeroAleatorio);
  });
});