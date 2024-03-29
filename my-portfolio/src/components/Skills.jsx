/* eslint-disable react/no-unescaped-entities */

import { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Django from '../assets/django-logo-negative.png';
import MYSQL from '../assets/logo-mysql.png';
import Python from '../assets/python-logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 font-anta'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div data-aos="flip-left">
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
              <p className='py-4'>I'm proficient in the following technologies </p>
          </div>

          <div data-aos="fade-up" className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-44 mx-auto' src={Django} alt="HTML icon" />
                  <p className='my-4'>DJANGO</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 border border-pink-600 pt-4'>
                  <img className='w-32 mx-auto' src={MYSQL} alt="HTML icon" />
                  <p className='my-4'>MYSQL</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
