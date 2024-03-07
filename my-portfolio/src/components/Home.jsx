/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {ReactTyped} from 'react-typed'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
        <p className='text-pink-600 font-anta text-xl'>Hi, my name is</p>
        <h1  className='text-4xl sm:text-5xl font-bold font-anta text-[#ccd6f6]'>
          MOHAMMED TAWFIQ IDDRISU
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold font-anta text-[#8892b0]'>
        <ReactTyped
          strings = {[
            "I am a React Developer",
            "I am a Django Developer",
            "I am a Full Stack Developer",
          ]}
          typeSpeed={100}
          backSpeed={50}
        />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] font-anta'>
         I am a passionate tech enthusiast and a Full Stack Software Engineer with a strong foundation in various programming languages and web development frameworks.
         My skills and experience enable me to create robust and user-friendly applications that meet clients' needs effectively.

        </p>
        <div>
          <Link to='work' smooth={true} duration={500} data-aos="fade-right" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 w-40 cursor-pointer'>
            My Works
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
