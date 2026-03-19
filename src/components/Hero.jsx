import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import hero from "../assets/hero.jpeg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={
        isMobile
          ? "relative mx-auto flex min-h-[100dvh] w-full flex-col overflow-x-hidden"
          : "relative mx-auto h-screen w-full"
      }
    >
      <div
        className={
          isMobile
            ? `relative z-10 mx-auto flex w-full max-w-7xl shrink-0 flex-row items-start gap-3 pb-2 pt-[96px] xs:gap-5 xs:pt-[100px] ${styles.paddingX}`
            : `absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5 ${styles.paddingX}`
        }
      >
        <div
          className={
            isMobile
              ? "mt-1 flex shrink-0 flex-col items-center xs:mt-5"
              : "mt-5 flex flex-col items-center justify-center"
          }
        >
          <div className="h-5 w-5 shrink-0 rounded-full bg-[#915EFF]" />
          <div
            className={
              isMobile
                ? "violet-gradient mt-0 h-28 w-1 xs:h-36 sm:h-40"
                : "violet-gradient h-40 w-1 sm:h-80"
            }
          />
        </div>

        <div className="min-w-0 flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, Myself <span className="text-[#915EFF]">Soham More</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full Stack Developer passionate in building and refining web applications,
            with a keen interest in staying ahead of the curve with the latest advancements in <b>AI</b>.
            <br className="hidden sm:block" />
          </p>
        </div>
      </div>

      {isMobile ? (
        <div className="relative z-0 flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-32 pt-2">
          <img
            src={hero}
            alt="Developer workspace"
            className="h-auto w-full max-w-[min(100%,280px)] max-h-[38vh] object-contain xs:max-w-[300px]"
          />
        </div>
      ) : (
        <ComputersCanvas />
      )}

      <div
        className={
          isMobile
            ? "absolute bottom-20 flex w-full items-center justify-center xs:bottom-8"
            : "absolute bottom-32 flex w-full items-center justify-center xs:bottom-10"
        }
      >
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-center justify-center">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
