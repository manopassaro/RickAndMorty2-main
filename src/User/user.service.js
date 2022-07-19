const User = require("./user.models");

const createUser = async (body) => await User.create(body);

const allUser = async () => await User.find();

const findUsername = async (username) =>
  await User.findOne({ username: username });

const findEmail = async (email) => await User.findOne({ email: email });

const findId = async (id) => await User.findById(id);

module.exports = {
  createUser,
  allUser,
  findUsername,
  findEmail,
  findId
};
