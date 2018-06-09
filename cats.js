const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
});

let Cat = mongoose.model("Cat", catSchema);

// let cat1 = new Cat({
//     name: "Alex",
//     age: 5,
//     color: "Black"
// });

// let cat2 = new Cat({
//     name: "Elvis",
//     age: 3,
//     color: "White"
// });

// let cat3 = new Cat({
//   name: "George",
//   age: 7,
//   color: "Brown"
// });

// cat3.save(function(err, savedCat){
//     if (err) {
//         console.log("A Problem Occurred!");
//     } else {
//         console.log("A new Cat was saved to the database");
//         console.log(savedCat);
//     }
// });

// Cat.create({
//         name: "Snow White",
//         age: 10,
//         color: "Gray"
//     },function(err, savedCat){
//         if (err) {
//             console.log("Error Occured! " + err)
//         } else {
//             console.log("Created Method was used to save a new cat to DB");
//             console.log(savedCat);
//         }
// });

Cat.find({}, function (err, cats) {
    // body...
    if (err) {
        console.log("Something went wrong");
    } else {
        console.log("Yipee");
        console.log(cats);
    }
});



