const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs'); //view engine
app.set('views', 'views'); //views
app.use(bodyParser.urlencoded({extended: false})); //include bodyparser
app.use(express.static(path.join(__dirname, 'public')));
app.get("/",(req, res)=> res.render('index'));

app.listen(4000, ()=>{ console.log("Running port 4000...")});