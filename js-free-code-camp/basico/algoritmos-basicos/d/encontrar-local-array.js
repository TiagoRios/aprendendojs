function encontrarIndexParaInserir(arr, num){
  arr.splice(0, 0, num);
  arr.sort((a, b) => a - b );
  return arr.indexOf(num);
}

//1ª solução do site.
function getIndexToIns1(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

//2ª solução do site.
function getIndexToIns2(arr, num) {
  return arr.filter(val => num > val).length;
}

//3ª solução do site.
function getIndexToIns3(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns index or total length of arr
  return index === -1 ? arr.length : index;
}

//4ª solução do site. Parecido com a minha.
function getIndexToIns4(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

module.exports = {
  encontrarIndexParaInserir,
};