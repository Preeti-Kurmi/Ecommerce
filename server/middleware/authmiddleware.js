const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("header",req.headers)
  const authHeader = req.headers["authorization"];

const token = authHeader.split(" ")[1];
 
  console.log(token,"token")
  if (!token) return res.status(403).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports=verifyToken;