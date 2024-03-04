// ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-dark-200 py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-accent sm:text-4xl">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-50 lg:mx-auto">
            Interested in collaborating? Drop me a message!
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-md">
            <form action="#" method="POST" className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-neon">Name</span>
                <input type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="" />
              </label>
              <label className="block">
                <span className="text-neon">Email</span>
                <input type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="" />
              </label>
              <label className="block">
                <span className="text-neon">Message</span>
                <textarea name="message" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
              </label>
              <div>
                <button type="submit" className="py-2 px-4 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-neon focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="https://linkedin.com/in/ndemo-richard" className="inline-block mx-2 text-gray-700 hover:text-gray-900">
            <span className="sr-only">LinkedIn</span>
            {/* Replace with LinkedIn icon */}
          </a>
          <a href="https://github.com/ndemo-richard" className="inline-block mx-2 text-gray-700 hover:text-gray-900">
            <span className="sr-only">GitHub</span>
            {/* Replace with GitHub icon */}
          </a>
          <a href="https://twitter.com/ndemorich" className="inline-block mx-2 text-gray-700 hover:text-gray-900">
            <span className="sr-only">Twitter</span>
            {/* Replace with Twitter icon */}
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
