'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [

  
  {
    id: 1,
    title: "AI Image Detector",
    description: "Web application detects if an image is original or tampered using AI and Photoshop.",
    tags: ["Next.js", "Tailwind", "RestAPI"],
    image: "/ImageDetection.png",
    live: "https://image-detection-model.vercel.app/",
    sourceCode: "https://github.com/Maheshkumarjena/ImageDetectionModel"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Collaborative inventory management tool with complex features.",
    tags: ["JavaScript", "Next.js", "Prisma"],
    image: "/Jm.png",
    live: "https://jm.partswala.in/",
    sourceCode: "https://github.com/Maheshkumarjena/JM"
  }
  ,{
    id: 3,
    title: "Dot and Box multiplayer game",
    description: "A multiplayer game where players take turns drawing lines to complete boxes.",
    tags: ["Next js", "socket.io", "PostgreSQL"],
    image: "/dotbox.png",
    live: "https://dot-box-ui.vercel.app/",
    sourceCode: "https://github.com/Maheshkumarjena/dot-box-ui"
  },
  
  {
    id: 4,
    title: "Ride Sharing App",
    description: "A web application (EcoRide) for sharing rides to increase carpooling, where travelers can post their ride and other travelers can book the ride.",
    tags: ["Next.js", "MongoDB", "GraphHopper API"],
    image: "/Ecoride.png",
    live: "https://eco-ride-virid.vercel.app/",
    sourceCode: "https://github.com/Maheshkumarjena/EcoRide"
  },
  {
    id: 5,
    title: "Student Alumni Interaction Platform",
    description: "A platform for students and alumni to connect and interact.",
    tags: ["TypeScript", "Supabase", "WebSockets"],
    image: "/AlumnNex.png",
    live: "https://alumn-nex.vercel.app/",
    sourceCode: "https://github.com/Maheshkumarjena/AlumnNex"
  },
  
  // {
  //   id: 7,
  //   title: "E-commerce Platform ",
  //   description: "A minimalist e-commerce platform UI design with a focus on user experience and aesthetics.",
  //   tags: ["UI/UX", "JavaScript", "Raw Html & Css"],
  //   image: "/EcommerceStore.png",
  //   live: "https://github.com/Maheshkumarjena/majorProject/deployments",
  //   sourceCode: "https://github.com/Maheshkumarjena/majorProject"
  // }
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
    <div id='projects' className="w-full max-w-7xl  mx-auto  px-4 sm:px-6 lg:px-8 pt-15 mt-10">
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
                  <Image
                    width={500}
                    height={500}
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
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
                  <a href={projects[currentIndex].live} target="_blank" rel="noopener noreferrer">
                    <button className=" px-2 md:px-6 py-[4px] md:py-2 bg-indigo-600 text-[12px] sm:text-md text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      View Project
                    </button>
                  </a>
                  <a href={projects[currentIndex].sourceCode} target="_blank" rel="noopener noreferrer">
                    <button className="px-2 md:px-6 py-[4px]  md:py-2 border border-indigo-600 text-indigo-600 text-[12px] sm:text-md rounded-lg hover:bg-indigo-50 transition-colors">
                      Source Code
                    </button>
                  </a>
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