import AboutUs from "../AboutUs";
import Catalog from "../Catalog/Catalog";
// import '../Content/Content.module.css';

export default function Content() {
    return(
        <div className="contend-area">
          <Catalog />
          <AboutUs />

        <div className="demo-section">
          <div className="container">
            <div className="w-45">
              <div className="left-content border-line">
                <h6>SO DREAMY</h6>
                <p>
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h6>APPLE STORE</h6>
                <p>
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="w-45 mrgn">
              <div className="right-content">
                <h6>MORE BUZZ WORDS</h6>
                <p>
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h6>EXTRA STARTUP JUICE</h6>
                <p>
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="demo-button">
              <a href="#">Try Demo</a>
            </div>
          </div>
        </div>
        <div className="color-content">
          <div className="container">
            <div className="main-content">
              <div className="w-30 spes">
                <div className="first-color"></div>
                <div className="color-title">
                  <h6>EXTRA STARTUP JUICE</h6>
                  <p>Added Feature</p>
                </div>
              </div>
              <div className="w-30 spes">
                <div className="second-color"></div>
                <div className="color-title">
                  <h6>SO THIRSTY</h6>
                  <p>Extra nice UI comes with the app</p>
                </div>
              </div>
              <div className="w-30">
                <div className="some-text">
                  <h1>So flat you'll want to give it some shadows</h1>
                  <p>
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-button">
              <div className="img-wraper">
                <img
                  src="images/left-greater-than-sign-.png"
                  alt="Graterthan Sign"
                />
                <img
                  src="images/right-greater-than-sign.png"
                  alt="Graterthan Sign"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}