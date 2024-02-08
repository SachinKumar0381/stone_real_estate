import React from 'react';
import Slider from 'react-slick';

const ImageSlider = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
      };
    
      return (
        <Slider {...settings} className="background-slider">
          {images.map((image, index) => (
            <div key={index} className="background-slide">
              <img src={image} alt={`Slide ${index + 1}`}  style={{width:"100%",maxHeight:"500px",objectFit:"cover"}}/>
            </div>
          ))}
        </Slider>
      );
    };


export default ImageSlider