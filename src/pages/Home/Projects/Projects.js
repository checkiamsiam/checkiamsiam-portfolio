import React, { useContext, useState , memo, useRef } from 'react';
import { Link } from 'react-router-dom';
import './project.css'
import { featuredProjectOne, featuredProjectTwo, featuredProjectThree } from '../../../FakeData/FeaturedProjects/FeaturedProjects';
import { ActiveNavContext } from '../../../App';
import { serviceOneFrom, serviceOneTo, serviceOneTransition, titleFrom, titleTo, titleTransition } from '../../../hooks/animations';
import { useInView , motion } from 'framer-motion';

const Projects = () => {
  const refSection2 = useRef(null)
  const isInViewSection = useInView(refSection2);
  const { setActiveCategory, setShowing, featured } = useContext(ActiveNavContext);
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  return (
    <div className='py-10 container mx-auto px-5 '>
      <motion.div
        initial={titleFrom}
        animate={isInViewSection && titleTo}
        transition={titleTransition}
        ref={refSection2}
         className='text-accent text-4xl title-font text-center my-10 flex justify-center items-center gap-2'>
        <div className='h-[2px] w-4 bg-primary'></div>
        Featured Projects
        <div className='h-[2px] w-4 bg-primary'></div>
      </motion.div>
      <motion.div 
          initial={serviceOneFrom}
          animate={isInViewSection && serviceOneTo}
          transition={serviceOneTransition}
            className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <div class="p-2 rounded-xl  bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
          <figure onMouseMove={() => setVisible1(true)} onMouseOut={() => setVisible1(false)} class="mx-3 mt-3 cursor-pointer relative">
            <img src={featuredProjectOne.img[0]} alt="Website-overview" class="rounded-xl" />
            {visible1 && <div className='rounded-xl absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] w-full h-full text-neutral-content flex justify-center items-center'>
              <div className='flex gap-3'>
                <a className='custom-btn btn-12' target='_blank' href={featuredProjectOne.liveLink}><span className='bg-neutral'>GO</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Live Preview</span></a>
                <a className='custom-btn btn-12' target='_blank' href={featuredProjectOne.gitRepoClient}><span className='bg-neutral'>See Code</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Git Repo</span></a>
              </div>
            </div>}
          </figure>
          <div class="card-body text-neutral-content">
            <h2 class="card-title text-primary">{featuredProjectOne.name}</h2>
            <p>{featuredProjectOne.description}</p>
            <div className='flex justify-end'>
              <Link to={`projects/${featuredProjectOne.detailsRoute}`} className='link link-hover custom-btn btn btn-ghost text-center'>Details</Link>
            </div>
          </div>
        </div>
        <div class="p-2 rounded-xl bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
          <figure onMouseMove={() => setVisible2(true)} onMouseOut={() => setVisible2(false)} class="mx-3 mt-3 cursor-pointer relative">
            <img src={featuredProjectTwo.img[0]} alt="Website-overview" class="rounded-xl" />
            {visible2 && <div className='rounded-xl absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] w-full h-full text-neutral-content flex justify-center items-center'>
              <div className='flex gap-3'>
                <a className='custom-btn btn-12' target='_blank' href={featuredProjectTwo.liveLink}><span className='bg-neutral'>GO</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Live Preview</span></a>
                <a className='custom-btn btn-12' target='_blank' href={featuredProjectTwo.gitRepoClient}><span className='bg-neutral'>See Code</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Git Repo</span></a>
              </div>
            </div>}
          </figure>
          <div class="card-body text-neutral-content">
            <h2 class="card-title text-primary">{featuredProjectTwo.name}</h2>
            <p>{featuredProjectTwo.description}</p>
            <div className='flex justify-end '>
              <Link to={`projects/${featuredProjectTwo.detailsRoute}`} className='link link-hover custom-btn btn btn-ghost text-center'>Details</Link>
            </div>
          </div>
        </div>
        <div class="p-2 rounded-xl  bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300 ">
          <figure onMouseMove={() => setVisible3(true)} onMouseOut={() => setVisible3(false)} class="mx-3 mt-3 cursor-pointer relative">
            <img src={featuredProjectThree.img[0]} alt="Website-overview" class="rounded-xl" />
            {visible3 && <div className='rounded-xl absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] w-full h-full text-neutral-content flex justify-center items-center'>
              <div className='flex gap-3'>
                <a className='custom-btn btn-12' target='_blank' href={featuredProjectThree.liveLink}><span className='bg-neutral'>GO</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Live Preview</span></a>
                <a className='custom-btn btn-12' target='_blank' href={featuredProjectThree.gitRepoClient}><span className='bg-neutral'>See Code</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Git Repo</span></a>
              </div>
            </div>}
          </figure>
          <div class="card-body text-neutral-content">
            <h2 class="card-title text-primary">{featuredProjectThree.name}</h2>
            <p>{featuredProjectThree.description}</p>
            <div className='flex justify-end'>
              <Link to={`projects/${featuredProjectThree.detailsRoute}`} className='link link-hover custom-btn btn btn-ghost text-center'>Details</Link>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='flex justify-center'>
        <Link onClick={() => {
          setActiveCategory('feature')
          setShowing(featured)
        }} className='custom-btn m-5 btn btn-ghost' to='/projects'>See More</Link>
      </div>
    </div>
  );
};

export default memo(Projects);