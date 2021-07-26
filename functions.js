const fs = require("fs");

const readFromJson = (logfile) => {
  let rawdata = fs.readFileSync(logfile);
  let data = JSON.parse(rawdata);
  return data;
};

//tiro error si no encuentra la ententy segun id
const entityNotFound = (entityFromDB, entityName) => {
  if (!entityFromDB) {
    const err = new Error(`${entityName} info not found`);
    err.status = 404;
    throw err;
  }
};

//busco la entity con el id que tengo en params
const findOneObj = (req, res, entityFile, entityName) => {
  let DBEntities = readFromJson(entityFile);

  const entityFromDB = DBEntities.find(
    (entity) => entity.id === Number(req.params.id)
  );
  entityNotFound(entityFromDB, entityName);

  return entityFromDB;
};

//le doy por get un solo obj
const getOneObj = (req, res, entityFile, entityName) => {
  return res.send(findOneObj(req, res, entityFile, entityName));
};

const update = (req, res, next, model, entityFile, entityName) => {
  try {
    findOneObj(req, res, entityFile, entityName);

    const newModelInfo = readFromJson(entityFile).map((entity) => {
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
  getOneObj,
  update,
};
