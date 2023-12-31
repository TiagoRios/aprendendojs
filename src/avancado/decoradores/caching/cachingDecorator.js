// Este exemplo é do site javascript.info

function cachingDecorator(func, hash) {
  let cacheMap = new Map();
  // let cacheWeakMap = new WeakMap(); melhor para cache, mas ele só aceita objetos como chave.

  return function () {
    let key = hash(arguments);

    // retorna o objeto se ele já estiver em cache.
    if (cacheMap.has(key)) {
      return cacheMap.get(key);
    }

    // let result = func(x); NÃO adaptado para trabalhar com métodos em objetos.
    // let result = func.call(this, x); // Adaptado.
    // let result = func.call(this, ...arguments); // Adaptado. aceita mais que um argumento
    let result = func.apply(this, arguments); // mesmo que acima, mas não aceita propagação
    cacheMap.set(key, result); // adiciona em cache

    return result;
  };
}

export default cachingDecorator;