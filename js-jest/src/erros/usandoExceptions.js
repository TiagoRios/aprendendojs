const { UserException } = require('./UserException.js');

function getMonthName(mo) {
    mo = mo - 1; // Ajusta o número do mês para o índice do array (1 = Jan, 12 = Dec)
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (months[mo]) {
        return months[mo];
    } else {
        throw Error('invalid month'); //lança uma palavra-chave aqui usada.
    }
}

function methodThrowUserException(p) {
    if (p > 100)
        throw new UserException("value should be greater than 100");
}

module.exports = {
    getMonthName,
    methodThrowUserException,
}