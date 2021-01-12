import React from 'react'


import Footer from "../Footer/index"
import slide1 from './images/slide-2.jpg';
import slide2 from './images/slide-3.jpg';
import text1 from './images/just-run.png';
import text2 from './images/limit.png';
import img1 from './images/best.jpg'
import img2 from './images/arrival.jpg'
import img3 from './images/line.jpg'
import img4 from './images/9.jpg'
import img5 from './images/10.jpg'
import img6 from './images/11.jpg'
import img7 from './images/app-store.png'

import {Carousel} from 'react-bootstrap'
import "./style.css"
import CarosulProducts from './carosul'


import NavBar from '../NavBar/index'




function HOME() {
    return (
    <div>
        
        <NavBar/>

        
        
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
    <img
      className="font1"
      src={text2}
      alt="First text"
    />
      <h3>YOUR PRODUCT AND SHOP IT </h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Third slide"
    />

    <Carousel.Caption>
    <img
      className="font2"
      src={text1} 
      alt="Second text"
    />
    <div className="font3">
      <h3>RUN FAST, RUN SLOW </h3>
      <h3 >RUN FAR, RUN CLOSE </h3>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="image">
<img 
      
      src={img1} 
      alt="First image"/>
    <img 
     
      src={img2} 
      alt="Second image"
    />


    </div>
    <div className="cont"> 
      <div className="arrivals">
          <h3>SHOP NEW ARRIVALS</h3>
          <button type="button" class="btn btn-warning">Shop</button>
          </div>
          <div className="bestsellers">
      <h3>SHOP NEW BESTSELLERS</h3> 
      <button type="button" class="btn btn-dark">Shop</button>
      </div>  
      </div>
      <div className="newar">
        <h2 className="newarfont"> NEW ARRIVALS</h2>
        <img
      className="font4"
      src={img3}
      alt="line badge"
    />
</div>
      <CarosulProducts/>


<div className="information">
<img  src={img4} 
      alt="image1"/>
      <img  src={img5} 
      alt="image2"/>
      <img  src={img6} 
      alt="image3"/>
      </div>


<div class="cmsmasters_heading_wrap">
<h2 class="cmsmasters_heading">High Performence. High
 Style </h2>

<br>
</br>
<span style={{color: "white" , fontSize : "22px" , fontStyle: "italic" , marginLeft:"50px"}}>Get the discount OF 20%</span>
</div>


<div class="featured_block_inner">
<h2 class="cmsmasters_heading">FIND MORE INFORMATION </h2>

<br>
</br>
<span style={{color: "white" , fontSize : "22px" , fontStyle: "italic" , marginLeft:"10px"}}>Download Mobile Apps</span>
<br>
</br>
<img src={img7} alt="badge"/>
</div>



<div  class="featured_block_inner1">
	<h3 class="cmsmasters_heading2">special offer</h3>
  <div  class="mini_block_inner">
  <h2 class="cmsmasters_heading1">SAVE 25% </h2>
  </div>
 
<span style={{color: "white" , fontSize : "22px" , fontStyle: "italic" , marginRight:"15px"}}
>Home Gym Equipment</span>

</div>


 <Footer />     
     










</div>

    )
}

export default HOME




