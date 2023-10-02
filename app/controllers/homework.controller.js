const db = require("../models");
const Homework = db.homeworks;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Empty content"
    });
    return;
  }

  const homework = {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed ? req.body.completed : false
  };

  Homework.create(homework)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error: Cannot create homework"
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Homework.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error: Load homweworks fail"
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Homework.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error to load homework with id: " + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Homework.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Homework updated succesfully"
        });
      } else {
        res.send({
          message: `Error to update homework with id: =${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error to update homework with id: =${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Homework.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "The homework was deleted succesfully"
        });
      } else {
        res.send({
          message: `Error to delete homework with id: =${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error to delete homework with id: =${id}.`
      });
    });
};