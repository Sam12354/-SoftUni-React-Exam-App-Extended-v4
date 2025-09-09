import requester from "./requester"; 

const BASE_URL = "http://localhost:7777";

export interface Cart {
    user: string;
    item: string;
}

export const getAllCartItems = async (): Promise<Cart[]> => {
    const response = await requester.get(`${BASE_URL}/cart`);
    return response.data as Cart[];
    // thats an array of cart objects
}

export const createCart = async (item: Cart): Promise<void> => {
    const create = await requester.post(`${BASE_URL}/cart`, item)
    return create.data;
}
