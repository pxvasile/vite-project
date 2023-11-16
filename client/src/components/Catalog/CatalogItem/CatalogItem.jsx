import { Link } from "react-router-dom";
import './CatalogItem.css';

export default function CatalogItem({
    productName,
    category,
    imageUrl
}) {
    return(
        <div className="allProducts">
        <div className="allProducts-info">
        <img src={imageUrl} />
                    <h2>{productName}</h2>
                    <h2>{category}</h2>
                    <Link to="/details" className="details-button">Details</Link>
                </div>

    </div>
    )
}