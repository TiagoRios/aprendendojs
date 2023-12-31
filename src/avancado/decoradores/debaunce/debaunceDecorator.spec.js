import debounce from "./debaunceDecorator.js";
jest.useFakeTimers();

test('Deve executar função debaunce apenas 1x', () => {
  const func = jest.fn()
  const debaunced = debounce(func, 1000);

  debaunced("test-1");
  jest.advanceTimersByTime(900);

  debaunced("test-2");
  jest.advanceTimersByTime(900);

  debaunced("test-3");
  jest.advanceTimersByTime(900);

  jest.runAllTimers();

  expect(func).toBeCalledTimes(1);
})


