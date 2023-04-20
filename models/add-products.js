const sequelize = require('../util/database');
const Sequelize = require('sequelize');

const Cart = sequelize.define('cart',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    product: Sequelize.STRING
});

module.exports= Cart;