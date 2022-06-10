import React from 'react';
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsFillBootstrapFill,BsFillCircleFill} from 'react-icons/bs'
import {SiTailwindcss,SiExpress,SiMongodb} from 'react-icons/si'
import {RiReactjsLine} from 'react-icons/ri'
import {IoLogoNodejs} from 'react-icons/io'

const Resume = () => {
    return (
        <div className='px-6 py-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <h4 className='my-3 text-2xl md:text-3xl font-bold'>Education</h4>
                    <div>
                        <h4 className='my-2 text-xl font-bold'>National University, Bangladesh</h4>
                        <h5 className='font-semibold'>BBA honours 1st year (at present 2022)</h5>
                        <h4 className='my-2 text-xl font-bold'>Siddheswari College,Dhaka</h4>
                        <h5 className='font-semibold'>HSC (2018-2020)</h5>
                    </div>
                </div>
                <div>
                    <h4 className='my-3 text-2xl md:text-3xl font-bold'>Professional Training</h4>
                    <div>
                        <h4 className='my-2 text-xl font-bold'>Complete web development with jhankar mahbub</h4>
                        <h5 className='font-semibold'>Programming Hero (Jan 22 to May 22)</h5>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'> Language & Frameworks</h5>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"90%"}}>
                           <AiFillHtml5 className="mr-3"></AiFillHtml5>
                           HTML
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"80%"}}>
                           <DiCss3 className="mr-3"></DiCss3>
                           CSS
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"70%"}}>
                           <BsFillBootstrapFill className="mr-3"></BsFillBootstrapFill>
                           Bootstrap
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"80%"}}>
                           <SiTailwindcss className="mr-3"></SiTailwindcss>
                           Tailwind CSS
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"60%"}}>
                           <TbBrandJavascript className="mr-3"></TbBrandJavascript>
                           JavaScript/ES6
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"80%"}}>
                           <RiReactjsLine className="mr-3"></RiReactjsLine>
                           React.Js
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"30%"}}>
                           <IoLogoNodejs className="mr-3"></IoLogoNodejs>
                           Node.Js
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"30%"}}>
                           <SiExpress className="mr-3 w-[18px] h-[18px]"></SiExpress>
                           Express.Js
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"40%"}}>
                           <SiMongodb className="mr-3"></SiMongodb>
                           MongoDB
                        </div>
                    </div>
                </div>
                <div>
                <h5 className='my-3 text-2xl font-bold'> Tools & Softwares</h5>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"90%"}}>
                           <BsFillCircleFill className="mr-3"></BsFillCircleFill>
                           VS Code
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"60%"}}>
                           <BsFillCircleFill className="mr-3"></BsFillCircleFill>
                           Git
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"70%"}}>
                           <BsFillCircleFill className="mr-3"></BsFillCircleFill>
                           Github
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"66%"}}>
                           <BsFillCircleFill className="mr-3"></BsFillCircleFill>
                           Netlify
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"50%"}}>
                           <BsFillCircleFill className="mr-3"></BsFillCircleFill>
                           Heroku
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"70%"}}>
                           <BsFillCircleFill className="mr-3"></BsFillCircleFill>
                           Figma
                        </div>
                    </div>
                    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
                        <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-500" style={{width:"50%"}}>
                           <BsFillCircleFill className="mr-3"></BsFillCircleFill>
                           Firebase
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;