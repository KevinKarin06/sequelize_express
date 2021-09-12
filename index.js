const express = require("express");
const app = express();
const routes = require("./routes/routes");
const constants = require("./constants");
const db = require("./models");
db.sequelize
  .sync({alter:true})
  .then(() => {
    console.log("Drop and Synced");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.listen(constants.port, function () {
  console.log("Running on port: ", constants.port);
});
