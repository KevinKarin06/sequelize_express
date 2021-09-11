const express = require("express");
const app = express();
const routes = require("./routes/routes");
const constants = require("./constants");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  constants.database,
  constants.user,
  constants.password,
  {
    dialect: "mariadb",
  }
);
(async function conn() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ alter: true });
  } catch (error) {
    //throw error
  }
})();

app.use("/api", routes);
app.listen(constants.port, function () {
  console.log("Running on port: ", constants.port);
});
