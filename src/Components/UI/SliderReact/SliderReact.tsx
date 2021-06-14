import Slider, { Settings as SlickOptions } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderReact.scss";

export const SliderReact = () => {
  const settings: SlickOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true
  };

  return (
    <div className="slider">
    <script src="./Slider.js"></script>
    <script src="./adaptiv-slider.js"></script>
    <div className="slider__wrapper">
      <div className="slider__items">
        <div className="slider__item">
          <div><img src="/app/Images/ThirdSlide.jpg" alt="" /></div>
        </div>
        <div className="slider__item">
          <div><img src="/app/Images/ThirdSlide.jpg" alt="" /></div>
        </div>
        <div className="slider__item">
          <div><img src="/app/Images/ThirdSlide.jpg" alt="" /></div>
        </div>
        <div className="slider__item">
          <div><img src="/app/Images/ThirdSlide.jpg" alt="" /></div>
        </div>
      </div>
    </div>
    <a className="slider__control slider__control_prev" href="#" role="button" data-slide="prev"></a>
    <a className="slider__control slider__control_next" href="#" role="button" data-slide="next"></a>
  </div>
  );
}