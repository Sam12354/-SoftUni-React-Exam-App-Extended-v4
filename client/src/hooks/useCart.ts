import { useState, useEffect } from "react";
import { createCart, getAllCartItems } from "../api/api-cart";


export interface CartItem {
    _id: string;
    title: string;
    price: number;
    image: string;
}

export function useGetAllCartItems() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        async function fetchData() {
            const result = (await getAllCartItems()) || [];
            setCartItems(result);
        }
        fetchData();
    }, []);

    return [cartItems, setCartItems] as const;
}


export function useCreateCartItem(){
    
    const itemCartCreate = async (itemId: string) => {
        return await createCart(itemId)
    }

    return itemCartCreate;

}
