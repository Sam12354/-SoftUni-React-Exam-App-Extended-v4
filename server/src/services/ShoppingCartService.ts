import { Types } from 'mongoose';
import ShoppingCart from '../models/ShoppingCart';

export const shoppingCartService = async (userId: Types.ObjectId, itemId: Types.ObjectId) => {
    return ShoppingCart.create({ user: userId, item: itemId })
}