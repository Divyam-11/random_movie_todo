const express = require('express');
require("dotenv").config()
const app = express();

const port = process.env.PORT;
app.use(express.json())
app.use("/api/movies", require("./routes/movieRoutes"));

app.listen(port,()=>{
    console.log("Server Started on",port);
})