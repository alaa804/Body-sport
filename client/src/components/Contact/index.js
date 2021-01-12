import React from 'react'
import "./style.css"
import shape from "./imags/shape.png"
import location from "./imags/location.png"
import email from "./imags/email.png"
import phone from "./imags/phone.png"



const  Conatct = () => {
    return (
        <div class="container1">
        <span class="big-circle"></span>
        <img src={shape}className="square" alt="" />
        <div class="form">
          <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Body Sport it's time to shop
          </p>
          
          <div class="info">
            <div class="information">
            <img src={location} className="icon" alt="" />
              <p> rue rbat nabeul, tn 8000</p>
            </div>
            <div class="information">
            <img src={email}className="icon" alt="" />
              <p>BodySport@gmail.com</p>
            </div>
            <div class="information">
            <img src={phone} className="icon" alt="" />
              <p>72-526-874</p>
            </div>
          </div>
          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          </div>
          <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>


          <form>
            <h5 class="title">Contact us</h5>
            <div class="input-container focus">
              <input  type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
              
            </div>
            <div class="input-container focus">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
              
            </div>
            <div class="input-container focus">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
              
            </div>
            <div class="input-container textarea focus">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            
            <button className="btn1"> Send </button>
           
            </form>
          </div>

         
  
              
                
              
                
              
                
             
  
           
              
  
         
    
    </div>
    </div> 
    )
}

export default  Conatct
