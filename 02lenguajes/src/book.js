// Read Books (Opcional)
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si seha leído o no dicho libro.Un libro es un objeto con title como string y isRead como booleano. En caso de noexisr el libro devolver falseTIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
function isBookRead(books, title) {
    var result = false;
    books.forEach(function (element) {
        if (element.title === title) {
            result = element.isRead;
        }
    });
    return result;
}
var books_ts = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log("*** Books_ts ***");
console.log("Devastación: " + isBookRead(books_ts, "Devastación")); // true
console.log("Canción de hielo y fuego: " + isBookRead(books_ts, "Canción de hielo y fuego")); // false
console.log("Los Pilares de la Tierra: " + isBookRead(books_ts, "Los Pilares de la Tierra")); // false
