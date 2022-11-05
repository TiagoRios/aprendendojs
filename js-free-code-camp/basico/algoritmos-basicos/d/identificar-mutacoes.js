function identificarMutacoes(arr){
  let primeiroElemento = arr[0].toUpperCase();
  let segundoElemento = arr[1].toUpperCase();

  for (const element of segundoElemento) {
    if (primeiroElemento.indexOf(element) === -1) {
      return false;
    }
  }
  return true;
}

//1ª solução do site. Parecida com a minha.

//2ª solução do site.
function mutation2(arr) {
  return arr[1]
  .toLowerCase()
  .split("")
  .every(function(letter) {
    return arr[0].toLowerCase().indexOf(letter) !== -1;
  });
}

//3ª solução do site. Operador ternario aninhados dificil manutenção.
function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}

module.exports = {
  identificarMutacoes
};