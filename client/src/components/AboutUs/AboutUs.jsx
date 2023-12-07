import { Link } from "react-router-dom";

import './AboutUs.css';
import Path from "../../paths";

export default function AboutUs() {
  return (
    <div>
      <div className="about-head">
        <h1>About Us</h1>
      </div>
      <section id="about-page">
        <div className="about-container">
          <div className="about-content">
            <h2>Who Are We?</h2>
            <p>The Furniture company are a BG based furniture manufacturer and retailer in the heart of Vratsa with industry experience spanning over 30 years. We use this experience to create high-quality furniture.</p>
          </div>
          <div className="about-content" >
            <h2>Our History</h2>
            <p>We are a family business that has been in the furniture manufacturing and retail industry for over 30 years, our commitment and attitude toward providing quality service has always been the same. Family is a big word for us. Once you become part of our community, our loyalty is unrivalled. We want to grow our relationship with you. When you invest with us, we invest in you.</p>
          </div>
          <div className="about-content">
            <h2>What Do We Provide?</h2>
            <p>We provide upholstery manufacturing from start to finish. All our work is in-house, so we we do not pass you around any third parties. We build the framework and control everything from sewing, cutting and upholstery. All our designs are created by our inventive in-house design team, <Link to={Path.Catalog} className="contact-page">our collection</Link> is the result of a hard-working, talented team. We provide aftercare for all our products.</p>
          </div>
          <div className="about-content">
            <h2>Modern Technology</h2>
            <p>We operate with the best machinery, and we have just invested. Exciting times are ahead as we have just made our process more efficient, which means we can do more in the same lead time. How? By investing in automated fabric cutting machine! In addition, we use top of the range band saws and CNC equipment.</p>
          </div>
          <div className="about-content">
            <h2>Who Buys It?</h2>
            <p>Most of our custom comes from high-street retailers. We also work in the contract furniture market such as the health and leisure sectors. If you are interested in speaking to an advisor about your options, visit our <Link to={Path.ContactUs} className="contact-page">contact page</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  )
}