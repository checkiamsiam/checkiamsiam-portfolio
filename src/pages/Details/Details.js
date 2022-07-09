import React, { memo, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActiveNavContext } from '../../App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Details.css'
import '../Home/Banner/Banner.css'
import Slider from 'react-slick';
import { AiOutlineLink } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const ProjectDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { route } = useParams();
  const { projects } = useContext(ActiveNavContext)
  const thisProject = projects.find(product => product.detailsRoute === route)

  const settings = {
    className: "container mx-auto my-10 ",
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
          className: " mx-5 mb-20 sm:mt-5 ",
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className='sm:mt-24 mt-20 '>
      <h1 className=' text-center mb-9 sm:mb-0 '><span className='text-accent text-4xl title-font details-title relative z-30'>{thisProject?.name}</span></h1>
      <p className='md:w-3/4 px-5 pb-5 sm:pt-5 mx-auto text-base-100 text-center font-semibold text-lg'>{thisProject?.description}</p>
      <section>
        <Slider {...settings}>
          {
            thisProject?.img?.map((item, index) =>
              <div key={index} >
                <img src={item} alt="" className={index === currentSlide ? 'slider-img active-slider' : 'slider-img'} />
              </div>)
          }

        </Slider>
      </section>
      <section className='container mx-auto text-base-100 px-5 mt-20'>
       { thisProject?.specialty && <div>
          <h1 className='font-extrabold text-3xl mb-3'>Key Features :</h1>
          <ol className='list-disc grid sm:grid-cols-2 grid-cols-1 px-5 mb-10 sm:text-xl '>
            {thisProject?.specialty?.map(feature => <li>{feature}</li>)}
          </ol>
        </div>}
        <div>
          <h1 className='font-extrabold text-3xl mb-3'>Used Technology :</h1>
          <ol className='list-disc grid sm:grid-cols-2 grid-cols-1 px-5 sm:text-xl mb-10'>
            {thisProject?.technologyUsed?.map(feature => <li>{feature}</li>)}
          </ol>
        </div>
        <div>
          <h1 className='font-extrabold text-3xl mb-2'>Checkout :</h1>
          <div className='flex flex-wrap justify-center sm:justify-start'>
            <a target='_blank' class="dedcription-btn btn" href={thisProject?.liveLink}>
              <span class="name-descripeion">Live Link</span>
              <AiOutlineLink class="btn-icon" />
            </a>
            <a target='_blank' class="dedcription-btn btn" href={thisProject?.gitRepoClient}>
              <span class="name-descripeion">Frontend Code</span>
              <AiFillGithub class="btn-icon" />
            </a>
            {thisProject?.gitRepoServer && <a target='_blank' class="dedcription-btn btn" href={thisProject?.gitRepoServer}>
              <span class="name-descripeion">Backend Code</span>
              <AiFillGithub class="btn-icon" />
            </a>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(ProjectDetail);