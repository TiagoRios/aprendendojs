function fatorial(n){
  if(n < 1){
    return 1;
  }else {
    return n * fatorial(n-1);
  }
}

function fatorial2(n){
    return n < 1 ? 1 : n * fatorial2(n-1);
}


//1ª solução do site
function factorialize1(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

//2ª solução do site parecida com a minha segunda.
//3ª solução do site modifica a assinatura da função.
function factorialize3(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize3(num - 1, factorial * num);
  }
}

//4ª solução do site. Ficou muito complexa.
function factorialize4(num) {
  return num < 0 ? 1 :
    new Array(num)
      .fill(undefined)
      .reduce((product, _, index) => product * (index + 1), 1);
}

module.exports = {
    fatorial
};