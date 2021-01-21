import React from 'react'
import "./style.css";







const Footer = () => {
    return (
        <footer>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-sb-30">
                        <h3>BODY SPORT</h3>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-sb-30">
                        <h2 className="bodyColor"> Body Sport</h2>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">MEMBERS</a></li>
                        <li><a href="#">CONTACT</a></li>
                        </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 segment-three sm-sb-30">
                                <h2>Follow us</h2>
                                <p>Please follow us on our Social media profile in order to
                                    keep updated.</p>
                               <a href="#"><i className="fa fa-facebook"></i></a>
                               <a href="#"><i className="fa fa-twitter"></i></a>
                               <a href="#"><i className="fa fa-linkedin"></i></a>
                               <a href="#"><i className="fa fa-instagram"></i></a>
            
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 segment-four sm-sb-30">
                            <h2>Our NewsLetter</h2>
                            <form action="">
                                <input type="email"></input>
                                <input type="submit" value="Subscribe"></input>

                            </form>
                </div>
                </div>
            </div>  
        </div>
        <p className="footer-bottom-text"> All Right reserved by © BODY SPORT.2021 </p>
        </footer>
    )
}

export default Footer

