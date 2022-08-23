let variavel = 'global';
let outraVariavel = 'global';

function funcao(){
    let variavel = 'local';
    return variavel;
}

function outraFuncao(){
    outraVariavel = 'local';
    return outraVariavel;
}

console.log(variavel);
console.log(funcao());
console.log(outraVariavel);
console.log(outraFuncao());
console.log(outraVariavel);