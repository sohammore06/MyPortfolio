import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from 'three';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import hero from "../assets/hero.jpeg"; 



const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Check on mount
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, Myself <span className='text-[#915EFF]'>Soham More</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full Stack Developer passionate in building and refining web applications,
            with a keen interest in staying ahead of the curve with the latest advancements in <b>AI</b>.
            <br className='sm:block hidden' />
          </p>
        </div>
      </div>

      {isMobile ? (
        <div className='absolute inset-0 flex justify-center items-center'>
          <img src={hero}
            alt='Mobile View Placeholder'
            className='w-80 h-auto mt-[40%]' // Adjust the dimensions as needed
          />
        </div>
      ) : (
        <ComputersCanvas />
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] flex justify-center items-center'>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='text-secondary'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
