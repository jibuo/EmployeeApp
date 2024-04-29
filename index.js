
const express = require("express");
const app = express();

app.listen(3004, ()=>{
    console.log("server is running on port 3004")
});
module.exports = app;