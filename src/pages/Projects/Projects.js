import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActiveNavContext } from '../../App';
import './project.css'

const Projects = () => {
  const { activeCategory, setActiveCategory, projects, showing, setShowing, featured } = useContext(ActiveNavContext);
  const org = projects.filter(project => project.category === 'org')
  const personal = projects.filter(project => project.category === 'personal')
  const social = projects.filter(project => project.category === 'social')
  const handleAllProjectNav = () => {
    setActiveCategory('all')
    setShowing(projects)
  }
  const handleFeaturedProjectNav = () => {
    setActiveCategory('feature')
    setShowing(featured)
  }
  const handleOrgProjectNav = () => {
    setActiveCategory('Org')
    setShowing(org)
  }
  const handlePersonalProjectNav = () => {
    setActiveCategory('personal')
    setShowing(personal)
  }
  const handleSocialProjectNav = () => {
    setActiveCategory('social')
    setShowing(social)
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
        <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10'>
          {showing.map(project =>
            <div>
              <div class="card  bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
                <figure class="mx-3 mt-3 cursor-pointer">
                  <img src={project.img} alt="Bycycle-site" class="rounded-xl md:h-52" />

                </figure>
                <div class="card-body text-base-100">
                  <h2 class="card-title text-primary">{project.name}</h2>
                  <div className='text-right '>
                    <Link to={`project/${project.detailsRoute}`} className='link link-hover custom-btn text-center'>Details</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;