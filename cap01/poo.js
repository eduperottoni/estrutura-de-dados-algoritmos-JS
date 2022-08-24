//Duas formas de se declarar objetos
let object = new Object()
let object2 = {}

//Objeto completo:
let object3 = {
    nome: {
        primeiro: 'Eduardo',
        ultimo: 'Perottoni'
    },
    endereco: 'rua do calafate'
}

//Classes (funções construtoras):
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

//Instanciando objeto a partir da classe Book
let book = new Book('Title', 55, '478549');

//Acessando e alterando propriedades de objetos
console.log(book.title)
book.title = 'Segundo Teste'
console.log(book.title)

//Declaração de métodos com prototype
Book.prototype.printTitle = function(){
    console.log(this.title)
}
book.printTitle()

//Declaração de métodos na função construtora
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function(){
        console.log(this.isbn)
    }
}
book.printIsbn()