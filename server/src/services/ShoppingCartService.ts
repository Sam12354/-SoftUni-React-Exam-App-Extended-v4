import { Types } from 'mongoose';
import ShoppingCart from '../models/ShoppingCart';

export const shoppingCartServiceGet = async (userId: Types.ObjectId) => {
    return ShoppingCart.create({ user: userId })
}

export const shoppingCartService = async (userId: Types.ObjectId, itemId: Types.ObjectId) => {
    return ShoppingCart.create({ user: userId, item: itemId })
}