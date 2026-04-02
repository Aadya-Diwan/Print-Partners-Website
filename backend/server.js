const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/printpartners")
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err));

const orderRoutes = require("./routes/orders");
app.use("/api/orders", orderRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});