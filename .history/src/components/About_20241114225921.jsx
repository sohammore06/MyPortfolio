// Import necessary dependencies
import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import frontendImage from "../assets/frontendimg.gif";
import backendImage from "../assets/backendimg.gif"; 

// New DistortingImage component with animation on isFlipped change
const DistortingImage = ({ src, alt, isFlipped }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("animate-change");
    const timer = setTimeout(() => setAnimationClass(""), 1000);
    return () => clearTimeout(timer);
  }, [isFlipped]);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`distorting-image w-[400px] h-[400px] object-cover transition-all duration-700 ${animationClass}`} // Apply class here
      style={{
        perspective: "1000px",
        clipPath: "inset(0 0 0 0 round 50% 40% 60% 50%)", // Initial blob shape
      }}
    />
  );
};



const ServiceCard = ({ index, title, icon, backendIcon, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => {
      const newFlipped = !prev;
      onFlip(newFlipped);
      return newFlipped;
    });
  };

  return (
    <Tilt className="xs:w-[250px] w-full cursor-pointer">
      <motion.div
        onClick={handleFlip}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ perspective: "1000px" }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
          }}
        >
          {!isFlipped ? (
            <>
              <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </>
          ) : (
            <>
              <img src={backendIcon} alt="backend-development" className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px] font-bold text-center" style={{ transform: "scaleX(-1)" }}>
                Backend Developer
              </h3>
            </>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [flippedStates, setFlippedStates] = useState(services.map(() => false));

  const handleFlip = (index, flipped) => {
    setFlippedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? flipped : state))
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        A dedicated Full-Stack Developer with a strong blend of frontend and backend skills, 
        I excel in creating impactful web applications and optimizing performance. With experience in modern tools like 
        Docker, Django, and ReactJS, I bring both technical depth and a commitment to user-centered design, fostering effective, 
        streamlined solutions across development environments.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            onFlip={(flipped) => handleFlip(index, flipped)}
          />
        ))}

        <div className="right-10 top-1/3 ml-[40%]">
          {flippedStates.some((flipped) => flipped) ? (
            <DistortingImage
              src={backendImage}
              alt="backend-development"
              isFlipped
            />
          ) : (
            <DistortingImage
              src={frontendImage}
              alt="frontend-development"
              isFlipped={false}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
