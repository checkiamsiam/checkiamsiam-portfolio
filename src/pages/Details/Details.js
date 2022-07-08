import React, { memo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ActiveNavContext } from '../../App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Details.css'
import Slider from 'react-slick';
import { useState } from 'react';

const ProjectDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { route } = useParams();
  const { projects } = useContext(ActiveNavContext)
  const thisProject = projects.find(product => product.detailsRoute === route)

  const settings = {
    className: "container mx-auto my-20 ",
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScrool: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '300px',
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 780,
        settings: {
          className: " mx-5 mb-20 mt-5",
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className='sm:mt-28 mt-20 '>
      <h1 className=' text-center mb-9 sm:mb-0 '><span className='text-accent text-4xl title-font details-title relative z-30'>{thisProject.name}</span></h1>
      <section>
        <Slider {...settings}>
          {
            thisProject.img.map((item, index) =>
              <div key={index} >
                <img src={item} alt="" className={index === currentSlide ? 'slider-img active-slider' : 'slider-img'} />
              </div>)
          }

        </Slider>
      </section>
    </div>
  );
};

export default memo(ProjectDetail);