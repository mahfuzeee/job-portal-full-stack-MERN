require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.generateToken = (_id, email) => {
  const key = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN;

  const payload = { _id, email };

  return jwt.sign(payload, key, { expiresIn: expiresIn });
};

exports.verifyToken = (token) => {
  try {
    const key = process.env.JWT_SECRET;
    return jwt.verify(token, key);
  } catch (error) {
    return null;
  }
};
