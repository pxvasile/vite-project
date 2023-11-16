import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="content">

            <h1>We Provide Carpentry Services</h1>
            <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
                expedita atque eveniet quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus
                Link quae totam ipsa illum minus laudantium?</p>

            <button className="cn"><Link to="#">JOIN US</Link></button>
        </div>
    )
}