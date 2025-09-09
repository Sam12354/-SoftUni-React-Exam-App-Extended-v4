import '../../../public/styles/cart.css';

// here is where ill click, not in details, when i click the icon I get redirects

interface cartButton {
    onClick: () => void;
}

export default function CartIcon({ onClick }: cartButton) {

    return (
        <button onClick={ onClick }>
            <div className="cart-icon">
                🛒
            </div>
        </button>
    );
}
