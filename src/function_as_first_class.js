//1 sauver une fonction dans une variable ou constante

 const upper = str => str.toUpperCase();

console.log(upper('mean'));

const upper_prime=upper;

console.log(upper_prime('mean'))


const firstCaracter=(str)=>str[0];

const firstCapitalCaracter=(u,f,str)=>f(u(str));

// passer des fonctions comme argument
console.log(firstCapitalCaracter(upper,firstCaracter,'mean'));

// const add = a => b => a+b
function add (a){
    //closure
    var c=5;
    return function(b){
        console.log(`c variable in closure ${c}`)
        return a+b;
    }
}

console.log(add(3)(4))
console.dir(add);




