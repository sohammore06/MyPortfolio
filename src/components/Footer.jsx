import React from "react";
import linkedinIcon from "../assets/linkedin.png"; 
import githubIcon from "../assets/github.png"; 
import instagramIcon from "../assets/instagram.png"; 
import emailIcon from "../assets/gmail.png"; 
import { color } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6">
          <a
            href="mailto:your-sohammore2372@gmail.com"
            aria-label="Email"
          >
            <img
              src={emailIcon}
              alt="Email"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/soham-shankar-more/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://github.com/sohammore06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.instagram.com/_.sketchy._0/?igsh=MXFmeTh2NDk4bzg4bw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>
        </div>
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Soham More. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
