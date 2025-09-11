import { Router } from "express";
import { getErrorMassage } from '../utils/errorUtils.js';
import { shoppingCartService, shoppingCartServiceGet } from "../services/shoppingCartService.js";

const shoppingCartController = Router();

shoppingCartController.get('/', async (req, res) => {
    const userId = req.user?._id;

    if(!userId){
        return res.status(401).json({ error: 'User not authenticated' });
    }

    try {
        const items = await shoppingCartServiceGet(userId);
        res.json(items);
    } catch (error) {
        res.status(400).json({ error: getErrorMassage(error) });
    }
});

shoppingCartController.post('/', async (req, res) => {
    const userId = req.user?._id;
    const itemId = req.params.itemId;

    if(!userId){
        return res.status(401).json({ error: 'User not authenticated' });
    }

    try {
        const items = await shoppingCartService(userId, itemId);
        res.json(items);
    } catch (error) {
        res.status(400).json({ error: getErrorMassage(error) });
    }
});

export default shoppingCartController;