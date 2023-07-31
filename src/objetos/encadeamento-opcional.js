let Obj;

// A variável precisa estar definida, caso contrário erro !
console.log(Obj?.algumMetodoNaoExiste?.());
console.log(Obj?.propriedadeNaoExistente);
console.log(Obj?.["propriedadeNaoExistente"]);