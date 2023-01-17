//Declarations de fonction avec et sans typage.
function f(x,y) {  //fonctionne avec des  numbers et des strings
    return x+y
}
console.log(f(3,4),f('toto','tata') );



function g(x:number,y:number) {
    return x*y
}
console.log(g(3,4) );
