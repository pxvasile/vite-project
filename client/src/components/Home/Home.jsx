import { useNavigate } from 'react-router-dom';

import './Home.css';
import Path from '../../paths';

export default function Home() {
    const navigate = useNavigate();

 const navigateHandler = () => {
    navigate(Path.ContactUs)
 }   
    return (
        <div className="content">

            <h1>We Provide Carpentry Services</h1>
            <p className="par">Our services range from carpentry maintenance services such as replacing doors, fixing windows to building new staircases, pergolas, and renovating whole rooms. If you want hassle-free, quality carpentry work done contact us today! We give FREE quotations for any type of dream project - big or small.</p>

            <button onClick={navigateHandler} className="cn">CONTACT US</button>
        </div>
    )
}