import { Router } from "express";
import shoppingCartController from "./controllers/shoppingCartController";

const routes = Router()


routes.use('/cart', shoppingCartController)

export default routes