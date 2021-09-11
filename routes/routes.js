const express = require("express");

const routes = express.Router();
const UserController = require("../controllers/UserController");

routes.get("/test", function (req, res) {
  res.status(200).json({ message: "ok" });
});
routes.post("/user", UserController.newUser);
routes.get("/user", UserController.getAllUsers);
routes.put("/user/:id", UserController.updateUser);
routes.delete("/user/:id", UserController.deleteUser);
routes.get("/user/:id", UserController.getUser);

module.exports = routes;
