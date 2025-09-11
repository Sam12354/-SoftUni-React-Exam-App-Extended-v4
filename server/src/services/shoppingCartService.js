import ShoppingCart from '../models/ShoppingCart.js';

export const shoppingCartServiceGet = async (userId) => {
    return ShoppingCart.find({ user: userId })
}

export const shoppingCartService = async (userId, itemId) => {
    return ShoppingCart.create({ user: userId, item: itemId })
}