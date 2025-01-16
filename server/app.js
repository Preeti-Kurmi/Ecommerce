// require("dotenv").config();
// const express = require("express");
// const connectDB = require("./config/db");
// const cors=require('cors')
// const productRoutes = require("./routes/productRoutes");
// const authRoutes=require("./routes/authRoutes")
// const path=require('path')
// const  passport=require('passport')
// const cookieSession=require('cookie-session')
// const passportSetup=require('./passport')


// const app = express();
// app.use(
//     cookieSession({
//         name:"session",
//         keys:["cyberwolve"],
//         maxAge:24*60*60*100,
//     })
// )
// app.use(cors({
//     origin:"http://localhost:5173",
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true,
// }))
// app.use(express.json());
// app.use(passport.initialize());


// connectDB();
// app.use("/assets", express.static(path.join(__dirname, "assets")));
// app.use("/", authRoutes);
// app.use("/api/products", productRoutes);

// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const passport = require("passport");
const User = require("./models/User");
const session = require('express-session');
const productRoutes = require("./routes/productRoutes");
const authRoutes=require("./routes/authRoutes")
const connectDB=require('./config/db')
const path=require('path')
require("./passport"); 
require("dotenv").config();

  
const app = express();


app.use(
    session({
      secret: "cyberwolve", 
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }, 
    })
  );
// Middleware
app.use(passport.initialize());
app.use(passport.session());

// CORS setup
const cors = require("cors");
app.use(cors())
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );
app.use(express.json());
// Routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.CLIENT_URL}`,
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  })
);

app.get("/auth/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully logged in",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not authorized" });
  }
});

app.get("/auth/login/failed", (req, res) => {
  res.status(401).json({ error: true, message: "Login failed" });
});


connectDB();
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/api", authRoutes);
app.use("/api/products", productRoutes);

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
