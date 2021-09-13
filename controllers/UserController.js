const db = require("../models");
const UserModel = db.UserModel;
const BaseController = require("./BaseController");
class UserController extends BaseController {
  constructor() {
    super(UserModel);
    console.log("init");
  }

  getAllUser = async (req, res) => {
    try {
      const resp = await super.getAll();
      console.log(resp);
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
  newUser = async (req, res) => {
    console.log('create');
    try {
      const data = req.body;
      const resp = await super.create(data);
      console.log("usercontroller", resp);
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
}
// const newUser = async (req, res) => {
//   try {
//     data = req.body;
//     console.log("data", data);
//     user = await UserModel.create(data);
//     res.status(201).json({ code: 201, message: "created", data: user });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };
// const updateUser = async (req, res) => {
//   try {
//     console.log("data", data);
//     user = await UserModel.findByPk(req.param.id);
//     usre;
//     res.status(201).json({ code: 201, message: "created", user: user });
//     res.status(201).json({ message: "created" });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };
// const getAllUsers = async (req, res) => {
//   try {
//     users = await UserModel.findAll();
//     res.status(201).json({ message: "Request was Successful", data: users });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };
// const getUser = async (req, res) => {
//   try {
//     res.status(201).json({ message: "created" });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };
// const deleteUser = async (req, res) => {
//   try {
//     res.status(201).json({ message: "created" });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };

// module.exports.newUser = newUser;
// module.exports.updateUser = updateUser;
// module.exports.getAllUsers = getAllUsers;
// module.exports.getUser = getUser;
// module.exports.deleteUser = deleteUser;
module.exports = UserController;
