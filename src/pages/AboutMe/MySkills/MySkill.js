import React from 'react';

const MySkill = () => {

  return (
    <div className='py-5 px-5'>
      <h1 className=' text-center   '><span className='text-accent text-4xl title-font relative skills-title z-30'>My Skills</span></h1>
      <h1 className='mb-10 text-base-100 text-center italic'>Here Is My Overview Of Coding Strategy</h1>
    
      <div className='container mx-auto'>

        <div className='sm:block hidden'>
          <div className=' grid grid-cols-3 md:grid-cols-4 gap-12'>


            <div className='flex flex-col items-center justify-center '>
              <div className="radial-progress text-primary border-2  border-[rgba(247,244,244,0.15)]" style={{
                "--value": 90,
                "--thickness": '10px', "--size": '8rem'
              }}>
                90%
              </div>
              <p className='text-base-100 mt-3'>HTML</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className="radial-progress text-primary border-2  border-[rgba(247,244,244,0.15)]" style={{
                "--value": 80,
                "--thickness": '10px', "--size": '8rem'
              }}>
                80%
              </div>
              <p className='text-base-100 mt-3'>CSS</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className="radial-progress text-primary border-2  border-[rgba(247,244,244,0.15)]" style={{
                "--value": 95,
                "--thickness": '10px', "--size": '8rem'
              }}>
                95%
              </div>
              <p className='text-base-100 mt-3'>Bootstrap</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className="radial-progress text-primary border-2  border-[rgba(247,244,244,0.15)]" style={{
                "--value": 85,
                "--thickness": '10px', "--size": '8rem'
              }}>
                85%
              </div>
              <p className='text-base-100 mt-3'>Tailwind</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className="radial-progress text-primary border-2  border-[rgba(247,244,244,0.15)]" style={{
                "--value": 65,
                "--thickness": '10px', "--size": '8rem'
              }}>
                65%
              </div>
              <p className='text-base-100 mt-3'>JavaScript</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className="radial-progress text-primary border-2  border-[rgba(247,244,244,0.15)]" style={{
                "--value": 75,
                "--thickness": '10px', "--size": '8rem'
              }}>
                75%
              </div>
              <p className='text-base-100 mt-3'>React JS</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className="radial-progress text-primary border-2  border-[rgba(247,244,244,0.15)]" style={{
                "--value": 50,
                "--thickness": '10px', "--size": '8rem'
              }}>
                50%
              </div>
              <p className='text-base-100 mt-3'>Express JS</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className="radial-progress text-primary border-2  border-[rgba(247,244,244,0.15)]" style={{
                "--value": 70,
                "--thickness": '10px', "--size": '8rem'
              }}>
                70%
              </div>
              <p className='text-base-100 mt-3 font-semibold '>MongoDB & Firebase</p>
            </div>



          </div>
        </div>
        <div className='sm:hidden block'>
          <div>
            <div className='flex justify-between text-base-100'>
              <h1>HTML</h1>
              <h1>90%</h1>
            </div>
            <progress class="progress progress-primary w-full bg-neutral" value="90" max="100">90%</progress>
          </div>
          <div>
            <div className='flex justify-between text-base-100'>
              <h1>CSS</h1>
              <h1>80%</h1>
            </div>
            <progress class="progress progress-primary w-full bg-neutral" value="80" max="100">90%</progress>
          </div>
          <div>
            <div className='flex justify-between text-base-100'>
              <h1>Bootstrap</h1>
              <h1>95%</h1>
            </div>
            <progress class="progress progress-primary w-full bg-neutral" value="95" max="100">90%</progress>
          </div>
          <div>
            <div className='flex justify-between text-base-100'>
              <h1>Tailwind</h1>
              <h1>85%</h1>
            </div>
            <progress class="progress progress-primary w-full bg-neutral" value="85" max="100">90%</progress>
          </div>
          <div>
            <div className='flex justify-between text-base-100'>
              <h1>Javascript</h1>
              <h1>65%</h1>
            </div>
            <progress class="progress progress-primary w-full bg-neutral" value="90" max="100">90%</progress>
          </div>
          <div>
            <div className='flex justify-between text-base-100'>
              <h1>React JS</h1>
              <h1>75%</h1>
            </div>
            <progress class="progress progress-primary w-full bg-neutral" value="90" max="100">90%</progress>
          </div>
          <div>
            <div className='flex justify-between text-base-100'>
              <h1>Express</h1>
              <h1>50%</h1>
            </div>
            <progress class="progress progress-primary w-full bg-neutral" value="90" max="100">90%</progress>
          </div>
          <div>
            <div className='flex justify-between text-base-100'>
              <h1>Tools	&nbsp;(MongoDB & firebase)</h1>
              <h1>70%</h1>
            </div>
            <progress class="progress progress-primary w-full bg-neutral" value="90" max="100">90%</progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;