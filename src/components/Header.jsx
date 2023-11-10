export default function Header() {
    return(
        <header className="header-area">
        <div className="container">
          <div className="menu-area">
            <nav>
              <ul>
                <li><a href="#" target="_self">HOME</a></li>
                <li>
                  <a href="#" target="_self">CATALOG</a>
                  <ul>
                    <li><a href="#" target="_self">Get Started Tutorial</a></li>
                    <li><a href="#" target="_self">Introduction Video</a></li>
                    <li><a href="#" target="_self">See the Features</a></li>
                    <li><a href="#" target="_self">Download a Trial</a></li>
                    <li><a href="#" target="_self">Get in Touch!</a></li>
                  </ul>
                </li>
                <li><a href="#" target="_self">ABOUT US</a></li>
                <li><a href="#" target="_self">CONTACT US</a></li>
                <li><a href="#" target="_self">LOGIN</a></li>
                <li><a href="#" target="_self">REGISTER</a></li>
              </ul>
            </nav>
          </div>
          <div className="header-content">
            <h1>WOODWORLD</h1>
            <p>
            WE PROVIDE CARPENTRY SERVICES
            </p>
          </div>
        </div>
        
      </header>
    )
}