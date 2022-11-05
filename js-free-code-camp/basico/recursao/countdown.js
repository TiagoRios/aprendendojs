function countdownSolucaoSite(n){
  return n < 1 ? [] : [n, ...countdownSolucaoSite(n - 1)];
  //n=3;
  //primeira chamada [3, ...func(3-1)] 
  // segunda chamada [2, ...func(2-1)] 
  //terceira chamada [1, ...func(1-1)] 
  //quando volor de n=0 retorna o array vazio.
  // [3 , [2, [1, [] ]]] = final == [3, 2, 1]
}

//contagem regressiva ate 1 - preenche array com recursividade
//Se n=5 resulta [5,4,3,2,1].
function countdown(n) {
  if (n <= 0) {
    return [];
  } else {
    let arr = countdown(n - 1);
    arr.unshift(n); // add item no comeco do array.
    return arr;
  }
}

// Faz a MESMA coisa que a funcao recursiva acima.
function preencherArrayDecrescente(n) {
  let a = [];
  while (n > 0){
    a.push(n);
    n--;
  }
  return a;
}

module.exports = {
  countdown,
  countdownSolucaoSite,
  preencherArrayDecrescente,
}