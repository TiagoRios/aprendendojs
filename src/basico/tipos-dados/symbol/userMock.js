const util = require('./symbolUtil');

const userMock = {
  name: "Sarah",
  sobrenome: "Conor",
  age: 40,
  [util.symbolLocal]: 123, // precisa estar entre colchetes.
  [util.symbolLocalMesmaDescricao]: 456,
}

module.exports = userMock;