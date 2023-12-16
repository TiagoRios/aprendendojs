const MonthException = require('./MonthException');
const monthsList = require('./monthList');

/**
 * Obter o mês a partir do dia.
 * 
 * @param {number} monthNumber
 *       dia do mês entre 1 e 12. 
 * 
 * @returns O nome do mês abreviado.
 * 
 * @throws Error caso monthNumber esteja fora da faixa.
 */
function getMonthName(monthNumber) {
  if (monthsList[monthNumber - 1]) {
    return monthsList[monthNumber - 1];

  } else {
    throw new MonthException('invalid month');
  }
}

module.exports = getMonthName;
