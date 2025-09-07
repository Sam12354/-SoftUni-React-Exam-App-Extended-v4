import { Schema, model, Types } from 'mongoose'

const ShoppingCartSchema = new Schema({

    user: {
        type: Types.ObjectId,
        ref: 'User',
    },

    item: {
        type: Types.ObjectId,
        ref: 'Item',
    },
    

})

const ShoppingCart = model('ShoppingCart', ShoppingCartSchema)

export default ShoppingCart