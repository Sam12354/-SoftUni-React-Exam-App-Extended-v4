import { Types } from 'mongoose';
import ShoppingCart from '../models/ShoppingCart';

export const shoppingCartServiceGet = async (userId: Types.ObjectId) => {
    return ShoppingCart.create({ user: userId })
}

// split shopping cart service into getUserCart and addToCart for proper TS typing because controller expects only userId for get

export const shoppingCartService = async (userId: Types.ObjectId, itemId: Types.ObjectId) => {
    return ShoppingCart.create({ user: userId, item: itemId })
}