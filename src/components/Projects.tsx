'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  
  {
    id: 2,
    title: "Health Tracking App",
    description: "Mobile application for tracking fitness metrics and nutrition with data visualization.",
    tags: ["React Native", "Firebase", "D3.js"],
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Web application that generates marketing content using GPT-3.5 API.",
    tags: ["Next.js", "Tailwind", "OpenAI"],
    image: "/project3.jpg"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "Supabase", "WebSockets"],
    image: "/project4.jpg"
  },
  {
    id: 7,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "Supabase", "WebSockets"],
    image: "/project4.jpg"
  },
  {
    id: 8,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "Supabase", "WebSockets"],
    image: "/project4.jpg"
  },
  {
    id: 9,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "Supabase", "WebSockets"],
    image: "/project4.jpg"
  },
  {
    id: 5,
    title: "Task ent System",
    description: "rative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "Supabase", "WebSockets"],
    image: "/project4.jpg"
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id='projects' className="w-full max-w-7xl   mx-auto  px-4 sm:px-6 lg:px-8 pt-15 mt-10">
            <h2 className="text-3xl font-bold text-center my-4 text-gray-200">My Projects</h2>

      {/* Numbered Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => goToProject(index)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex === index
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700'
            }`}
            onMouseEnter={() => {}}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium"
            >
              {index + 1}
            </motion.span>
            {/* <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: currentIndex === index ? 1 : 0, scale: 1 }}
              className="absolute -bottom-8 text-sm font-medium text-indigo-600"
            >
              {currentIndex === index ? project.title : ''}
            </motion.div> */}
          </button>
        ))}
      </div>

      {/* Project Carousel */}
      <div className="relative overflow-hidden rounded-4xl border border-blue-500  backdrop-blur-[1px]  shadow-2xl shadow-blue-500/50 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  {/* Replace with your actual image component */}
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-64 md:h-80 w-full flex items-center justify-center text-white  text-sm md:text-lg">
                    Project Image: {projects[currentIndex].title}
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2 flex flex-col  justify-center">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-md sm:text-xl md:text-3xl font-bold text-gray-200 mb-2 md:mb-4"
                >
                  {projects[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-200 text-sm sm:text-md md:text-xl mb-3 md:mb-6"
                >
                  {projects[currentIndex].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2 mb-4 md:mb-8"
                >
                  {projects[currentIndex].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 md:px-3 py-[2px] bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-4"
                >
                  <button className=" px-2 md:px-6 py-[4px] md:py-2 bg-indigo-600 text-[12px] sm:text-md text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    View Project
                  </button>
                  <button className="px-2 md:px-6 py-[4px]  md:py-2 border border-indigo-600 text-indigo-600 text-[12px] sm:text-md rounded-lg hover:bg-indigo-50 transition-colors">
                    Source Code
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;