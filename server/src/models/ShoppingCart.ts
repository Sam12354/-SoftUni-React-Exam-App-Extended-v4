import { Schema, model, Types } from 'mongoose'

interface MyShoppingCart {
    user: Types.ObjectId,
    item: Types.ObjectId,
}

const ShoppingCartSchema = new Schema<MyShoppingCart>({

    user: {
        type: Schema.Types.ObjectId,
        // slagam schema otpred za da moje ts i mongoose da rabotqt
        ref: 'User',
        required: true,
    },

    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    

})

const ShoppingCart = model<MyShoppingCart>('ShoppingCart', ShoppingCartSchema)

export default ShoppingCart