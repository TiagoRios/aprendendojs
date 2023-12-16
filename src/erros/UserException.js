function UserException(mensagem) {
    this.mensagem = mensagem;
    this.name = "UserException";
}

UserException.prototype.toString = function () {
    return this.name + ': "' + this.message + '"';
}

module.exports = UserException;