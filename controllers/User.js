const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');

exports.createUser = catchAsync(async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    res.status(201).json({
      success: true,
      data: newUser
    });
  } catch (error) {
    console.log(error);
  }
});
