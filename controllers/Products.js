const Product = require('../models/Products');
const catchAsync = require('../utils/catchAsync');

exports.createProduct = catchAsync(async (req, res) => {
  try {
    const newProduct = await Product.create({
      title: req.body.title,
      description: req.body.description,
      photo: req.body.photo,
      price: req.body.price,
      stockQuantity: req.body.stockQuantity
    });

    res.status(201).json({
      success: true,
      data: newProduct
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message
    });
  }
});
