require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user.route.js');
const productRouter = require('./routes/product.route');



app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/product', productRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

module.exports = app;