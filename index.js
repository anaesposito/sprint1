const express = require("express");
const fs = require("fs");

const server = express();

server.get("/api/v1/products", (req, res) => {});

// server.listen(9090, () => {
//   console.log("estoy escuchando tu  puerto");
// });
