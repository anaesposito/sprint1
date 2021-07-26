const listOfProducts = (req, res) => {
  res.send(readFromJson("./data/products.json"));
};

// const seeProduct = (req, res) => {};

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

    // crear writeJson con data.push
    fs.writeFileSync("./data/products.json", JSON.stringify(data));
    res.status(201).json(newProduct);
  } catch (e) {
    next(e);
  }
};

const updateProduct = (req, res, next) => {
  try {
    let data = readFromJson("./data/products.json");
    const productInfo = data.find((prod) => prod.id === Number(req.params.id));

    if (!productInfo) {
      const err = new Error("Product info not found");
      err.status = 404;
      throw err;
    }
    const newProductInfoData = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    };
    const newProductInfo = data.map((prod) => {
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

// const deleteProduct = (req, res) => {};

module.exports = {
  listOfProducts,
  // seeProduct,
  createProduct,
  updateProduct,
  // deleteProduct
};
