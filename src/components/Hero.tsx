'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: heroRef.current?.offsetHeight,
      behavior: 'smooth',
    });
  };

  // const textVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: (i: number) => ({ // Changed any to number
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: i * 0.2,
  //       duration: 0.8,
  //       ease: 'easeOut',
  //     },
  //   }),
  // };

  // const floatingVariants = {
  //   float: {
  //     y: [0, -15, 0],
  //     transition: {
  //       duration: 3,
  //       repeat: Infinity,
  //       ease: 'easeInOut',
  //     },
  //   },
  // };

  return (
    <section
      ref={heroRef}
      className="flex items-center mt-14 lg:mt-0 justify-center  lg:min-h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Content */}
      <div className=" z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
          >
            {/* ... (Text content as before) */}
            <motion.p
              className="text-lg sm:text-xl text-cyan-400 mb-4"
              // variants={textVariants}
              custom={0}
            >
              Hi, I&#39;m {/* Corrected single quote */}
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
              // variants={textVariants}
              custom={1}
            >
              Full Stack Developer
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-8"
              // variants={textVariants}
              custom={2}
            >
              I build exceptional digital experiences with modern web technologies.
              Passionate about creating efficient, scalable, and user-friendly applications.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              // variants={textVariants}
              custom={3}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="#services"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-4"
              // variants={textVariants}
              custom={4}
            >
              <motion.a
                href="https://github.com/Maheshkumarjena"
                target="_blank"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white transition-colors"
                whileHover={{ y: -5 }}
              >
                <FiGithub size={24} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mahesh15/"
                target="_blank"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white transition-colors"
                whileHover={{ y: -5 }}
              >
                <FiLinkedin size={24} />
              </motion.a>

              <motion.a
                href="mailto:maheshkumarjena46@gmail.com"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white transition-colors"
                whileHover={{ y: -5 }}
              >
                <FiMail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            // variants={floatingVariants}
            animate="float"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl animate-pulse" />
              <div className="relative rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-500/30 blur-xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500/30 blur-xl" />
                </div>
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  {`</>`}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="relative bottom-2 left-6 -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ y: 5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowDown className="text-2xl text-cyan-400 border border-blue-500 h-[40px] rounded-full " />
            </motion.div>
            {/* <p className="text-sm text-cyan-400 mt-2">Scroll Down</p> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;