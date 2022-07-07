import React, { memo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ActiveNavContext } from '../../App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Details.css'
import Slider from 'react-slick';

const ProjectDetail = () => {
  const { route } = useParams();
  const { projects } = useContext(ActiveNavContext)
  const thisProject = projects.find(product => product.detailsRoute === route)

  const settings = {
    className: "container mx-auto my-20 ",
    dots: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear" , 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className='mt-28'>
      <section>
        <Slider {...settings}>
          {
            thisProject.img.map((item, index) =>
              <div key={index}>
                <img src={item} alt=""/>
              </div>)
          }

        </Slider>
      </section>
    </div>
  );
};

export default memo(ProjectDetail);