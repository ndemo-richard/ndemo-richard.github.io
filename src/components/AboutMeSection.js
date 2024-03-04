// AboutMeSection.js
import React from 'react';

const AboutMeSection = () => {
  return (
    <div className="bg-dark-200 py-12 px-4">
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
            <ul className="flex justify-center space-x-5">
              <li>
                <img src="/icons/coding-icon.svg" alt="Coding" className="w-10 h-10" />
              </li>
              <li>
                <img src="/icons/cloud-icon.svg" alt="Cloud" className="w-10 h-10" />
              </li>
              <li>
                <img src="/icons/devops-icon.svg" alt="DevOps" className="w-10 h-10" />
              </li>
              {/* Add more icons as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
