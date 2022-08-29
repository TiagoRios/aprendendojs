function meuForEach(items, callback) {
    for (const element of items) {
        callback(element);
    }
}

module.exports = { meuForEach }