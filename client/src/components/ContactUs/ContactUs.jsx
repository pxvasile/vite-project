import './ContactUs.css';
import GoogleMapModal from './GoogleMaps/GoogleMaps';

export default function ContactUs() {
    return (
        <>
            <div className="contact-container">
                <div className='left-container'>
                    <form action="action" className='contact-form'>

                        <label className='fname' htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label className='lname' htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label className='company' htmlFor="company">Company name:</label>
                        <input type="text" id="company" name="company" placeholder="Your company name.." />

                        <label className='number' htmlFor="number">Number:</label>
                        <input type="text" id="number" name="number" placeholder="Your last number.." />

                        <label className='email' htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Your last email.." /><br/>

                        <label className='subject' htmlFor="subject">Subject:</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." /><br/>

                        {/* <button type="submit" className="btnn" value="ADD Product">SUBMIT</button> */}

                    </form> 
                </div>

                <div className='right-container'>
                    <h1>Contact Details</h1>
                    <h2>pl. "Sofroniy Vrachanski"</h2>
                    <h2>Town square</h2>
                    <h2>Vratsa</h2>
                    <h2>Tel: 0888 888 123</h2>
                    <h2>Map</h2>
                    <GoogleMapModal />
                    {/* <iframe className='iframe' width="494" height="400" src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=%D0%BF%D0%BB.%20%E2%80%9E%D0%A1%D0%BE%D1%84%D1%80%D0%BE%D0%BD%D0%B8%D0%B9%20%D0%92%D1%80%D0%B0%D1%87%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%E2%80%9C+(Woodworking)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe> */}
                </div>
            </div>
        </>
    )
}