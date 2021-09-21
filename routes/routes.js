const express = require("express");
const multer = require("multer");
const fs = require("fs");
const MessageController = require("../controllers/MessageController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path = "public/avatars";
    if (!fs.existsSync(path)) {
      path = fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});
const upload = multer({ storage: storage });

const routes = express.Router();
const UserController = require("../controllers/UserController");
const userController = new UserController();
const messageController = new MessageController();

routes.get("/test", function (req, res) {
  res.status(200).json({ message: "ok" });
});
//user
routes.post("/user", upload.single("avatar"), userController.newUser);
routes.get("/user", userController.getAllUser);
routes.get("/user/:id", userController.getUser);
routes.delete("/user/:id", userController.deleteUser);
routes.put("/user/:id", upload.single("avatar"), userController.updateUser);
routes.post("/user/login", userController.login);

//message
routes.post("/message", messageController.newMessage);
routes.get("/message", messageController.getAllMessages);
routes.get("/message/:id", messageController.getMessage);
routes.get("/message/user/:id", messageController.getMessagesByUser);
routes.delete("/message/:id", messageController.deleteMessage);
routes.put("/message/:id", messageController.updateMessage);

module.exports = routes;
