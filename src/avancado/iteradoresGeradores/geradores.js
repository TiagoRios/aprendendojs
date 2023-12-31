/* 
Aprender a usar: 
    yield
    yield*
    function*
*/
function* geradorNumerosFibonacci() {
  let fn = 1;
  let fn2 = 1;

  while (true) {
    let current = fn2;
    fn2 = fn;
    fn = fn + current;
    let reset = yield current;

    if (reset) {
      fn = 1;
      fn2 = 1;
    }
  }
}

function* geradorLetrasABC() {
  yield* ["a", "b", "c"];
}

function* geradorNumerosCrescentes() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

export {
  geradorLetrasABC,
  geradorNumerosCrescentes,
  geradorNumerosFibonacci,
}