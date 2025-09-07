import { Router } from "express";
import { getErrorMassage } from "../utils/errorUtils.js";
import { likeItem } from "../services/likeService.js";

const likeController = Router();

likeController.post('/:itemId', async (req, res) => {

    const userId = req.user?._id; 
    const itemId = req.params.itemId 
    
    try {
        const like = await likeItem(userId, itemId)
        res.json(like);
    } catch (error) {
        res.status(400).json({ error: getErrorMassage(error) });
    }

})

export default likeController