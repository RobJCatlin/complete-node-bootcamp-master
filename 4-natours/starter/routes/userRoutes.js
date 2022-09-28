const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route isn't defined",
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route isn't defined",
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route isn't defined",
  });
};

const UpdateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route isn't defined",
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: "This route isn't defined",
  });
};

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(UpdateUser).delete(deleteUser);

module.exports = router;
