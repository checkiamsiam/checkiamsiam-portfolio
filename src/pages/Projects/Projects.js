import React, { useContext, useState } from 'react';
import { ActiveNavContext } from '../../App';
import './project.css'

const Projects = () => {
  const [activeCategory , setActiveCategory] = useContext(ActiveNavContext);
  const handleAllProjectNav = () => {
    setActiveCategory('all')
  }
  const handleFeaturedProjectNav = () => {
    setActiveCategory('feature')
  }
  const handleOrgProjectNav = () => {
    setActiveCategory('Org')
  }
  const handlePersonalProjectNav = () => {
    setActiveCategory('personal')
  }
  const handleSocialProjectNav = () => {
    setActiveCategory('social')
  }
  return (
    <div className='pt-24 pb-5 min-h-screen'>
      <div className='container  mx-auto text-base-100 px-5 '>
        <h1 className=' text-center sm:mb-10 mb-5 '><span className='text-accent text-4xl title-font project-title relative z-30'>My Projects</span></h1>
        <p className='text-center italic text-primary'>All Of My Projects Showcased here</p>
        <div className='flex justify-center sm:mt-10 mt-5'>
          <div>
            <button onClick={handleAllProjectNav} class={`p-2 md:text-xl text-xs uppercase text-base-100 border-b-2  ${activeCategory === 'all' ? 'border-primary ' : 'border-neutral'}`}>All</button>
            <button onClick={handleFeaturedProjectNav} class={`p-2 md:text-xl text-xs uppercase text-base-100 border-b-2 ${activeCategory === 'feature' ? 'border-primary' : 'border-neutral'}`}>Featured</button>
            <button onClick={handleOrgProjectNav} class={`p-2 md:text-xl text-xs uppercase text-base-100 border-b-2 ${activeCategory === 'Org' ? 'border-primary' : 'border-neutral'}`}>Org.</button>
            <button onClick={handlePersonalProjectNav} class={`p-2 md:text-xl text-xs uppercase text-base-100 border-b-2 ${activeCategory === 'personal' ? 'border-primary' : 'border-neutral'}`}>Personal</button>
            <button onClick={handleSocialProjectNav} class={`p-2 md:text-xl text-xs uppercase text-base-100 border-b-2 ${activeCategory === 'social' ? 'border-primary' : 'border-neutral'}`}>Social</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Projects;