# javascript

Este repositório e para estudar e revisar a linguagem javascript com códigos;

## Configuração para utilizar ES6 modules com JEST/TEST.

### Import/Export:
    export moduloNormal;
    esport default moduloDefault
    import moduloDefault {moduloNormal} from 'path/arq.js';

Instale o babel:

###
    npm install --save-dev babel-jest

Altere o package.json:

### package.json

<pre> {
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
}
</pre>

Instale as pre-configurações do babel:
###
    npm install @babel/preset-env --save-dev

Crie o arquivo: ".babelrc" na raiz do projeto:

### .babelrc

<pre>
  {
    "presets": ["@babel/preset-env"]
  }
</pre>

## 📄 License

Apache [License](./LICENSE) Version 2.0.