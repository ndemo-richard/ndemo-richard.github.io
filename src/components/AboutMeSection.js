// AboutMeSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const AboutMeSection = () => {
  return (
    <div id="about" className="bg-dark-200 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-mysterious text-accent">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto mt-6 text-slate-50">
            Passionate about bridging the gap between technology and people, I specialize in coding, cloud computing, and DevOps. With a focus on continuous improvement, I strive to deliver scalable and efficient solutions.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-32 h-32 rounded-full mb-4" src="/logo.png" alt="Your Avatar" />
          <div className="space-y-2 text-center">
            <div className="text-sm leading-6 font-medium space-y-1">
              <h3 className="text-lg leading-6 font-medium text-slate-200">Richard N. Onyancha</h3>
              <p className="text-neon">Tech Artisan: Coding, Cloud, & Continuous Deployment</p>
            </div>
            <ul className="flex flex-wrap justify-center md:flex-nowrap space-x-0 md:space-x-5 space-y-2 md:space-y-0">
        <li><a href="https://github.com/ndemo-richard" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="w-10 h-10" /></a></li>
        <li><a href="https://www.linkedin.com/in/ndemo-richard" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" /></a></li>
        <li><a href="mailto:your.ndemorich@google.com"><FontAwesomeIcon icon={faEnvelope} className="w-10 h-10" /></a></li>
        <li><a href="https://dribbble.com/ndemo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDribbble} className="w-10 h-10" /></a></li>
      </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
