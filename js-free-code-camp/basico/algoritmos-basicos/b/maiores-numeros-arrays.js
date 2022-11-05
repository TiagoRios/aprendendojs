//NÃO CONSEGUI RESOLVER.
//Minha versão VEM da 2ª solução do site.
function maioresNumerosArrays(arr) {
  return arr.map(a => {
    return a.reduce((anterior, atual) => {
      return Math.max(anterior, atual)
    })
  });
}

//1ª solução do site. abordagem procedural
function largestOfFour1(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}

//2ª solução do site. abordagem declarativa
function largestOfFour2(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}

//3ª solução do site. abordagem declarativa
function largestOfFour3(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

//4ª solução do site. abordagem recursiva
function largestOfFour4(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour4(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

//>>>>>>> Benchmark by @P1xt

//solução mais rapida e eficiente segundo o benchmark
function largestOfFourVanilla(arr) {
  return arr.map(function (a) {
    return Math.max.apply(null, a);
  });
}

function largestOfFourES6(arr) {
  return arr.map((a) => Math.max(...a));
}

function largestOfFourBind(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
//Benchmark by @P1xt <<<<<<<<

module.exports = {
  maioresNumerosArrays,
  largestOfFourES6
};