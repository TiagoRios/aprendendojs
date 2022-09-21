//a propriedade: "a" eh criada e se mantém viva 
//ate nao existir mais referencias a ela.
function criaFuncaoAdicionadora(a) {
    return function (b) {//esta funcao. nao pode ser manipulada.
        return a + b;
    };
}

//adiciona argumento a qual é passado
let x = criaFuncaoAdicionadora(5);//x recebe a funcao interna com valor 5
let y = criaFuncaoAdicionadora(20);

//x soma o argumento passado em criaFuncaoAdicionadora(5);
console.log(x(6)); // 11
console.log(y(7)); // 27