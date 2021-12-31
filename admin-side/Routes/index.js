const authRouter = require('./auth')
const postRouter = require('./post')
const voucherRouter = require('./voucher')
const cateRouter = require('./cate')
const billRouter = require('./bill')
const roleRouter = require('./role')
const productRouter = require('./product')

var route = function(app){
    app.get("/",(req,res)=>{
        res.send(`<center><h1>Hello World, TMĐT API</h1></center>`)
    })
    app.use('/roles', roleRouter)
    app.use('/auth', authRouter);
    app.use('/posts', postRouter);
    app.use('/voucher', voucherRouter);
    app.use('/category', cateRouter);
    app.use('/bill', billRouter);
    app.use('/products', productRouter);
}

module.exports = route;