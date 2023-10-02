module.exports = app => {
  const homeworks = require("../controllers/homework.controller.js");

  var router = require("express").Router();

  router.post("/", homeworks.create);

  router.get("/", homeworks.findAll);

  router.get("/:id", homeworks.findOne);

  router.put("/:id", homeworks.update);

  router.delete("/:id", homeworks.delete);

  app.use("/todos", router);
};
