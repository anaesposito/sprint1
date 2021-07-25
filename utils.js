const logFile = require("./data/products.json");
const fs = require("fs");
// const orders = require("./data/entities.js")
// const products = require("./data/entities.js")

const readFromJson = (logfile) => {
  let rawdata = fs.readFileSync(logfile);
  let data = JSON.parse(rawdata);
  return data;
};






const update = (req, res, next, model, entityFile, entityName) => {
  console.log("soy model", model)
  console.log("soy entityfile", entityFile)
  console.log("soy entityName", entityName)

  try {
 let data = readFromJson("./data/orders.json")
 console.log("hola soy data", data)

  const entityInfo = data.find(entity => entity.id === Number(req.params.id));


  if (!entityInfo) {
    const err = new Error(`${entityName} info not found`);
    err.status = 404;
    throw err;
  }

  const newModelInfo = data.map(entity => {
    if (entity.id === Number(req.params.id)) {
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
  update
};

