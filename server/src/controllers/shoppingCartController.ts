import { Router, Request, Response } from "express";
import { getErrorMassage } from '../utils/errorUtils.js';
import { shoppingCartService, shoppingCartServiceGet } from "../services/shoppingCartService.js";
import { Types } from 'mongoose'
// trqbva da import Request, Response za6toto ts ne znae req, res kakuv type sa


const shoppingCartController = Router()

interface AuthRequest extends Request {
    user?: {
      _id: Types.ObjectId;
    };
}
// you use this custom AuthRequest type whenever you need to access req.user

shoppingCartController.get('/', async (req: AuthRequest, res: Response) => {

    const userId = req.user?._id

    if(!userId){
        return res.status(401).json({ error: 'User not authenticated' });
    }

    try {
        const items = await shoppingCartServiceGet(userId)
        res.json(items)
    } catch (error) {
        res.status(400).json({ error: getErrorMassage(error) })
    }

})

shoppingCartController.post('/', async (req: AuthRequest, res: Response) => {
    const userId = req.user?._id
    const itemId = new Types.ObjectId(req.params.itemId)
    // string but TS expects an objectId

    if(!userId){
        return res.status(401).json({ error: 'User not authenticated' });
    }

    try {
        const items = await shoppingCartService(userId, itemId)
        res.json(items)
    } catch (error) {
        res.status(400).json({ error: getErrorMassage(error) })
    }
})


export default shoppingCartController