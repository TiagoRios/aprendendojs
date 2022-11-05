function repetirStringNVezes(string, numeroVezes){
  let resultado = '';
  let i = 0
  while (i < numeroVezes){
    resultado += string;
    i++;
  }
  return resultado;
}

//1ª solução do site. parecido com a minha.
//2ª solução do site. recursão.
function repeatStringNumTimes2(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes2(str, num - 1);
  }
}

//3ª solução do site. recursão.
function repeatStringNumTimes3(str, num) {
  return num > 0 ? str + repeatStringNumTimes3(str, num - 1) : '';
}

module.exports = {
    repetirStringNVezes
};