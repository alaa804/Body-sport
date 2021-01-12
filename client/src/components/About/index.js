import React from 'react'
import Line from "./line.jpg"


const About = () => {
    return (
        <main className="background">
         <section className="body1">
            <div className = "imageAboutUs"></div>
            <div className = "content2">
                <h1>About Us</h1>
                <img src={Line} className="line" alt="" />
                <p className="paragraphe">Our culture is shaped by our core belief ’Through sport, we have the power to change live​s’.

We foster our athlete’s mindset through a set of behaviors that are at the core of our winning company culture – the 3Cs:</p>
                <ul className = "links">
                    <li><a href = "#">History</a></li>

                    <div className = "vertical-line"></div>

                    <li><a href = "#">service</a></li>

                    <div className = "vertical-line"></div>
                    
                    <li><a href = "#">contact</a></li>
                </ul>


                <ul className = "icons1">
                    <li>
                        <i className = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i className = "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i className = "fa fa-instagram"></i>
                    </li>
                    <li>
                        <i className = "fa fa-pinterest"></i>
                    </li>
                </ul>
                </div>
    
            </section>
            </main>
    
    )
}

export default About
