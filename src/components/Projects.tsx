"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A full-stack application built with Next.js and Node.js',
    image: '/project1.jpg',
    link: '/projects/project-one',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 ">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Projects
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[#1A1A1A] overflow-hidden"
          >
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-[#121212] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-sm mb-4 text-[#9F7AEA]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-[#6B46C1] bg-opacity-20 px-2 py-1 rounded text-[#9F7AEA]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-block px-4 py-2 border border-[#6B46C1] text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white transition-colors duration-300"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 