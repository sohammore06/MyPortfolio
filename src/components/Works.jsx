import React, { useState } from "react";
// import Tilt from "react-tilt";
import Tilt from "react-parallax-tilt";
import Modal from "react-modal"; 
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Carousel settings for react-slick
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Sample carousel images
  const carouselImages = [
    "src/assets/carousel/design3.png",
    "src/assets/carousel/design1.png",
    "src/assets/carousel/design2.png",
    "src/assets/carousel/design4.png",
    "src/assets/carousel/design5.png",
    "src/assets/carousel/design6.png",
    "src/assets/carousel/design1.png",
  ];

  const getModalStyles = () => {
    const isSmallScreen = window.innerWidth <= 768;
    return {
      content: {
        maxWidth: isSmallScreen ? "95%" : "60%", // Wider on small screens
        width: isSmallScreen ? "95%" : "60%",
        height: isSmallScreen ? "95%" : "50%", // Taller on small screens
        margin: "auto",
        padding: "1px",
        borderRadius: "5%",
      },
    };
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

      {/* Modal Implementation */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Factech Vendor Details"
        overlayClassName="modal-overlay"
        style={getModalStyles()}
      >
        <div className="modal-content">
          <button onClick={closeModal} className="close-btn">
            <AiOutlineClose size={24} />
          </button>
          <h2 className="text-center mt-3">Design prototype</h2>

          {/* Carousel Implementation */}
          <Slider {...carouselSettings} className="mt-5">
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Modal>

      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]" onClick={() => index === 0 && openModal()}>
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                if (index === 0) {
                  openModal(); // Call the modal opening function
                } else {
                  window.open(source_code_link, "_blank"); // Open the source code link
                }
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <div
            className={`mt-2 text-secondary text-[14px] ${
              isExpanded ? "" : "line-clamp-3"
            }`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <button
            onClick={toggleExpand}
            className="text-white mt-2 text-[14px] font-bold cursor-pointer"
          >
            {isExpanded ? "Read Less ↑" : "Read More ↓"}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {

  return (
    <>
      {/* Works Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="cursor-pointer"
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
