const express = require("express");

const server = express();
const {
  //   deleteProduct,
  listOfOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("./handlers/ordersHandlers");

const {
  listOfProducts,
  createProduct,
  updateProduct,
} = require("./handlers/productsHandlers");

const {
  //   loginUsers,
  //   registerUsers,
  //   createUser,
  //   updateUser,
  listOfUsers,
  // deleteUser,
} = require("./handlers/usersHandlers");

const {
  listOfPaymentsMethod,

  //   createPaymentMethod,
  //   updatePaymentMethod,
  //   deletePaymentMethod,
} = require("./handlers/typeOfPaymentsHandlers");

server.use(express.json());

// // CRUD (Create, Read, Update, Delete)
// // Login

// server.post("/api/v1/authorization/login", loginUsers);
// server.post("/api/v1/authorization/register", registerUsers);

// //Users
// server.post("/api/v1/user/:id", createUser);
// server.post("/api/v1/user/:id", updateUser);
server.get("/api/v1/user", listOfUsers);
// server.delete("api/v1/user/:id", deleteUser);

// //Products
server.get("/api/v1/products", listOfProducts);
server.post("/api/v1/products", createProduct);
server.put("/api/v1/products/:id", updateProduct);
// server.delete("/api/v1/products/:id", deleteProduct);

// //Orders
server.get("/api/v1/order", listOfOrders);
server.get("/api/v1/order/:id", getOneOrder);
server.post("/api/v1/order/", createOrder);
server.put("/api/v1/order/:id", updateOrder);
server.delete("/api/v1/order/:id", deleteOrder);

// //Payments
server.get("/api/v1/paymentMethod", listOfPaymentsMethod);
// server.post("/api/v1/paymentMethod/:id", createPaymentMethod);
// server.put("/api/v1/paymentMethod/:id", updatePaymentMethod);
// server.delete("/api/v1/paymentMethod/:id", deletePaymentMethod);

server.listen(8080, function () {
  console.log("Escuchando el puerto 8080!");
});
