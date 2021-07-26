const listOfPaymentsMethod = (req, res) => {
  res.send(readFromJson("./data/typeOfPayments.json"));
};
const seePaymentMethod = (req, res) => {};
const createPaymentMethod = (req, res) => {};
const updatePaymentMethod = (req, res) => {};
const deletePaymentMethod = (req, res) => {};

module.exports = {
  listOfPaymentsMethod,
  seePaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
