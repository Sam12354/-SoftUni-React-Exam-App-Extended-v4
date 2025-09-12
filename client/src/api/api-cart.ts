import requester from "./requester"; 

const BASE_URL = "http://localhost:7777";

export interface Cart {
    _id: string;
    title: string;
    price: number;
    image: string;
}

// trqbva tova interface da match s interface v useCart na getItems

export const getAllCartItems = async (): Promise<Cart[]> => {
    const response = await requester.get(`${BASE_URL}/cart`);
    
    return response.data as Cart[];
    // thats an array of cart objects
}

export const createCart = async (itemId: string) => {
    const response = await requester.post(`${BASE_URL}/cart`, { itemId });
    
    return response.data;
};

// tazi function createCart se matchva s useCreateCartItem, zatova ne mi trqbva interface tam

// If a function or hook only takes a single simple value (like a string, number, or boolean), 
// you don’t need an interface; interfaces are only needed for objects with multiple properties.

