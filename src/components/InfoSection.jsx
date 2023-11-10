export default function InfoSection() {
    return (
        <footer className="info-area">
            <div className="container">
                <div className="text-content">
                    <div className="w-80">
                        <div className="info-content">
                            <div className="w-60">
                                <h2 className="info-h2">
                                    WoodWorld
                                </h2>
                                <p className="first-p">
                                    Nam mi enim, auctor non ultricies a, fringilla eu risus.
                                    Praesent vitae lorem et elit tincidunt accumsan suscipit eu
                                    libero. Maecenas diam est, venenatis vitae dui in, vestibulum
                                    mollis arcu. Donec eu nibh tincidunt, dapibus sem eu, aliquam
                                    dolor. Cum sociis natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Vestibulum consectetur commodo
                                    eros, vitae laoreet lectus aliq
                                </p>
                                <div className="social_box">
                                <a href="">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                            </div>
                            <div className="w-40 spes">
                                <h2 className="info-h2">
                                    Contact Us
                                </h2>
                                <p className="second-p">
                                    <span>
                                        Location
                                    </span>
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-20">
                        <h2 className="info-h2">
                            SIGN UP TO OUR NEWSLETTER
                        </h2>
                        <form action="">
                            <input type="text" placeholder="Enter Your Email" />
                            <button type="submit" className="second-p">
                            Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </footer>
    )
}