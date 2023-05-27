function f(x) {
    console.log(x);
}

function throttle(func, ms){
    let isThrottled = false, savedArgs, savedThis;

    function wrapper(){
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;

        func.apply(this, arguments);

        setTimeout(() => {
           isThrottled = false;
           if(savedArgs){
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedArgs = null;
           } 
        }, ms);
    }
    return wrapper;
}

let a = throttle(f, 2000);
// Chamadas anteriores são desconsideradas caso haja novas chamadas
// apenas a última chamada aparece como saida.
a("test-1");
a("test-2");
a("test-3");
