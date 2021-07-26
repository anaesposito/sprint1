const loginUsers = (req, res) => {};
const registerUsers = (req, res) => {};
const createUser = (req, res) => {};
const updateUser = (req, res) => {};
const listOfUsers = (req, res) => {
  res.send(readFromJson("./data/user.json"));
};
const seeUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = {
  loginUsers,
  registerUsers,
  createUser,
  updateUser,
  listOfUsers,
  seeUser,
  deleteUser,
};
