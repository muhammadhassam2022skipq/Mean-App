const mongoose = require ('mongoose');
const { stringify } = require('querystring');
const shoppingItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        require: true
    },
    itemQuantity: {
        type: Number,
        require: true
    },
    itemBought: {
        type: Boolean,
        require: true
    }
})
const item = module.exports = mongoose.model('item',shoppingItemSchema)