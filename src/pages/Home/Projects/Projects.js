import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './project.css'

const Projects = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  return (
    <div className='py-10 container mx-auto px-5 '>
      <h1 className='text-accent text-4xl title-font text-center mb-5'>Featured Projects</h1>
      <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <div class="card  bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
          <figure onMouseMove={() => setVisible1(true)} onMouseOut={() => setVisible1(false)} class="mx-3 mt-3 cursor-pointer relative">
            <img src="https://i.ibb.co/HXDMNfd/bycycle-soul-min.png" alt="Bycycle-site" class="rounded-xl" />
            {visible1 && <div className='rounded-xl absolute bg-[rgba(0,0,0,0.7)] w-full h-full text-base-100 flex justify-center items-center'>
              <div className='flex gap-3'>
                <a className='custom-btn btn-12' target='_blank' href="https://bycycle-soul---manufacturing.web.app/"><span className='bg-neutral'>GO</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Live Preview</span></a>
                <a className='custom-btn btn-12' target='_blank' href="https://github.com/checkiamsiam/bycycle-soul-manufacturing"><span className='bg-neutral'>See Code</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Git Repo</span></a>
              </div>
            </div>}
          </figure>
          <div class="card-body text-base-100">
            <h2 class="card-title text-primary">ByCycle Soul</h2>
            <p>A website for bycycle Parts manufacturer company build by react JS. Server side was built by express JS.</p>
          </div>
        </div>
        <div class="card  bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
          <figure onMouseMove={() => setVisible2(true)} onMouseOut={() => setVisible2(false)} class="mx-3 mt-3 cursor-pointer relative">
            <img src="https://i.ibb.co/rtj5K2M/health-cure-min.png" alt="doctors-portal" class="rounded-xl" />
            {visible2 && <div className='rounded-xl absolute bg-[rgba(0,0,0,0.7)] w-full h-full text-base-100 flex justify-center items-center'>
              <div className='flex gap-3'>
                <a className='custom-btn btn-12' target='_blank' href="https://health-cure-doctor-s-portal.web.app/"><span className='bg-neutral'>GO</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Live Preview</span></a>
                <a className='custom-btn btn-12' target='_blank' href="zzhttps://github.com/checkiamsiam/doctor-s-health-cure-project"><span className='bg-neutral'>See Code</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Git Repo</span></a>
              </div>
            </div>}
          </figure>
          <div class="card-body text-base-100">
            <h2 class="card-title text-primary">Health Cure</h2>
            <p>A website for Booking doctor's appointment online. it built by react JS. and Server side was built by express JS.</p>
          </div>
        </div>
        <div class="card bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300">
          <figure onMouseMove={() => setVisible3(true)} onMouseOut={() => setVisible3(false)} class="mx-3 mt-3 cursor-pointer relative">
            <img src="https://i.ibb.co/Ct2Sv0y/phone-factor.png" alt="inventory-web" class="rounded-xl" />
            {visible3 && <div className='rounded-xl absolute bg-[rgba(0,0,0,0.7)] w-full h-full text-base-100 flex justify-center items-center'>
              <div className='flex gap-3'>
              <a className='custom-btn btn-12' target='_blank' href="https://phone-factor.web.app/"><span className='bg-neutral'>GO</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Live Preview</span></a>
                <a className='custom-btn btn-12' target='_blank' href="https://github.com/checkiamsiam/phone-factory-a-warehouse-or-inventory-web"><span className='bg-neutral'>See Code</span><span className='bg-gradient-to-r from-primary via-orange-300 to-secondary'>Git Repo</span></a>
              </div>
            </div>}
          </figure>
          <div class="card-body text-base-100">
            <h2 class="card-title text-primary">Phone Factor</h2>
            <p>A Inventory or Factory Products Management website build by React Js. server side was built by express JS.</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Link className='custom-btn m-5' to='/projects'>See More</Link>
      </div>
    </div>
  );
};

export default Projects;