import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="content">
        <h1>We Provide Carpentry Services</h1>
        <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
          expedita atque eveniet quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus
          Link quae totam ipsa illum minus laudantium?</p>

        <button className="cn"><Link to="#">JOIN US</Link></button>

        <div className="form">
          <h2>Login Here</h2>
          <input type="email" name="email" placeholder="Enter Email Here" />
          <input type="password" name="" placeholder="Enter Password Here" />
          <button className="btnn"><Link to="#">Login</Link></button>

          <p className="link">Don't have an account
            <Link to="#">Sign up here</Link></p>
          <p className="liw">Log in with</p>

          <div className="icons">
            <Link to="#"><ion-icon name="logo-facebook"></ion-icon></Link>
            <Link to="#"><ion-icon name="logo-instagram"></ion-icon></Link>
            <Link to="#"><ion-icon name="logo-twitter"></ion-icon></Link>
            <Link to="#"><ion-icon name="logo-google"></ion-icon></Link>
            <Link to="#"><ion-icon name="logo-skype"></ion-icon></Link>
          </div>

        </div>
      </div>
    )
}