import '../../../public/styles/cart.css';

interface CartButtonProps {
    onCart: () => void; 
}

// tova onClick={onCart} 6tom e napraveno taka trqbva i v details vmesto onClick da e onCart onCart={itemAddToCart}
export default function CartButton({ onCart }: CartButtonProps) {
    return (
        <button
            onClick={onCart}
            className="cart-btn"
        >
            <i className="fas fa-shopping-cart me-1"></i> Buy
        </button>
    );
}
