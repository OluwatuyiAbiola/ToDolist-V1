const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

//const can be used for arrays because the things inside are not protected
const items = ["Buy Food", "Cook Food", "Eat Food" ];
const workItems = [];
// We want to use ejs with node
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

//an array to store added list


app.get("/", function(req,res) {

   const day = date.getDate();
    // use res.render to send our variable to the list.ejs on d views folder
    // render sends the day variable to kindOfDay on the file called list
    res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){
    const item = req.body.newItem;

    //logic to check if the item addded is from work route or home route
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        //add item to items array
        items.push(item);
        res.redirect("/");
    }
    
});

//EJS Templating
//Target another route
app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems:workItems})
});

app.post("/work", function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function (req, res) { 
    res.render("about");
});



app.listen(3000, function(){
    console.log("Server is live at port 3000!");
});