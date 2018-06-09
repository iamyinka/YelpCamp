const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs");

let campgrounds = [
  {
    name: "Camp Houston",
    image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014439df4c17aa3efb5_340.jpg"
  },
  {
    name: "Camp Miami",
    image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df4c17aa3efb5_340.jpg"
  },
  {
    name: "Camp Austin",
    image: "https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f8c579a4e9b7b8_340.jpg"
  },
  {
    name: "Camp Ft. Lauderdale",
    image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b014439df4c17aa3efb5_340.jpg"
  }
];

app.get("/", function(req, res){
  res.render("home");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", { campgrounds: campgrounds });
})

app.post("/campgrounds", function(req, res){
  let name = req.body.name;
  let image = req.body.image;
  let newCampground = {
    name: name,
    image: image
  }
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function (req, res){
  res.render("new");
})

app.listen(9000, function (){
  console.log("YelpCamp Server Started @ Port 9000");
})