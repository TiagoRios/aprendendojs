const { UserException } = require('./UserException.js');

/**
 * Obter o mês a partir do dia.
 * 
 * @param {number} monthNumber dia do mês entre 1 e 12. 
 * 
 * @returns O nome do mês abreviado.
 * 
 * @throws Error caso monthNumber esteja fora da faixa.
 */
function getMonthName(monthNumber) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (months[monthNumber - 1]) {
        return months[monthNumber - 1];

    } else {
        throw Error('invalid month');
    }
}

/**
 * Método que testa o uso de exceptions personalizadas.
 * 
 * @param {number} number Um número maior que 100 lança uma exception.
 */
function methodThrowUserException(number) {
    if (number > 100) {
        throw new UserException("value should be greater than 100");
    }
}

module.exports = {
    getMonthName,
    methodThrowUserException,
}