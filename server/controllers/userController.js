const ApiError = require("../error/ApiError");
const bcrypt = require("../models/models");
const { User, Basket } = require("../models/models");

class UserController {
  async registration(req, res) {
    const { email, password, role, next } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Wrong email or password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("Email is taken"));
    }
  }
  async login(req, res) {}
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("No id"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
