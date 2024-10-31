import React from "react";
import { styles } from "./../styles";
import ComputersCanvas from "./canvas/Computers";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 style={{ opacity: 0.5 }}`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5CB8E4]" />
          <div
              className="w-1 sm:h-80 h-40"
              style={{
             background: 'linear-gradient(to bottom, #5CB8E4, transparent)'
  }}
/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#5CB8E4]">Shiv</span>
          </h1>
          <p className={`${styles.heroSubText} text-white`}>
            Software Developer with expertise <br className="sm:block hidden" />
            in React-Native, dedicated to <br className="sm:block hidden" />
            creating immersive and innovative <br className="sm:block hidden" />
            digital experiences.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#5CB8E4] flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-[#5CB8E4] mb-1'
          />
        </div>
      </a>
    </div>
    </section>
  );
};

export default Hero;

