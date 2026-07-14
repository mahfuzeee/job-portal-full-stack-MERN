const User = require("../models/user.model");

class authRepository {
  async register(user) {
    return await User.create(user);
  }

  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  // Update user
  async update(id, user) {
    return await User.findByIdAndUpdate(id, user, { returnDocument: "after" });
  }
}

module.exports = new authRepository();
