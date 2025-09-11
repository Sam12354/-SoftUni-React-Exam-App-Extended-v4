import { useState, useEffect } from "react";
import { CartProps } from "../components/cart/CatalogCart";
import { getAllCartItems } from "../api/api-cart";

export function useGetAllCartItems() {
    const [cartItems, setCartItems] = useState<CartProps[]>([]);

    useEffect(() => {
        async function fetchData() {
            // explicitly type the result as any[] (or Cart[]) first
            const result: any = await getAllCartItems();
            const mappedResult: CartProps[] = Array.isArray(result)
                ? result.map(r => ({
                    _id: r._id,
                    title: r.title,
                    price: r.price,
                    image: r.image
                }))
                : [];
        }
        fetchData();
    }, []);

    return [cartItems, setCartItems] as const;
}
