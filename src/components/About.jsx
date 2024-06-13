import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { profile } from "../assets";



const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[2px] rounded-[20px] shadow-card'
    >
      <div className='bg-[#181818] rounded-[20px] py-5 px-25 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='mobile-development'
          className='w-25 h-25 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex flex-wrap mt-10'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='text-left w-full md:w-2/3'
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-[#F2F2F2] text-[17px] max-w-3xl leading-[30px] text-justify'
          >
            I'm a software developer with a passion for mobile app development and user experience. I have a Bachelor's degree in Computer Engineering and I'm pursuing a Master's degree in Computer Science at Pace University, where I've completed multiple projects using React Native, JavaScript, SQL, and various technologies.
            
            I co-founded Aero Delivery System (ADS), a startup that aims to revolutionize the delivery industry with drones. I also gained experience working with Ordex Technology Solution and BrainyBeam Technologies as a Flutter developer and a React Native Developer, where I developed and deployed apps for various clients. I'm looking for an internship opportunity where I can apply my skills and learn from a dynamic team. My goal is to grow as a developer and create impactful solutions for end users.
          </motion.p>
        </motion.div>

        <div className='w-full md:w-1/3 flex justify-center items-center'>
          <motion.img
            src={profile}
            alt='Shiv Vyas'
            className=' w-80 h-80 object-cover'
            variants={fadeIn("left", "spring", 0.5, 0.75)}
          />
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

