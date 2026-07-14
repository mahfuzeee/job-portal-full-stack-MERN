const authRepository = require("../repositories/auth.repository");
const bcrypt = require("bcryptjs");

class authService {
  async register(user) {
    const existingUser = await authRepository.getUserByEmail(user.email);

    if (existingUser) {
      throw new Error("User already exists");
    }
    return await authRepository.register(user);
  }

  //login a user
  async login(email, password) {
    const user = await authRepository.getUserByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return user;
  }
  async getUserByEmail(email) {
    return await authRepository.getUserByEmail(email);
  }

  //Update user
  async update(id, user) {
    if (!id) throw new Error("User not recognized.");

    return await authRepository.update(id, user);
  }
}

module.exports = new authService();
