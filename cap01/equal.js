/* 

Operador ==

*/

console.log(null == undefined)
console.log(undefined == null)


console.log(9 == '9')
//9 == toNumber('9') --> true

console.log('e' == 8)
//toNumber('e') == 8 --> false

console.log(true == '9')
//toNumber(true) == '9'

console.log('string' == {palavra: 'string'})
//'string' == toPrimitive({palavra: 'string'})

console.log('teste' == true)
/*
1º -> toNumber(true) -> 1
2º -> toNUmber('teste') -> NaN
3º -> NaN == 1 -> false
*/

console.log('teste' == false)
/*
1º -> toNumber(false) -> 0
2º -> toNUmber('teste') -> NaN
3º -> NaN == 0 -> false
*/

console.log([1,2,3] == [1,2,3])
//referenciam locais diferentes na memória
console.log('Joice' === 'Joice')