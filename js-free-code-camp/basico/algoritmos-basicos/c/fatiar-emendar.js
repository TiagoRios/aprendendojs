function fatiarEmendar(arr1, arr2, posicao){
  let copiaArr2 = arr2.slice(); //copiar parte do array
  //sintax: splice(indexInicial, quantosDeletarApartirIndex, elementoParaInserir); 
  copiaArr2.splice(posicao, 0, ...arr1); //.splice modifica array original 
  return copiaArr2;
}

//1ª solução do site.
function frankenSplice1(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (const element of arr1) {
    localArray.splice(n, 0, element);
    n++;
  }
  return localArray;
}

//2ª solução do site. igual a minha.

//3ª solução do site. Utilizando ATRIBUIÇÃO DE DESSETRUTURAÇÃO.
function frankenSplice3(arr1, arr2, n) { 
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

module.exports = {
  fatiarEmendar    
};