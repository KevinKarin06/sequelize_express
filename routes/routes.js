const express = require("express");
const MessageController = require("../controllers/MessageController");

const routes = express.Router();
const UserController = require("../controllers/UserController");
const userController = new UserController();
const messageController = new MessageController();

routes.get("/test", function (req, res) {
  res.status(200).json({ message: "ok" });
});
//user
routes.post("/user", userController.newUser);
routes.get("/user", userController.getAllUser);
routes.get("/user/:id", userController.getUser);
routes.delete("/user/:id", userController.deleteUser);
routes.put("/user/:id", userController.updateUser);
routes.post("/user/login", userController.login);

//message
routes.post("/message", messageController.newMessage);
routes.get("/message", messageController.getAllMessages);
routes.get("/message/:id", messageController.getMessage);
routes.get("/message/user/:id", messageController.getMessagesByUser);
routes.delete("/message/:id", messageController.deleteMessage);
routes.put("/message/:id", messageController.updateMessage);

module.exports = routes;
