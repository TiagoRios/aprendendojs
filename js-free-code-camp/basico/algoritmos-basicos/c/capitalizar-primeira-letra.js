function capitalizarPrimeiraLetraPalavras(str) { //1 array - 1 laço - 4 métodos
  let arrayPalavrasMinusculas = str.toLowerCase().split(' ');

  str = '';

  for (const element of arrayPalavrasMinusculas) {
    str += element[0].toUpperCase() + element.substr(1) + ' ';
  }
  return str.substr(0, str.length - 1);
}

//1ª solução do site
function titleCase1(str) { //2 arrays - 1 laço - 5 métodos
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

//2ª solução do site.
function titleCase2(str) { //7 metodos - 1 função anonima
  return str 
  .toLowerCase()
  .split(" ")
  .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
  .join(" ");
}

//3ª solução do site. Código mais fácil de ler e manter.
function titleCase3(str) { //3 metodos - 1 função anonima
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

module.exports = {
  capitalizarPrimeiraLetraPalavras
};