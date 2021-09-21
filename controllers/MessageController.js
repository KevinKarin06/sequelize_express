const db = require("../models/index");
const BaseController = require("./BaseController");

class MessageController extends BaseController {
  constructor() {
    super(db.MessageModel);
  }

  getAllMessages = async (req, res) => {
    try {
      const resp = await super.getAll();
      if (resp.data != null) {
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
  newMessage = async (req, res) => {
    try {
      const data = req.body;
      const resp = await super.create(data);
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
  deleteMessage = async (req, res) => {
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
  updateMessage = async (req, res) => {
    try {
      const data = req.body;
      const id = req.params.id;
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
  getMessage = async (req, res) => {
    try {
      const id = req.params.id;
      const resp = await super.getById(id);
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
  getMessagesByUser = async (req, res) => {
    try {
      const id = req.params.id;
      const resp = await super.getModel().findAll({ where: { user_id: id } });
      res.status(201).json({ message: "Request was Successful", data: resp });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error });
    }
  };
}

module.exports = MessageController;
