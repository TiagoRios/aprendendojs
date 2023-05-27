import { tipo, curso } from './ES6-export.js';

describe('Testando modulos ES6', () => {
    test('teste tipo', () => {
        expect(tipo).toBe("Estudante");
    });
    test('teste curso', () => {
        expect(curso).toBe("Javascript");
    });
});