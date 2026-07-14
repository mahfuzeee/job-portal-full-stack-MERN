const authService = require("../services/auth.service");
const { generateToken, verifyToken } = require("../utils/tokenHelpers");

class authController {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        throw new Error("Email and password are required");

      const user = await authService.register(req.body);

      const token = generateToken(user._id, user.email);
      res.status(201).json({
        token,
        user,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await authService.login(email, password);

    const token = generateToken(user._id, user.email);

    res.json({
      token,
      user,
    });
  }

  async me(req, res) {
    res.json(req.user);
  }

  //logout
  async logout(req, res) {
    res.json({ message: "Logout successful" });
  }

  //Update user
  async update(req, res) {
    const user = await authService.update(req.user._id, req.body);
    res.json(user);
  }
}
module.exports = new authController();
