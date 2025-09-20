const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");   
 require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);
const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {

        console.log('MongoDB connected successfully');
    console.log(`Server is running on port ${PORT}`);

});
  
})


