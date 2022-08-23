//Declaração de variáveis:
var num = 3;
/* TIPAGEM DINÂMICA
O tipo da variável é definido em tempo de execução */
console.log(`${num} --> ${typeof(num)}`);
//Atribuição de variável:
num = 5.6;
console.log(`${num} --> ${typeof(num)}`);
let nome = 'Eduardo';
console.log(`${nome} --> ${typeof(nome)}`);
var bool = true;
console.log(`${bool} --> ${typeof(bool)}`);
var nulo = null
console.log(`${nulo} --> ${typeof(nulo)}`);
var indefinido;
console.log(`${indefinido} --> ${typeof(indefinido)}`);

let object = {
    name: 'Eduardo',
    age: 21
}
console.log(`${object} --> ${typeof(object)}`)

/* Tipos de variáveis
--> num (int)
--> num (float) 
--> string
--> bool
--> null
--> undefined

Tipos de dados primitivos:
--> null
--> undefined
--> string
--> number
--> boolean
--> symbol

Tipos de dados derivados/objetos:
--> objetos
--> funções
--> arrays
--> regex
*/
