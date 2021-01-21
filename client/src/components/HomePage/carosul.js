import React from 'react';
import ReactDOM from 'react-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "./style.css"
const options = {
    items: 4,
};
class CarosulProducts extends React.Component{
  render()
  {
    return (
    <OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    nav
>
     
<div class="item">
<img alt="img1" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/b8b0a094de514b72b84eac31018a659b_9366/LNY_Hoodie_Purple_GN5448_21_model.jpg"/></div>
<div class="item">
<img alt="img1" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/927e8721d07f4b64b647ac9a0124f3d2_9366/Tiro_21_LNY_Warm_Jacket_Black_GT6651_21_model.jpg"/></div>
<div class="item">
<img alt="img1" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ced1a76afc7e453daab4ac32000742a4_9366/LNY_Hoodie_Black_GP1865_21_model.jpg"/></div>
<div class="item">
<img alt="img1" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/531e05c078bd476bac24ac3601072554_9366/Ultraboost_DNA_Shoes_Black_GZ7603_04_standard.jpg"/></div>
<div class="item">
<img alt="img1" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/6b4d58e19f314b58ba12ac4d01534fec_9366/Superstar_Shoes_Black_S24184_04_standard.jpg"/></div>
<div class="item">
<img alt="img1" src="https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/92bb8c3fe7a947c5b039abeb016fe6a6_9366/Terrex_Camo_RAIN.RDY_Jacket_Purple_FT9917_21_model.jpg"/></div>

</OwlCarousel>
    )
  }
}

ReactDOM.render(<CarosulProducts />, document.getElementById('root'));
export default CarosulProducts