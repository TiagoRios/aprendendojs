# js-jest

Estudos aplicando técnica TDD em javascript "puro".

# Testes unitários
JEST

# Observações
* Não utiliza API's prontas (inicialmente);
* Não Testa UI - interface do usuário.

# Configuração para utilizar ES6 modules com JEST/TEST.
export {a}; / import {a} from 'path/arq.js';

npm install --save-dev babel-jest

package.json:
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
}

npm install @babel/preset-env --save-dev

arquivo na raiz -> .babelrc:
{
  "presets": ["@babel/preset-env"]
}
