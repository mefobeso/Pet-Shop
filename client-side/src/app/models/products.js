const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
_id:{ type: String, maxLength: 255  },
name:{ type: String, maxLength: 255  },
price:{ type: int},
decription:{ type: String, maxLength:255 },
image:{ type: String, maxLength:500 },
rating:{ type: int, maxLength:2 },
quantity:{ type: int, maxLength: 3 }, 
})
const products = mongoose.model('products',productSchema,'Product')
module.exports = products;