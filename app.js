const express = require('express');
const bodyParser= require('body-parser');
const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));


// set the view engine to ejs
app.set('view engine', 'ejs');

let items = ["Eat Food", "Drink Water", "Cook Food"];

 app.get("/",(req,res)=>{
    res.render("list", {listItems:items});
}) 

app.post("/",(req,res)=>{
    item=req.body.listItem;
    items.push(item);
    res.redirect('/');

})


app.listen(3000,()=>{
    console.log("Server is Running on Port 3000");
})




