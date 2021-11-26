const mongoose = require('mongoose');

async function connect() {
    try{
    await mongoose.connect('mongodb+srv://nguyenthanhduy3107:0909836284As!@petshop.gt7ip.mongodb.net/PetShop?retryWrites=true&w=majority');
    console.log("Connect success!!")
    }
    catch (error){
        console.log("Connect failed!!")
    }
}

module.exports = {connect};
