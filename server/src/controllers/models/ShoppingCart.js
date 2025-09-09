"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ShoppingCartSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        // slagam schema otpred za da moje ts i mongoose da rabotqt
        ref: 'User',
        required: true,
    },
    item: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
});
var ShoppingCart = (0, mongoose_1.model)('ShoppingCart', ShoppingCartSchema);
exports.default = ShoppingCart;
