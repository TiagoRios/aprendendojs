/**
* Função que gera uma string a partir de 'arguments'.
*/
export default function hash() {
  return [].join.call(arguments) // método emprestado de Array.
}