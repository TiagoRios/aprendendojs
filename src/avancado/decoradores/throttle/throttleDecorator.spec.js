import { throttleDecorator } from "./throttleDecorator";
jest.useFakeTimers();

test('Deve ter somente 1(uma) chamada à função após 9 segundos', async () => {
  const funcaoSimulada = jest.fn();
  const funcaoAcelerada = await throttleDecorator(funcaoSimulada, 10000);

  funcaoAcelerada("test-1");
  funcaoAcelerada("test-2");
  funcaoAcelerada("test-3");
  funcaoAcelerada("test-4");
  funcaoAcelerada("test-5");

  jest.advanceTimersByTime(9000);

  expect(funcaoSimulada).toBeCalledTimes(1);
})

test('Deve ter somente 2(duas) chamada à função após 10 ou mais segundos', async () => {
  const funcaoSimulada = jest.fn();
  const funcaoAcelerada = await throttleDecorator(funcaoSimulada, 10000);

  funcaoAcelerada("test-1");
  funcaoAcelerada("test-2");
  funcaoAcelerada("test-3");
  funcaoAcelerada("test-4");
  funcaoAcelerada("test-5");

  jest.runAllTimers();

  expect(funcaoSimulada).toBeCalledTimes(2);
})

test('Deve chamar somente a função com argumento "test-1" após 9 segundos', async () => {
  const funcaoSimulada = jest.fn();
  const funcaoAcelerada = await throttleDecorator(funcaoSimulada, 10000);

  funcaoAcelerada("test-1");
  funcaoAcelerada("test-2");
  funcaoAcelerada("test-3");
  funcaoAcelerada("test-4");
  funcaoAcelerada("test-5");

  jest.advanceTimersByTime(9000);

  expect(funcaoSimulada).toHaveBeenLastCalledWith("test-1");
})

test('Deve ter a função com argumento "test-5" chamada por último após 10 ou mais segundos', async () => {
  const funcaoSimulada = jest.fn();
  const funcaoAcelerada = await throttleDecorator(funcaoSimulada, 10000);

  funcaoAcelerada("test-1");
  funcaoAcelerada("test-2");
  funcaoAcelerada("test-3");
  funcaoAcelerada("test-4");
  funcaoAcelerada("test-5");

  jest.advanceTimersByTime(10000);

  expect(funcaoSimulada).toHaveBeenLastCalledWith("test-5");
})
