const { preencherArray, rangeOfNumbers, rangeOfNumbersSolucaoSite} = require('./rangeOfNumbers.js')

describe ('PreencherArray(a,b)', ()=> {
  test('crescente', () =>{
    expect(preencherArray(1, 5)).toEqual([1,2,3,4,5]);
  });
  test('decrescente', () =>{
    expect(preencherArray(5, 1)).toEqual([5,4,3,2,1]);
  });
});

describe('rangeOfNumbers(a,b) - Deve retornar array crescente recursao', () => {
  test('Apenas um item positivo', () => {
    expect(rangeOfNumbers(5, 5)).toEqual([5]);
  });
  test(`de 1 a 5`, () => {
    expect(rangeOfNumbers(1, 5)).toEqual([1,2,3,4,5]);
  });
  test(`de -1 a 5`, () => {
    expect(rangeOfNumbers(-1, 5)).toEqual([-1,0,1,2,3,4,5]);
  });
  test(`De 6 a 9`, () => {
    expect(rangeOfNumbers(6, 9)).toEqual([6,7,8,9]);
  });
});
describe('rangeOfNumbers(a, b) - Deve retornar array decrescente recursao', () => {
  test('Apenas um item negativo', () => {
    expect(rangeOfNumbers(-5, -5)).toEqual([-5]);
  });
  test(`De -1 a -5`, () => {
    expect(rangeOfNumbers(-1, -5)).toEqual([-1,-2,-3,-4,-5]);
  });
  test(`De 5 a -1`, () => {
    expect(rangeOfNumbers(5, -1)).toEqual([5,4,3,2,1,0,-1]);
  });
  test(`De 9 a 6`, () => {
    expect(rangeOfNumbers(9, 6)).toEqual([9,8,7,6]);
  });
  test('Array deve ter seu length igual ao esperado', () => {
    expect(rangeOfNumbers(9, 6)).toHaveLength(4);
  });
});