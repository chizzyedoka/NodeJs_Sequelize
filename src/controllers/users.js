const { Users } = require("../models/index");

const createUser = async (req, res, next) => {
  // check body of request has required parameters
  if (!req.body.username) {
    return res.status(400).json({
      error: "username is required but not provided",
    });
  }
  if (!req.body.password) {
    return res.status(400).json({
      error: "password is required but not provided",
    });
  }
  if (!req.body.email) {
    return res.status(400).json({
      error: "email is required but not provided",
    });
  }
  next();
};
