require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const connectDB = async () => {
    try{
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@petshop.gt7ip.mongodb.net/PetShop?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        }
    );
    console.log("Connect success!!");
    }
    catch (error){
        console.log("Connect failed!!")   
        process.exit(1);
    }
}

connectDB();


const app = express();
app.use(express.json());
const authRouter = require('./Routes/auth')
app.use('/admin/auth',authRouter);
const postRouter = require('./Routes/post')
app.use('/admin/posts',postRouter);
const petRouter = require('./Routes/pet')
app.use('/admin/pet',petRouter);
const voucherRouter = require('./Routes/voucher')
app.use('/admin/voucher',voucherRouter);
const cateRouter = require('./Routes/cate')
app.use('/admin/category',cateRouter);
const billRouter = require('./Routes/bill')
app.use('/admin/bill',billRouter);
const cartRouter = require('./Routes/cart')
app.use('/admin/cart',cartRouter);

const PORT = 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));