const Cart = require('../models/add-products');

exports.postProduct = async (req,res,next) => {

    const price = req.body.money;
    const product = req.body.product;
    const addedData = await Cart.create({price:price,product:product});
 
    res.status(201).json({CartDetails:addedData})
};

exports.deleteProduct = async (req,res,next) => {

    const prodId = req.params.productId;
    const deleteResponse = await Cart.destroy({where : {id : prodId}});

    res.status(201).json({CartDetails:deleteResponse})
};

exports.getProductAll = async (req,res,next) => {

    const allProducts = await Cart.findAll();
    res.status(201).json({CartDetails:allProducts});
};