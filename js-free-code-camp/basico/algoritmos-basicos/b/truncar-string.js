function truncarString(str, numero){
  return str.length > numero ? str.slice(0, numero) + "...": str;
}

//1ª solução do site
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

//2ª solução do site. igual a minha

module.exports = {
    truncarString
};