const userService = require("../services/user");
const ticketService = require("../services/ticket");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const HttpError = require("../models/http-error");

const createUser = async (req, res, next) => {
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(req.body.password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  req.body.password = hashedPassword;
  const createdUser = await userService.createUser(req.body);

  let token;
  try {
    token = jwt.sign(
      { firstName: createdUser.firstName, email: createdUser.email },
      "supersecret_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      403
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    res.status(400).send("users param are required");
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      "supersecret_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

const countUsers = async (req, res) => {
  const users = await userService.countUser();
  res.json(users);
};

const getUserByParam = async (req, res) => {
  var [email, firstName, lastName] = req.params.param.split("="); // get 3 parameters with split =

  const user = await userService.getUserByParam(email, firstName, lastName);
  console.log(email);
  console.log(firstName);
  console.log(lastName);

  res.json(user);
};

const getUserByEmail = async (req, res) => {
  const user = await userService.getUserByEmail(req.params.email);

  if (!user) {
    return res.status(404).json({ errors: ["email not found"] });
  }

  res.json(user);
};

const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ errors: ["user_id not found"] });
  }

  res.json(user);
};

const getOnlyUserById = async (req, res) => {
  const user = await userService.getOnlyUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ errors: ["user_id not found"] });
  }

  res.json(user);
};

const updateUser = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "user param is required",
    });
  }

  const user = await userService.updateUser(req.params.id, req.body);
  if (!user) {
    return res.status(404).json({ errors: ["username not found"] });
  }

  res.json(user);
};

const updateTicketOfUser = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "users param are required",
    });
  }

  const user = await userService.updateTicketOfUser(req.params.id);
  if (!user) {
    return res.status(404).json({ errors: ["user not found"] });
  }

  res.json(user);
};

const deleteUser = async (req, res) => {
  const tickets = await ticketService.getTicketsByUserId(req.params.id);

  tickets.forEach(function (ticketId) {
    const ticket = ticketService.deleteTicket(ticketId["_id"]);
    if (!ticket) {
      return res.status(404).json({ errors: ["ticket not found for deleted"] });
    }
  });

  const user = await userService.deleteUser(req.params.id);
  if (!user) {
    return res.status(404).json({ errors: ["user not found"] });
  }

  res.send();
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateTicketOfUser,
  deleteUser,
  countUsers,
  getUserByParam,
  getUserByEmail,
  getOnlyUserById,
  login,
};
