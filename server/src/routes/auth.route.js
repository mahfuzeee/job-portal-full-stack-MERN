const authController = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");

const express = require("express");

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/me", auth, authController.me);

router.post("/logout", auth, authController.logout);

router.put("/update", auth, authController.update);

module.exports = router;
