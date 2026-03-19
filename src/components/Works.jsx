import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { FiExternalLink } from "react-icons/fi";

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

  const toggleExpand = () => setIsExpanded((v) => !v);

  const openProjectLink = (e) => {
    e?.stopPropagation?.();
    if (source_code_link) {
      window.open(source_code_link, "_blank", "noopener,noreferrer");
    }
  };

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
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link ? (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <button
                type="button"
                onClick={openProjectLink}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-0 text-white"
                aria-label={`Open ${name} — live site or repository`}
              >
                {source_code_link.includes("github.com") ? (
                  <img
                    src={github}
                    alt=""
                    className="w-1/2 h-1/2 object-contain"
                  />
                ) : (
                  <FiExternalLink className="w-5 h-5 text-secondary" aria-hidden />
                )}
              </button>
            </div>
          ) : null}
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
            type="button"
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
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div key={`project-${project.name}-${index}`} className="cursor-pointer">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
