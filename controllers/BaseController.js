const db = require("../models");

class BaseController {
    constructor(Model) {
        this.Model = Model;
        this.db = db;
    }

    static LOG = "BASE_CONTROLLER_CLASS";

    async create(data) {
        let resp = {
            data: null,
            error: null,
        };
        try {
            resp.data = await this.Model.create(data);
        } catch (error) {
            resp.error = error;
            console.log(
                `Error From Create Function: ${BaseController.LOG} : `,
                error
            );
        }
        return resp;
    }

    async delete(id) {
        let resp = {
            data: null,
            error: null,
        };
        try {
            resp.data = await this.Model.destroy({where: {id: id}});
        } catch (error) {
            resp.error = error;
            console.log(`Error From Delete Function: ${BaseController.LOG} : `, error);
        }
        return resp;
    }

    async update(id, data) {
        let resp = {
            data: null,
            error: null,
        };
        try {
            resp.data = await this.Model.update(data, {where: {id: id}});
        } catch (error) {
            resp.error = error;
            console.log(`Error From Update Function: ${BaseController.LOG} : `, error);
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
            console.log(`Error From getAll Function: ${BaseController.LOG} : `, error);
        }
        return resp;
    }

    async getById(id) {
        let resp = {
            data: null,
            error: null,
        };
        try {
            resp.data = await this.Model.findByPk(id);
        } catch (error) {
            resp.error = error;
            console.log(`Error From getById Function: ${BaseController.LOG} : `, error);
        }
        return resp;
    }

    getModel() {
        return this.Model;
    }
}

module.exports = BaseController;
