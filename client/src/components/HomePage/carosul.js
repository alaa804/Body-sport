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
<img alt="img1" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"/></div>
<div class="item">
<img alt="img1" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"/></div>
<div class="item">
<img alt="img1" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"/></div>
<div class="item">
<img alt="img1" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"/></div>
<div class="item">
<img alt="img1" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"/></div>
<div class="item">
<img alt="img1" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"/></div>

</OwlCarousel>
    )
  }
}

ReactDOM.render(<CarosulProducts />, document.getElementById('root'));
export default CarosulProducts