function confirmeFinal(texto, alvo){
  return new RegExp(alvo + '$').test(texto);
}

//1ª solução do site
function confirmEnding1(str, target) {
  return str.slice(str.length - target.length) === target;
}

//2ª solução do site
function confirmEnding2(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}

//3ª solução do site
function confirmEnding3(str, target) {
  return str.slice(-target.length) === target
}

module.exports = {
  confirmeFinal
};