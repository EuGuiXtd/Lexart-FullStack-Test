require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.route.js');
/* const productRouter = require('./routes/product.route');
const orderRouter = require('./routes/order.route'); */



app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
/* app.use('/products', productRouter);
app.use('/orders', orderRouter);
 */


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

module.exports = app;