// "use client"
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// interface Tech {
//   name: string;
//   logo: string;
// }

// const technologies: Tech[] = [
//   { name: "React", logo: "/tech/react.svg" },
//   { name: "Next.js", logo: "/tech/nextjs.svg" },
//   { name: "TypeScript", logo: "/tech/typescript.svg" },
//   { name: "Node.js", logo: "/tech/nodejs.svg" },
//   { name: "MongoDB", logo: "/tech/mongodb.svg" },
//   { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
//   { name: "AWS", logo: "/tech/aws.svg" },
//   { name: "Docker", logo: "/tech/docker.svg" },
// ];

// export default function TechStack() {
//   return (
//     <section id="tech-stack" className="py-20 px-4 md:px-8 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold mb-12 text-center"
//         >
//           Tech Stack
//         </motion.h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {technologies.map((tech, index) => (
//             <motion.div
//               key={tech.name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="relative w-16 h-16">
//                 <Image
//                   src={tech.logo}
//                   alt={tech.name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <span className="text-sm font-medium">{tech.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// } 