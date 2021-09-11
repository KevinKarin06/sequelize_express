const UserModel = require("../models/UserModel");

const newUser = async (req, res) => {
  try {
    console.log(req.params);
    res.status(201).json({ message: "created" });
  } catch (error) {}
};
const updateUser = async (req, res) => {
  try {
    res.status(201).json({ message: "created" });
  } catch (error) {}
};
const getAllUsers = async (req, res) => {
  try {
    res.status(201).json({ message: "created" });
  } catch (error) {}
};
const getUser = async (req, res) => {
  try {
    res.status(201).json({ message: "created" });
  } catch (error) {}
};
const deleteUser = async (req, res) => {
  try {
    res.status(201).json({ message: "created" });
  } catch (error) {}
};

module.exports.newUser = newUser;
module.exports.updateUser = updateUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.deleteUser = deleteUser;
