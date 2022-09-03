function findByRegularExpression(pattern, text) {
    return pattern.exec(text);
}

module.exports = {
    findByRegularExpression,
};