const DESCRICAO = "local-Symbol";
const DESCRICAO_GLOBAL = "global-Symbol"
const MSG_ERRO_CONVERSAO = "Cannot convert a Symbol value to a string";

let symbolLocal = Symbol(DESCRICAO);
let symbolLocalMesmaDescricao = Symbol(DESCRICAO);

// Acessa ou Registra o Symbol globalmente.
let symbolGlobal = Symbol.for(DESCRICAO_GLOBAL);

const CHAVES_SIMBOLICAS = 2;
const CHAVES_NAO_SIMBOLICAS = 3;

module.exports = {
  DESCRICAO,
  DESCRICAO_GLOBAL,
  MSG_ERRO_CONVERSAO,
  
  symbolLocal,
  symbolLocalMesmaDescricao,
  symbolGlobal,

  CHAVES_SIMBOLICAS,
  CHAVES_NAO_SIMBOLICAS,
}