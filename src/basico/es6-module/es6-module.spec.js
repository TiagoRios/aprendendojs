//Para funcionar com NODE.JS atualize package.json com: "type": "module"
import { tipo, curso } from './ES6-export.js';

describe('Testando modulos ES6', () => {
    test('deve importar o tipo', () => {
        expect(tipo).toBe("Estudante");
    });

    test('deve importar o curso', () => {
        expect(curso).toBe("Javascript");
    });
});