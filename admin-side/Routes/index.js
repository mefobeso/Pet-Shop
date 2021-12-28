const authRouter = require('./auth')
const postRouter = require('./post')
const petRouter = require('./pet')
const voucherRouter = require('./voucher')
const cateRouter = require('./cate')
const billRouter = require('./bill')
const cartRouter = require('./cart')

var route = function(app){
    app.get("/",(req,res)=>{
        res.send(`<center><h1>Hello World, TMĐT API</h1></center>`)
    })
    
    app.use('/auth',authRouter);
    app.use('/posts',postRouter);
    app.use('/pet',petRouter);
    app.use('/voucher',voucherRouter);
    app.use('/category',cateRouter);
    app.use('/bill',billRouter);
    app.use('/cart',cartRouter);
}

module.exports = route;