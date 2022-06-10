import React from 'react'
import {RiComputerLine} from 'react-icons/ri'
const index = () => {
 
  return (
    <div className='flex flex-col px-6 pt-1 flex-grow'>
      <h4 className='my-3 font-medium'>I am a front-end web developer. I love to use my creativity and make something new. That's why I love to work with React.js. Over the last year, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly.</h4>
      <div className='p-4 mt-5 bg-gray-400 flex-grow dark:bg-slate-700' style={{marginLeft:"-1.5rem",marginRight:"-1.5rem"}}>
        <h4 className='my-3 text-xl font-bold tracking-wide border-b-4 text-white inline-block border-green'>What I do</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gray-200 p-2 space-x-4 rounded-md dark:bg-dark-200'>
          <RiComputerLine className="w-12 h-12 mx-auto text-green"></RiComputerLine>
            <div className=''>
            <h2 className='font-bold'>Web Development</h2>
            <p>You'll get complete coding website. Such as Travalling, Business, Agency, E-comerce, Portfolio, Manufature website etc.</p>
            </div>
          </div>
          <div className='bg-gray-200 p-2 space-x-4 rounded-md dark:bg-dark-200'>
          <RiComputerLine className="w-12 h-12 mx-auto text-green"></RiComputerLine>
            <div className=''>
            <h2 className='font-bold'>Web Development</h2>
            <p>You'll get complete coding website. Such as Travalling, Business, Agency, E-comerce, Portfolio, Manufature website etc.</p>
            </div>
          </div>
          <div className='bg-gray-200 p-2 space-x-4 rounded-md dark:bg-dark-200'>
          <RiComputerLine className="w-12 h-12 mx-auto text-green"></RiComputerLine>
            <div className=''>
            <h2 className='font-bold'>Web Development</h2>
            <p>You'll get complete coding website. Such as Travalling, Business, Agency, E-comerce, Portfolio, Manufature website etc.</p>
            </div>
          </div>
          <div className='bg-gray-200 p-2 space-x-4 rounded-md dark:bg-dark-200'>
          <RiComputerLine className="w-12 h-12 mx-auto text-green"></RiComputerLine>
            <div className=''>
            <h2 className='font-bold'>Web Development</h2>
            <p>You'll get complete coding website. Such as Travalling, Business, Agency, E-comerce, Portfolio, Manufature website etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
