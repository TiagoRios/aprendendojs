function encontrarElemento(arr, funcao){
  for (const element of arr){
    if(funcao(element)){
      return element;
    }
  }
  return undefined;
}

//1ª solução do site. parecida com a minha.
//2ª solução do site.
function findElement2(arr, func) {
  return arr.find(func); //estudar documentação de arrays MDN
}

//3ª solução do site.
function findElement3(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

//4ª solução do site.
function findElement4(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}

//4ª modificada com operador ternario
function findElement5(arr, func) {
  return arr.length > 0 && !func(arr[0]) 
            ? findElement(arr.slice(1), func)
            : arr[0];
}

module.exports = {
  encontrarElemento    
};