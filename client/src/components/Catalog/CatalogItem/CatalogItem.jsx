import { Link } from "react-router-dom";
import './CatalogItem.css';

export default function CatalogItem({
    _id,
    productName,
    category,
    imageUrl
}) {
    return (
        <div className="allProducts">
            <div className="allProducts-info">
                <img src={imageUrl} />
                <h2>{productName}</h2>
                <h3>{category}</h3>
                <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}