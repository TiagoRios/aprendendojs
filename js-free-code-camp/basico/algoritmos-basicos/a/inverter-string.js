function inverterString(str){
    let arr = [];
    arr = str.split('');
    arr.reverse();
    return arr.join('');
}

//1ª solução do site
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

//2ª solução do site. parecida com a minha mas aqui ele não inicializou um array
function reverseString2(str) {
    return str
      .split("")
      .reverse()
      .join("");
}

module.exports = {
    inverterString
};