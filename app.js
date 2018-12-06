const express = require("express");
const app = express();
app.get("/",(req, res)=> res.send("Hello, this is simple app node js"));
app.listen(4000, ()=>{ console.log("Running port 4000...")});