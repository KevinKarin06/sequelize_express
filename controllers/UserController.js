const db = require("../models");
const BaseController = require("./BaseController");

class UserController extends BaseController {
  constructor() {
    super(db.UserModel);
  }

  getAllUser = async (req, res) => {
    try {
      const resp = await super.getAll();
      if (resp.data != null && resp.error === null) {
        res
          .status(200)
          .json({ message: "Request was Successful", data: resp.data });
      } else {
        res.status(500).json({ error: resp.error });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  newUser = async (req, res) => {
    try {
      let data = req.body;
      data.avatar = req.file.path;
      const resp = await super.create(data);
      console.log("usercontroller", req.file);
      if (resp.data != null && resp.error === null) {
        res
          .status(201)
          .json({ message: "Request was Successful", data: resp.data });
      } else {
        res.status(500).json({ message: "Internal  Error", error: resp.error });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error });
    }
  };
  getUser = async (req, res) => {
    try {
      const id = req.params.id;
      const resp = await super.getById(id);
      if (resp.data != null && resp.error === null) {
        res
          .status(200)
          .json({ message: "Request was Successful", data: resp.data });
      } else {
        res.status(500).json({ message: "Internal  Error", error: resp.error });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error });
    }
  };
  deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const resp = await super.delete(id);
      if (resp.data != null && resp.error === null) {
        res
          .status(201)
          .json({ message: "Request was Successful", data: resp.data });
      } else {
        res.status(500).json({ message: "Internal  Error", error: resp.error });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error });
    }
  };
  updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      if (req.file != undefined) {
        console.log("update method from user contrller", req.file);
        data.avatar = req.file.path;
      }
      const resp = await super.update(id, data);
      if (resp.data != null && resp.error === null) {
        res
          .status(201)
          .json({ message: "Request was Successful", data: resp.data });
      } else {
        res.status(500).json({ message: "Internal  Error", error: resp.error });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error });
    }
  };
  login = async (req, res) => {
    try {
      const data = req.body;
      const name = data.name;
      const phone = data.phone;
      const resp = await super.getModel().findAll({
        where: {
          name: name,
          phone: phone,
        },
      });
      if (resp.length > 0) {
        res.status(200).json({ message: "Request was Successful", data: resp });
      } else {
        res
          .status(404)
          .json({ message: "Unable to process", error: "User Not Found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error });
    }
  };
}

module.exports = UserController;
