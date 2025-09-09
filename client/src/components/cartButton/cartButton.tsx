interface CartButtonProps {
    onCart: () => void; // callback function with no arguments
}

export default function CartButton({ onCart }: CartButtonProps) {
    return (
        <button 
            onClick={onCart} 
            className="btn btn-outline-primary d-flex align-items-center gap-2"
        >
            🛒 Added on cart
        </button>
    );
}
