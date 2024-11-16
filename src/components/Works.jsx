import React, { useState } from "react";
// import Tilt from "react-tilt";
import Tilt from "react-parallax-tilt";
import Modal from "react-modal"; 

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

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Modal Implementation */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Factech Vendor Details"
        overlayClassName="modal-overlay"
        style={{
          content: {
            maxWidth: "60%",
            width: "60%",
            height: "60%",
            margin: "auto",
            borderRadius: "8px",
          },
        }}
      >
        <div className="modal-content">
          <button onClick={closeModal} className="close-btn">
            Close
          </button>
          <h2>Factech Vendor</h2>
          <p>
            Leading the development of a scalable vendor management solution
            from scratch, projected to generate 50K+ monthly revenue per client,
            enhancing invoice and PO management for improved client
            satisfaction.
          </p>
        </div>
      </Modal>

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
            onClick={() => index === 0 && openModal()} // Open Modal only for the first project
          >
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
