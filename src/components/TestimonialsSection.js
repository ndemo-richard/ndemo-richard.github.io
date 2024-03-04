// TestimonialsSection.js
import React from 'react';

const testimonials = [
  // Placeholder testimonials - replace these with real ones as you receive them
  {
    id: 1,
    quote: "Placeholder testimonial. This space will showcase feedback from colleagues, clients, and mentors.",
    author: "Name",
    role: "Position, Company",
    imageUrl: "/path-to-image-or-logo.png", // Replace with path to company logo or client's photo
  },
  // Repeat or add more placeholders as needed
];

const TestimonialsSection = () => {
  return (
    <div className="bg-dark-200 py-12 px-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-accent sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto text-4xl font-mysterious text-slate-50">
            Hear what people say about my work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md shadow-lg">
                      <img src={testimonial.imageUrl} alt="logo" className="h-9 w-9 rounded-full" /> {/* Placeholder for company logo or author's photo */}
                    </span>
                  </div>
                  <blockquote className="mt-5">
                    <div className="text-base leading-6 text-gray-700 font-medium">
                      <p>
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="text-base leading-6 font-medium text-gray-900">
                        {testimonial.author}, <span className="text-indigo-600">{testimonial.role}</span>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
