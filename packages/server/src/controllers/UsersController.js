const User = require("../models/User");

exports.index = async (_request, response) => {
  const users = await User.find();
  return response.json(users);
};
