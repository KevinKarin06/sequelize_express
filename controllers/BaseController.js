const db = require("../models");
class BaseController {
  constructor(Model) {
    this.Model = Model;
    this.db = db;
  }
  static LOG = "BASECONTROLLER";
  async create(data) {
    let resp = {
      data: null,
      error: null,
    };
    try {
      const t = await this.db.sequelize.transaction();
      resp.data = await this.Model.create(data, { transaction: t });
      t.commit();
    } catch (error) {
      resp.error = error;
      console.log(
        `Error From Create Function: ${BaseController.LOG} : `,
        error
      );
      t.rollback();
    }
    return resp;
  }
  async delete(id) {
    resp = false;
    try {
      resp = await this.Model.create(data);
    } catch (error) {
      console.log(`Error From Delete Function: ${this.LOG} : `, error);
    }
    return resp;
  }
  async update(id) {
    resp = false;
    try {
      resp = await this.Model.create(data);
    } catch (error) {
      console.log(`Error From Update Function: ${this.LOG} : `, error);
    }
    return resp;
  }
  async getAll() {
    let resp = {
      data: null,
      error: null,
    };
    try {
      resp.data = await this.Model.findAll();
    } catch (error) {
      resp.error = error;
      console.log(`Error From getAll Function: ${this.LOG} : `, error);
    }
    return resp;
  }
  async getById(id) {
    resp = false;
    try {
      resp = await this.Model.create(data);
    } catch (error) {
      console.log(`Error From getById Function: ${this.LOG} : `, error);
    }
    return resp;
  }
  getModel() {
    return this.Model;
  }
}

module.exports = BaseController;
