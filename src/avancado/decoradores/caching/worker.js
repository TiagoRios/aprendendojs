// Objeto com método lento
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    for (let i = 0; i < 9_999_999; i++) {
      [].push(i);
    }

    return x * this.someMethod();
  }
}

export default worker;