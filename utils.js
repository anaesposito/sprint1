const logFile = require("./data/products.json");
const fs = require("fs");

const readFromJson = (logfile) => {
  let rawdata = fs.readFileSync(logfile);
  let data = JSON.parse(rawdata);
  return data;
};

module.exports = {
  readFromJson,
};
