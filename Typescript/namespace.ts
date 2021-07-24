// A namespace is a way to logically group reloated code.

namespace liao2000.github{
    export function f(){
        console.log("liao2000.github.f()")
    }
    
    function g(){
        console.log("liao2000.github.g()")
    }
}

liao2000.github.f();

// error: liao2000.github.g();
// because g() is not exported