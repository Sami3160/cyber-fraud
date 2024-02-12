import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './CardBanner.css';

const CardBanner = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
   
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginTop: 25 }}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} style={{ marginTop: 20 }}>
            <div className="card-item" style={{ marginLeft: 10 }}>
              <img
                src={item.image}
                alt={index}
                className="card-image"
              />
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardBanner;