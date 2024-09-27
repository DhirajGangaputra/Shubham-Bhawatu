import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import RadhaTulsiMala from '../../images/Radha_Tulsi_mala.jpg';
import Rudraksha from '../../images/rudraksha.jpg';
import ProfileImg from '../../images/profile-img.png';
import MainContentImg from '../../images/main-content-img.jpg';
import RudrakshaLogo from '../../images/rudraksha-logo.jpg';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container" style={{ width: '100%',  height:'450px', /*border: '5px solid black',*/ padding:'20px'}}>
      <Slider {...settings}>
        <div className='carousel-item'>
          <img src={RadhaTulsiMala} alt="Radha Tulsi Mala" style={{  width: '50%', height: '350px'}} />
        </div>
        <div>
          <img src={Rudraksha} alt="Rudraksha" style={{ width: '100%', height: '340px' }} />
        </div>
        <div>
          <img src={ProfileImg} alt="Profile" style={{  width: '50%', height: '350px' }} />
        </div>
        <div>
          <img src={MainContentImg} alt="Main Content" style={{  width: '50%', height: '350px' }} />
        </div>
        <div>
          <img src={RudrakshaLogo} alt="Rudraksha Logo" style={{  width: '50%', height: '350px' }} />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
