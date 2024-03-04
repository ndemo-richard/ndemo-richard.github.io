// BlogSection.js
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing',
    summary: 'Exploring how cloud computing is evolving and what the future holds.',
    imageUrl: '/blog-images/cloud-future.jpg', // Replace with your image path
    readMoreUrl: '#', // Link to the full article
  },
  // Add more posts as needed
];

const BlogSection = () => {
  return (
    <div className="bg-dark-200 py-12 px-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-accent sm:text-4xl">
            Blog & Insights
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-50 lg:mx-auto">
            Sharing my thoughts on coding trends, cloud technologies, and DevOps practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="overflow-hidden shadow-lg rounded-lg h-90 cursor-pointer m-auto">
              <a href={post.readMoreUrl} className="w-full block h-full">
                <img alt={post.title} src={post.imageUrl} className="max-h-40 w-full object-cover"/>
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                  <p className="text-indigo-500 text-md font-medium">
                    Article
                  </p>
                  <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    {post.title}
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {post.summary}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
