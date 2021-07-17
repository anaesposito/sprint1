const { readFromJson } = require("./utils");
const fs = require("fs");

function loginUsers(req, res) {}
function registerUsers(req, res) {}
function createUser(req, res) {}
function updateUser(req, res) {}
function listOfUsers(req, res) {
  res.send(readFromJson("./data/user.json"));
}
function deleteUser(req, res) {}

function listOfProducts(req, res) {
  res.send(readFromJson("./data/products.json"));
}

const createProduct = (req, res, next) => {
  try {
    let data = readFromJson("./data/products.json");
    const newProduct = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    };
    data.push(newProduct);
    fs.writeFileSync("./data/products.json", JSON.stringify(data));
    res.status(201).json(newProduct);
  } catch (e) {
    next(e);
  }
};

const updateProduct = (req, res, next)=> {
      try {
     let data = readFromJson("./data/products.json")
      const productInfo = data.find(prod => prod.id === Number(req.params.id));
      if (!productInfo) {
        const err = new Error('Product info not found');
        err.status = 404;
        throw err;
      }
      const newProductInfoData = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
      };
      const newProductInfo = data.map(prod => {
        if (prod.id === Number(req.params.id)) {
          return newProductInfoData;
        } else {
          return prod;
        }
      });
      fs.writeFileSync("./data/products.json", JSON.stringify(newProductInfo));
      res.status(200).json(newProductInfoData);
    } catch (e) {
      next(e);
    }
  };


function deleteProduct(req, res) {}
function listOfOrders(req, res) {
  res.send(readFromJson("./data/orders.json"));
}
function createOrder(req, res) {}

const updateOrder = (req, res,next) => {
 
    try {
   let data = readFromJson("./data/orders.json")
    const orderInfo = data.find(ord => ord.id === Number(req.params.id));
    if (!orderInfo) {
      const err = new Error('Order info not found');
      err.status = 404;
      throw err;
    }
    const newOrderInfoData = {

      id: "",
      time: "",
      user: "",
      items: [],
      deliveryAdress: "",
      status: "pending",
      openForChanges: true,
      totalPrice: 2,
      typeOfPayment: ""

      // id: req.body.id,
      // name: req.body.name,
      // price: req.body.price,
      // quantity: req.body.quantity,
    };
    const newOrderInfo = data.map(ord => {
      if (ord.id === Number(req.params.id)) {
        return newOrderInfoData;
      } else {
        return ord;
      }
    });
    fs.writeFileSync("./data/orders.json", JSON.stringify(newOrderInfo));
    res.status(200).json(newOrderInfoData);
  } catch (e) {
    next(e);
  }
};

function deleteOrder(req, res) {}
function listOfPaymentsMethod(req, res) {
  res.send(readFromJson("./data/typeOfPayments.json"));
}

function createPaymentMethod(req, res) {}
function updatePaymentMethod(req, res) {}
function deletePaymentMethod(req, res) {}

module.exports = {
  loginUsers,
  registerUsers,
  createUser,
  updateUser,
  listOfUsers,
  deleteUser,
  listOfProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  listOfOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  listOfPaymentsMethod,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
