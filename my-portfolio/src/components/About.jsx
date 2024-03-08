/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 md:-mt-20 -mt-40'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div data-aos="flip-left" className='sm:text-rightf pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 font-anta'>
              About
            </p>
          </div>
          </div>
          <div data-aos="fade-up" className='max-w-[1000px] w-full px-4'>
            <div>
              <p>
            I am a passionate tech enthusiast and a Full Stack Developer with a strong foundation in various programming languages and web development frameworks. My skills and experience enable me to create robust and user-friendly applications that meet clients' needs effectively.
             In addition to my technical skills, I a a dedicated problem-solver and a team player.
              I am always eager to take on new challenges and learn emerging technologies.
               I thrive in collaborative environments and value open communication to achieve project success.
               If you are looking for a passionate Full Stack Developer who can bring creativity and technical expertise to your team, feel free to reach out. I am excited to contribute my skills and make a positive impact on your projects. Let's connect and explore potential opportunities together
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
