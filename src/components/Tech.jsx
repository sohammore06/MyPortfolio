import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const isMobile = window.innerWidth <= 768;
  const firstSixTechnologies = technologies.slice(0, 6);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {(isMobile ? firstSixTechnologies : technologies).map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
