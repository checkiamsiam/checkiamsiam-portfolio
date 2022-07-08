import React, { useContext, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ActiveNavContext } from '../../App';
import { Helmet } from "react-helmet-async";
import './project.css'
import '../Home/Projects/project.css'

const Projects = () => {
  const { activeCategory, setActiveCategory, projects, showing, setShowing, featured } = useContext(ActiveNavContext);
  const [showAll, setShowAll] = useState(false)
  const org = projects.filter(project => project.category === 'org')
  const personal = projects.filter(project => project.category === 'personal')
  const social = projects.filter(project => project.category === 'social')
  const handleAllProjectNav = () => {
    setActiveCategory('all')
    setShowing(projects)
    setShowAll(false)
  }
  const handleFeaturedProjectNav = () => {
    setActiveCategory('feature')
    setShowing(featured)
    setShowAll(false)
  }
  const handleOrgProjectNav = () => {
    setActiveCategory('Org')
    setShowing(org)
    setShowAll(false)
  }
  const handlePersonalProjectNav = () => {
    setActiveCategory('personal')
    setShowing(personal)
    setShowAll(false)
  }
  const handleSocialProjectNav = () => {
    setActiveCategory('social')
    setShowing(social)
    setShowAll(false)
  }
  const goNext = () => {
    setShowAll(!showAll)
    window.scrollTo(0, 0)
    if (activeCategory === 'all') {
      setActiveCategory('feature')
      setShowing(featured)
    }
    if (activeCategory === 'feature') {
      setActiveCategory('Org')
      setShowing(org)
    }
    if (activeCategory === 'org') {
      setActiveCategory('personal')
      setShowing(personal)
    }
    if (activeCategory === 'personal') {
      setActiveCategory('social')
      setShowing(social)
    }
    if (activeCategory === 'social') {
      setActiveCategory('all')
      setShowing(projects)
    }
  }

  return (
    <div className='pt-24 pb-5 min-h-screen'>
      <Helmet>
        <title>Projects - Sheikh Shahariar Siam</title>
      </Helmet>
      <div className='container  mx-auto text-base-100 px-5 '>
        <h1 className=' text-center sm:mb-10 mb-5 '><span className='text-accent text-4xl title-font project-title relative z-30'>My Projects</span></h1>
        <p className='text-center italic text-primary'>All Of My Projects Showcased here</p>
        <div className='flex justify-center sm:mt-10 mt-5'>
          <div>
            <button onClick={handleAllProjectNav} class={`p-2 hover:text-primary transition duration-400 md:text-xl text-xs uppercase text-base-100 border-b-2  ${activeCategory === 'all' ? 'border-primary ' : 'border-neutral'}`}>All</button>
            <button onClick={handleFeaturedProjectNav} class={`p-2 hover:text-primary transition duration-400  md:text-xl text-xs uppercase text-base-100 border-b-2 ${activeCategory === 'feature' ? 'border-primary' : 'border-neutral'}`}>Featured</button>
            <button onClick={handleOrgProjectNav} class={`p-2 hover:text-primary transition duration-400  md:text-xl text-xs uppercase text-base-100 border-b-2 ${activeCategory === 'Org' ? 'border-primary' : 'border-neutral'}`}>Org.</button>
            <button onClick={handlePersonalProjectNav} class={`p-2 hover:text-primary transition duration-400  md:text-xl text-xs uppercase text-base-100 border-b-2 ${activeCategory === 'personal' ? 'border-primary' : 'border-neutral'}`}>Personal</button>
            <button onClick={handleSocialProjectNav} class={`p-2 hover:text-primary transition duration-400  md:text-xl text-xs uppercase text-base-100 border-b-2 ${activeCategory === 'social' ? 'border-primary' : 'border-neutral'}`}>Social</button>
          </div>
        </div>
        {showing.length !== 0 ? <div>
          {!showAll ? <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10'>
            {showing.slice(0, 6).map((project, index) =>
              <div key={index} >
                <div class="p-2 rounded-2xl bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
                  <figure class="mx-3 mt-3 cursor-pointer bg-secondary rounded-xl">
                    <Link to={`${project.detailsRoute}`}>
                      <img src={project.img[0]} alt="Website-overview" class="rounded-xl md:h-52 hover:translate-x-2 hover:-translate-y-2 transition duration-500 cursor-pointer" />
                    </Link>

                  </figure>
                  <div class="card-body text-base-100">
                    <h2 class="card-title text-primary">{project.name}</h2>
                    <div className='flex  gap-3 pb-3'>
                      {project.technologyUsed.slice(0, 3).map((tech, index) => <div key={index} class="badge badge-lg text-accent">{tech.split(" ")[0]}</div>)}
                    </div>
                    <div className='flex justify-end '>
                      <Link to={`${project.detailsRoute}`} className='link link-hover custom-btn btn btn-ghost text-center'>Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div> :
            <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10'>
              {showing.map((project, index) =>
                <div key={index}>
                  <div class="p-2 rounded-xl  bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
                    <figure class="mx-3 mt-3 cursor-pointer bg-secondary rounded-xl">
                      <Link to={`${project.detailsRoute}`}>
                        <img src={project.img[0]} alt="Website-overview" class="rounded-xl md:h-52 hover:translate-x-2 hover:-translate-y-2 transition duration-500 cursor-pointer" />
                      </Link>

                    </figure>
                    <div class="card-body text-base-100">
                      <h2 class="card-title text-primary">{project.name}</h2>
                      <div className='flex gap-3 pb-3'>
                        {project.technologyUsed.slice(0, 3).map((tech, index) => <div key={index} class="badge badge-lg text-accent">{tech.split(" ")[0]}</div>)}
                      </div>
                      <div className='flex justify-end '>
                        <Link to={`${project.detailsRoute}`} className='link link-hover custom-btn btn btn-ghost text-center'>Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>}
        </div> :

          <h1 className='text-error text-6xl text-center py-10'>Empty</h1>

        }
      </div>
      {(!showAll && showing.length !== 0) ? <div className='flex justify-center'>
        <button onClick={() => {
          setShowAll(!showAll)
        }} className='custom-btn m-5 btn btn-ghost'>Show All</button>
      </div> :
        <div className='flex justify-center'>
          <button onClick={goNext} className='custom-btn m-5 btn btn-ghost'>Next</button>
        </div>
      }
    </div>
  );
};

export default memo(Projects);