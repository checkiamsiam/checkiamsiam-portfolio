import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './project.css'
import { featuredProjectOne as project, featuredProjectTwo, featuredProjectThree } from '../../../FakeData/FeaturedProjects/FeaturedProjects';

const Projects = () => {
  const featuredProjects = [project, featuredProjectTwo, featuredProjectThree]
  const [visible, setVisible] = useState(false)
  return (
    <div className='py-10 container mx-auto px-5 '>
      <h1 className='text-accent text-4xl title-font text-center mb-5'>Featured Projects</h1>
      <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
       {featuredProjects.map((project , index) =>  <div key={index} class="card  bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
          <figure onMouseMove={() => setVisible(true)} onMouseOut={() => setVisible(false)} class="mx-3 mt-3 cursor-pointer relative">
            <img src={project.img} alt="Bycycle-site" class="rounded-xl" />
            {visible && <div className='rounded-xl absolute bg-[rgba(0,0,0,0.7)] w-full h-full text-base-100 flex justify-center items-center'>
              <div className='flex gap-3'>
                <a className='custom-btn btn-12' target='_blank' href={project.liveLink}><span className='bg-neutral'>GO</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Live Preview</span></a>
                <a className='custom-btn btn-12' target='_blank' href={project.gitRepo}><span className='bg-neutral'>See Code</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Git Repo</span></a>
              </div>
            </div>}
          </figure>
          <div class="card-body text-base-100">
            <h2 class="card-title text-primary">{project.name}</h2>
            <p>{project.discription}</p>
            <div className='text-right '>
              <Link to='' className='link link-hover custom-btn text-center'>Details</Link>
            </div>
          </div>
        </div>)}
      </div>
      <div className='flex justify-center'>
        <Link className='custom-btn m-5' to='/projects'>See More</Link>
      </div>
    </div>
  );
};

export default Projects;