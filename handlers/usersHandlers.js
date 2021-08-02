const { updateOneObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");
const { deleteObj } = require("../functions.js");
const { entityNotFound } = require("../functions.js");

// enconde btoa()
//decode atob()

const entityName = "user";
const entityFile = "./data/user.json";
const listOfUsers = (req, res) => {
  res.send(readFromJson("./data/user.json"));
};

const getOneUser = (req, res) => {
  getOneObj(req, res, entityFile, entityName);
};

const registerUser = (req, res, next) => {
  const model = {
    id: Number(req.body.id),
    userName: req.body.userName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    deliveryAdress: req.body.deliveryAdress,
    password: req.body.password,
    type: req.body.type,
  };
  createOneObject(req, res, next, model, entityFile);
};

const updateUser = (req, res, next) => {
  const model = {
    id: Number(req.body.id),
    userName: req.body.username,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    deliveryAdress: req.body.deliveryAdress,
    password: req.body.password,
    type: req.body.type,
  };
  updateOneObj(req, res, next, model, entityFile, entityName);
};

const deleteUser = (req, res, next) => {
  deleteObj(req, res, next, entityFile);
};

const loginUser = (req, res, next) => {
  let DBEntities = readFromJson(entityFile);
  const entityFromDB = DBEntities.find(
    (entity) =>
      entity.userName === req.body.userName &&
      entity.password === req.body.password
  );
  if (!entityFromDB) {
    const err = new Error(`${entityName} info not found`);
    err.status = 404;
    throw new Error("User is not registered");
  } else {
    res.send("You are logged in");

    next();
  }
};

module.exports = {
  listOfUsers,
  getOneUser,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
};
