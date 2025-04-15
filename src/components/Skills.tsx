'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillsCategory {
  title: string;
  skills: Skill[];
}

const skillsData: { [key: string]: SkillsCategory } = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  database: {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "Redis", level: 65 },
      { name: "Prisma", level: 75 },
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "CI/CD", level: 75 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 80 },
    ],
  },
  soft: {
    title: "Soft Skills",
    skills: [
      { name: "Cooperative", level: 95 },
      { name: "Fast Learner", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Curious", level: 80 },
      { name: "Adaptability", level: 90 },
    ],
  },
};

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skillsData>('frontend');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id='skills' className="pt-20 mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center my-4 text-gray-200">My Skills</h2>

      {/* Navigation Tabs */}

      {/* for smaller screen size */}

      <div className="relative  sm:hidden backdrop-blur-sm flex flex-col justify-center items-center px-4 py-3 mx-auto w-full ">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.97 }}
          className="w-full p-3 rounded-lg shadow-2xl shadow-blue-500/70  max-w-[300px]  border border-gray-200 shadow-sm hover:shadow-md transition-all flex justify-between items-center"
        >
          <span>{skillsData[activeTab].title}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
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
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className=" z-10 mt-1 w-[300px] py-2 shadow-2xl shadow-blue-500/70  max-w-[300px] px-4  rounded-lg shadow-lg border border-gray-100 overflow-hidden"
            >
              {Object.keys(skillsData).map((tab) => (
                <motion.div
                  key={tab}
                  whileHover={{ backgroundColor: "#3b82f6" }} // Indigo-500 on hover
                  transition={{ duration: 0.1 }}
                  className={`px-4 py-3 cursor-pointer rounded-[30px] ${activeTab === tab
                    ? "bg-indigo-600 text-white"
                    : " text-gray-200 hover:bg-gray-700"
                    }`}
                  onClick={() => {
                    setActiveTab(tab as keyof typeof skillsData);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    {activeTab === tab && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="w-1.5 h-1.5 bg-white rounded-full mr-2"
                      />
                    )}
                    {skillsData[tab].title}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* For larger screen size than sm */}
      <div className="flex flex-wrap hidden sm:flex justify-center gap-2 mb-8">
        {Object.keys(skillsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof skillsData)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {skillsData[tab as keyof typeof skillsData].title}
          </button>
        ))}
      </div>

      {/* Skills Content */}
      <div className="backdrop-blur-[1px] border border-blue-500  rounded-4xl shadow-2xl shadow-blue-500/70 p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">
              {skillsData[activeTab].title}
            </h3>

            <div className="space-y-4">
              {skillsData[activeTab].skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-300 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;