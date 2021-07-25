const logFile = require("./data/products.json");
const fs = require("fs");
// const orders = require("./data/entities.js")
// const products = require("./data/entities.js")

const readFromJson = (logfile) => {
  let rawdata = fs.readFileSync(logfile);
  let data = JSON.parse(rawdata);
  return data;
};

const create = (req, res, next, model, entityFile, entityName) => {
  try {
    let data = readFromJson(entityFile);
    const newProduct = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    };
    data.push(newProduct);
    fs.writeFileSync(entityFile, JSON.stringify(data));
    res.status(201).json(newProduct);
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next, model, entityFile, entityName) => {
  console.log("soy entityfile", entityFile);
  console.log("soy entityName", entityName);

  try {
    let DBEntities = readFromJson(entityFile);
    console.log("hola soy DBEntities", DBEntities);
    //aca busca el id que le paso
    const entityFromDB = DBEntities.find(
      (entity) => entity.id === Number(req.params.id)
    );
    console.log("soy entityFromDB", entityFromDB);
    //aca valida si existe ese obj con ese id
    if (!entityFromDB) {
      const err = new Error(`${entityName} info not found`);
      err.status = 404;
      throw err;
    }

    const newModelInfo = DBEntities.map((entity) => {
      if (entity.id === model.id) {
        return model;
      } else {
        return entity;
      }
    });
    fs.writeFileSync(entityFile, JSON.stringify(newModelInfo));
    res.status(200).json(model);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  readFromJson,
  update,
};
