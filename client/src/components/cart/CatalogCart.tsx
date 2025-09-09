import { useGetAllCartItems } from "../../hooks/useCart";
import CatalogCart from "./catalogCart/CatalogCartItem";

export interface CartProps {
    _id: string;
    title: string;
    price: number;
    image: string;
}

export default function Cart() {

    const [items] = useGetAllCartItems();

    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Shop</h2>
                    <h3 className="section-subheading text-muted fw-bold fs-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                        Discover a world of products from sellers like you.
                    </h3>
                </div>
                <div className="row">
                    {items.length ? 
                        items.map(item => <CatalogCart key={item._id} {...item} />)  
                        :
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh", width: "100%" }}>
                            <h1 className="text-center text-muted">Your cart is empty</h1>
                        </div>
                    }
                </div>
            </div>
        </section>
    );

}
