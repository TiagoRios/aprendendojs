import { tipo, curso } from '../../main/es6/modulos/ES6-export.js';

beforeAll(() => {
});

describe('Testando modulos ES6', () => {
    test('teste tipo', () => {
        expect(tipo).toBe("Estudante");
    });
    test('teste curso', () => {
        expect(curso).toBe("Javascript");
    });
});