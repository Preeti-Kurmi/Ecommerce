require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors=require('cors')
const productRoutes = require("./routes/productRoutes");
const authRoutes=require("./routes/authRoutes")
const path=require('path')



const app = express();
app.use(cors())
app.use(express.json());

connectDB();
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/api", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
