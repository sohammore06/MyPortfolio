import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import resume from "../assets/resume.png";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const isDesktop = window.innerWidth > 640;
  return (
    <div className={`mt-10 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} flex items-center justify-between`}
        style={{
          width: "100%",
          height: isDesktop ? "300px" : "200px",
        }}
      >
        <motion.div variants={textVariant()} className="flex-1">
          <h2 className={styles.sectionHeadText}>Resume.</h2>
        </motion.div>
        {!isDesktop && (
          <img
            src={resume}
            alt="Resume Icon"
            className="w-12 h-12 mt-0"
          />
        )}
      </div>

      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col items-center gap-7`}
      >
        {/* Render the resume preview only for desktop */}
        {isDesktop && (
          <iframe
            src="https://drive.google.com/file/d/192I4qBFxEw7XEHE8BBGJV_JgXIsaWCbO/preview"
            style={{
              width: "100%",
              height: "600px",
            }}
            frameBorder="0"
          ></iframe>
        )}

        {/* Download button */}
        <a
          href="https://drive.google.com/uc?export=download&id=192I4qBFxEw7XEHE8BBGJV_JgXIsaWCbO"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 py-2 rounded-md mt-4 border"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};


export default SectionWrapper(Feedbacks, "resume");
