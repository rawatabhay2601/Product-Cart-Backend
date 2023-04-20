const express = require('express');
const app = express();
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const cartRoute = require('./routes/cart-route');

app.use(cors());
app.use(bodyParser.json());

app.use(cartRoute);

sequelize.sync()
.then(res => app.listen(3000))
.catch(err => console.log(err))
