// variables
var a; //declaración 
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa' // redeclaración

// Global scope
var fruit = 'Apple' //global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia';
    // No está declarada dentro de la funcion, pero funciona
    // y se convierte en una variable global
    console.log(country);
}

countries();
console.log(country);