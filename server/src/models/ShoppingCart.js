import { Schema, model, Types } from 'mongoose'

const ShoppingCartSchema = new Schema ({

    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },

    item: {
        type: Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    

})

const ShoppingCart = model('ShoppingCart', ShoppingCartSchema)

export default ShoppingCart