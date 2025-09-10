import { Link } from "react-router-dom";

export interface CatalogCartProps {
    _id: string;
    title: string;
    price: number;
    image: string;
}

export default function CatalogCartItem({ _id, title, price, image }: CatalogCartProps){
    return (
        <div className="portfolio-item">
            <Link className="portfolio-link" to={`/${_id}`}>
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={image} alt="..." />
            </Link>
            <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{title}</div>
                <div className="portfolio-caption-subheading text-muted">
                    <span className="fw-bold fs-5">${price}</span>
                </div>
            </div>
        </div>
    );
}