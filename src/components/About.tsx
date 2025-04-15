'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const About: React.FC = () => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const skills: string[] = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'Docker',
    'AWS',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
  ];

  return (
    <section id="about" className="relative pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/30"
              custom={0}
              variants={variants}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 z-10" />
              <Image
                src="/upload.jpg" // Replace with your image
                alt="Developer"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Mahesh Kumar Jena
                </motion.h3>
                <motion.p
                  className="text-cyan-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Full Stack Developer
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:w-2/3">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              custom={1}
              variants={variants}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-6 text-lg"
              custom={2}
              variants={variants}
            >
              I&#39;m a passionate Full Stack Developer with 1+ year of experience building modern web applications.
              I specialize in JavaScript technologies across the whole stack (React.js, Next.js, Node.js, Express, MongoDB).
            </motion.p>

            <motion.p
              className="text-gray-300 mb-8 text-lg"
              custom={3}
              variants={variants}
            >
              My approach combines technical expertise with creative problem-solving to deliver high-quality,
              scalable solutions. I&#39;m committed to writing clean, maintainable code and staying updated with
              the latest industry trends.
            </motion.p>

            <motion.div
              className="mb-8"
              custom={4}
              variants={variants}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-gray-200 hover:bg-cyan-500 hover:text-white transition-colors duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * index, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={5}
              variants={variants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                
              </motion.a>
              <motion.a
                href="/MaheshKumarJena-Resume.pdf"
                download
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;