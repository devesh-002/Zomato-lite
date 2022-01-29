import express from 'express';
const app = express();
import bodyParser from "body-parser"
// import testAPIRouter from "../backend/routes/api/testAPI";
import UserRouter from "./routes/api/Buyer.js";
import VendorRouter from "./routes/api/Vendor.js";
import OrderRouter from "./routes/api/Order.js"
import cors from 'cors';
import mongoose from 'mongoose';
const PORT = 4000;
const DB_NAME = "dass"

// routes

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
// app.use("/testAPI", testAPIRouter);
app.use("/Buyer", UserRouter);
app.use("/Vendor", VendorRouter);
app.use("/Order",OrderRouter)
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
