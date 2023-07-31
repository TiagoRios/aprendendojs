function f(x) {
    console.log(x);
}

function delay(func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

let a = delay(f, 3000);
// São chamados todos de uma vez.
a("test-1");
a("test-2");
a("test-3");

