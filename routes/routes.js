const express = require("express");

const routes = express.Router();
const UserController = require("../controllers/UserController");
const userController = new UserController();

routes.get("/test", function (req, res) {
  res.status(200).json({ message: "ok" });
});
routes.post("/user", userController.newUser);
routes.get("/user", userController.getAllUser);
// routes.put("/user/:id", UserController.updateUser);
// routes.delete("/user/:id", UserController.deleteUser);
// routes.get("/user/:id", userClass.getAllUsers);

module.exports = routes;
