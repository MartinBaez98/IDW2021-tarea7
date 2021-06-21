var mongoose = require('mongoose');

var schema = require('./squema.js');

mongoose.connect('mongodb://localhost:27017/tarea07');

var Book = mongoose.model('Book',schema,'books');

var book = new Book({
    title: 'Señor de los anillos',
    author: 'J. R. R. Tolkien',
    body: 'Primera novela de la trilogía del señor de los anillos',
    comments: [{
        body:'Primero de 3 volumenes',
        date:'2021/06/20'
    }],
    hidden: true,
    meta: {votes:80, favs:60}
});

book.save(function(error) {
    if(error){
        console.log(error);
        process.exit(1);
    } 
    console.log("Se guardó correctamente");
 });

 Book.update({_id:'60d03681e53f7a1db00e6502'}, {$set:{hidden: true}},
function (error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<----Actualizacion---->");
    console.log(docs);
    //process.exit(0);
});

Book.findOneAndRemove({_id:'60d03681e53f7a1db00e6502'}, function(error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Libro eliminado");
    console.log(docs);
    process.exit(0);
});

Book.find({author: "J. R. R. Tolkien"}, 
function (error, docs) {
    if(error){
        console.log(error);
        process.exit(1);
    }
console.log("--Consulta--");
console.log(docs);
process.exit(0);
});