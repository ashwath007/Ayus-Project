require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const chalk = require('chalk');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

// Data Base Setup
// DATABASE
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(chalk.red("Database Connected"));
});


//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


const userRoute = require("./routes/user");


app.use("/api", userRoute);

app.listen(port, () => {
    console.log(chalk.green(`Server started at ${port}`));
});