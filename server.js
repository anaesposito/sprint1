const express = require("express");

const server = express();
const {
  listOfOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("./handlers/ordersHandlers");

const {
  getOneProduct,
  listOfProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./handlers/productsHandlers");

const {
  loginUsers,
  // registerUsers,
  registerUser,
  updateUser,
  listOfUsers,
  deleteUser,
  getOneUser,
} = require("./handlers/usersHandlers");

const {
  listOfPaymentsMethod,
  getOnePaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
} = require("./handlers/paymentMethodsHandlers");

server.use(express.json());

// // CRUD (Create, Read, Update, Delete)
// // Login

// server.post("/api/v1/authorization/login", loginUsers);
// server.post("/api/v1/authorization/register", registerUsers);

// //Users
server.get("/api/v1/user/", listOfUsers);
server.get("/api/v1/user/:id", getOneUser);
server.post("/api/v1/user/", registerUser);
server.put("/api/v1/user/:id", updateUser);
server.delete("/api/v1/user/:id", deleteUser);

// //Products
server.get("/api/v1/products/:id", getOneProduct);
server.get("/api/v1/products", listOfProducts);
server.post("/api/v1/products", createProduct);
server.put("/api/v1/products/:id", updateProduct);
server.delete("/api/v1/products/:id", deleteProduct);

// //Orders
server.get("/api/v1/order", listOfOrders);
server.get("/api/v1/order/:id", getOneOrder);
server.post("/api/v1/order/", createOrder);
server.put("/api/v1/order/:id", updateOrder);
server.delete("/api/v1/order/:id", deleteOrder);

// //Payments
server.get("/api/v1/paymentMethod", listOfPaymentsMethod);
server.get("/api/v1/paymentMethod/:id", getOnePaymentMethod);
server.post("/api/v1/paymentMethod/", createPaymentMethod);
server.put("/api/v1/paymentMethod/:id", updatePaymentMethod);
server.delete("/api/v1/paymentMethod/:id", deletePaymentMethod);

server.listen(9090, function () {
  console.log("Escuchando el puerto 9090!");
});
