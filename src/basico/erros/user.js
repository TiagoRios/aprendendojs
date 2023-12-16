const UserException = require('./UserException.js');

/**
 * Método que testa o uso de exceptions personalizadas.
 * 
 * @param {number} number 
 *      Um número maior que 100 lança uma exception.
 */
function throwUserExeption(number) {
    if (number > 100) {
        throw new UserException("value should be greater than 100");
    }
}

module.exports = throwUserExeption;