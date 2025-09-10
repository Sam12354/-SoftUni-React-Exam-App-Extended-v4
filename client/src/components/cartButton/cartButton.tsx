import '../../../public/styles/cart.css';

interface CartButtonProps {
    onCart: () => void; 
}

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
