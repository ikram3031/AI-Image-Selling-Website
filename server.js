const express = require('express');
require("./db");
// const userRouter = require("./routes/userRoutes.js");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express()

// Parse incoming request bodies as JSON
app.use(bodyParser.json());

// app.use('/api', userRouter)

app.listen(5000, () => {

    console.log(`Server is listening on PORT: 5000`);
})