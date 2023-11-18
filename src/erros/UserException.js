/**
 * Uma exception personalizada.
 * 
 * @param {string} mensagem A mensagem sobre o erro.
 */
function UserException(mensagem) {
    this.mensagem = mensagem;
    this.name = "UserException";
}

UserException.prototype.toString = function () {
    return this.name + ': "' + this.message + '"';
}

module.exports = {
    UserException,
}