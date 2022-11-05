function dividirAgruparArrays(arr, tamanho) {
  let resultado = [];
  for (let i = 0; i < arr.length; i+1) { // Incremento não necessrio. SPLICE decrementa tamanho do array.
    resultado.push(arr.splice(0, tamanho)); //Modifica o array. remove os elementos do array origianl.
  }
  return resultado;
  //returno [arr.splice(0, tamanho), arr. splice(0, tamanho)] //Parti dessa ideia.
}

//1ª solução do site. Procedural
function chunkArrayInGroups1(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

//2ª solução do site. SLICE   
function chunkArrayInGroups2(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i+=size) { //loop infinito caso i++
    newArr.push(arr.slice(i, i + size)); //diferente do SPLICE. SLICE não modifica o array original.
  }
  return newArr;
}

//3ª solução do site. Mesma coisa da 2ª utilizando laço WHILE.

//4ª solução do site. SPLICE.
function chunkArrayInGroups4(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

//5ª solução do site. Mais complexa com recursividade. Manuntenção?
function chunkArrayInGroups5(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}

module.exports = {
  dividirAgruparArrays
};