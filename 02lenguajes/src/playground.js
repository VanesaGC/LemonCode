// 1 Array operations
//Head
//Implementa una función head (inmutable), tal que, dado un array como entrada extraigay devuelva su primer elemento. Uliza destructuring.

const deportes = () => {
    return ['Natación', 'Tenis', 'Baloncesto', 'Fútbol'];
}

const head = (array) => { const [aux] = deportes(); return aux; }

const deporte = head(deportes());

console.log("Head: " + deporte);

//Tail
//Implementa una función tail (inmutable), tal que, dado un array como entradadevuelta todos menos el primer elemento. Uliza rest operator
const tail = ([arg1, ...args]) => {

    return args;
};

console.log("Tail: " + tail(deportes()));

//Init
//Implementa una función init (inmutable), tal que, dado un array como entradadevuelva todos los elementos menos el úlmo. Uliza los métodos que ofreceArray.prototype.
const init = (args) => {

    var argDeleted = args.pop();

    return args;
};

console.log("Init: " + init(deportes()));

//Last
//Implementa una función last (inmutable), tal que, dado un array como entradadevuelva el úlmo elemento.
const last = (args) => {

    var argDeleted = args.pop();

    return argDeleted;
};

console.log("Last: " + last(deportes()));

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,devuelva la concatenación de ambos. Uliza rest / spread operators
// Opcional Implementa una versión del ejercicio anterior donde se acepten múlples arrays deentrada (más de 2).
const concat = (a, b) => {
    return [...a, ...b];
};

const concat2 = (...arrays) => {

    var result = [];

    arrays.map(function (array) {
        result = [...result, ...array];
    });
    return result;
};

var daysofWeekPart1 = ['Lunes', 'Martes', 'Miércoles'];
var daysOfWeekPart2 = ['Jueves', 'Viernes'];
var weekend = ['Sábado', 'Domingo'];

console.log("Concat: " + concat(daysofWeekPart1, daysOfWeekPart2, weekend));
console.log("Concat opcional: " + concat2(daysofWeekPart1, daysOfWeekPart2, weekend));

// 3. Clone Merge
// Implementa una función clone que, a parr de un objeto de entrada source devuelvaun nuevo objeto con las propiedades de source:
function clone(source) {
    var clone = {};
    for (var key in source) {
        clone[key] = source[key];
    }

    return clone;
}

var person1 = { Id: 0, Name: "Vanesa", LastName: "García" };
var person2 = clone(person1);

console.log("obj1: " + JSON.stringify(person1) + "\nobj2: " + JSON.stringify(person2));

//Merge
// Implementa una función merge que, dados dos objetos de entrada source y target,devuelva un nuevo objeto con todas las propiedades de target y de source, y en casode propiedades con el mismo nombre, source sobreescribe a target

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    var merge = {};

    for (var key in target) {
        merge[key] = target[key];
    }

    for (var key in source) {
        merge[key] = source[key];
    }

    return merge;
}

console.log("Merge: " + JSON.stringify(merge(a, b)));

// 4. Read Books
// Crea una función isBookRead que reciba una lista de libros y un tulo y devuelva si seha leído o no dicho libro.Un libro es un objeto con title como string y isRead como booleano. En caso de noexisr el libro devolver falseTIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.


function isBookRead(books, title) {
    var result = false;
    books.find(element => {
        result = (element.title === title);
    });

    return result;
}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log("");
console.log("*** Books ***");

console.log("Devastación: " + isBookRead(books, "Devastación")); // true
console.log("Canción de hielo y fuego: " + isBookRead(books, "Canción de hielo y fuego")); // false
console.log("Los Pilares de la Tierra: " + isBookRead(books, "Los Pilares de la Tierra")); // false

