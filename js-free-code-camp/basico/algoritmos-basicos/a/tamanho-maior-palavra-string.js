function encontrarTamanhoMaiorPalavraString(str) {
    let arr = [];
    arr = str.split(' ');
    str = 0;

    for (let i in arr) {
        if (str < arr[i].length) {
            str = arr[i].length;
        }
    }
    return str;
}

//1ª solução site
function findLongestWordLength1(str) {
    let longestLength = 0;
    let currentLength = 0;

    for (const element of str) {
        if (element === " ") {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }

    return longestLength;
}

//2ª solução site igual a minha
//3ª solução site - REDUCE()
function findLongestWordLength3(s) {
    return s
        .split(' ')
        .reduce((longest, word) => Math.max(longest, word.length), 0);
}

//4ª solução site - MAP(). Essa Eh top !
function findLongestWordLength4(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

//5ª solução site
function findLongestWordLength5(str) {
    // split the string into individual words
    const words = str.split(" ");
  
    // words only has 1 element left that is the longest element
    if (words.length == 1) {
      return words[0].length;
    }
  
    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
      words[0].length,
      findLongestWordLength(words.slice(1).join(" "))
    );
  }
  

module.exports = {
    encontrarTamanhoMaiorPalavraString
};