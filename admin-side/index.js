require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const route = require("./Routes/index");
const bodyParser = require("body-parser");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@petshop.gt7ip.mongodb.net/PetShop?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect success!!");
  } catch (error) {
    console.log("Connect failed!!");
    process.exit(1);
  }
};
connectDB();

const app = express();
app.use(cors());
app.options("*", cors());0-
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
