function f(x) {
    console.log(x);
}

function debounce(func, ms){
    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    }
}

let count = debounce(f, 2000);
// Chamadas anteriores são desconsideradas caso haja novas chamadas
// apenas a última chamada aparece como saida.
count("test-1");
count("test-2");
count("test-3");

