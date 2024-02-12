import { delayDecorator } from "./delayDecorator.";
jest.useFakeTimers();

test('Deve chamadar a função com delay após 2 segundos', async () => {
  const funcaoSimulada = jest.fn()
  const funcaoComDelay = await delayDecorator(funcaoSimulada, 2000);

  funcaoComDelay("test-1");
  jest.advanceTimersByTime(2000);

  expect(funcaoSimulada).toBeCalledTimes(1);
})

test('Não Deve chamadar a função com delay antes de 2 segundos', async () => {
  const funcaoSimulada = jest.fn()
  const funcaoComDelay = await delayDecorator(funcaoSimulada, 2000);

  funcaoComDelay("test-1");
  jest.advanceTimersByTime(1900);

  expect(funcaoSimulada).toBeCalledTimes(0);
})
