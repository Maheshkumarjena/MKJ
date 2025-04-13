// 'use client';

// import { motion } from 'framer-motion';
// import { FaCheckCircle, FaBolt, FaShieldAlt, FaRegStar } from 'react-icons/fa';

// const WhyChooseMe = () => {
//   const reasons = [
//     // {
//     //   icon: <FaBolt className="w-8 h-8 text-amber-500" />,
//     //   title: 'Lightning Fast Delivery',
//     //   description: 'I deliver projects 30% faster than industry average without compromising quality',
//     //   stat: '100+ Projects Delivered On Time',
//     // },
//     {
//       icon: <FaShieldAlt className="w-8 h-8 text-blue-500" />,
//       title: 'Bulletproof Quality',
//       description: 'Rigorous testing and quality assurance processes ensure bug-free solutions',
//       stat: '98% Client Satisfaction Rate',
//     },
//     {
//       icon: <FaRegStar className="w-8 h-8 text-purple-500" />,
//       title: 'Cutting-Edge Solutions',
//       description: 'I leverage the latest technologies to future-proof your digital products',
//       stat: '50+ Modern Tech Stacks Mastered',
//     },
//     {
//       icon: <FaCheckCircle className="w-8 h-8 text-green-500" />,
//       title: 'End-to-End Support',
//       description: "From concept to deployment and beyond - I'm with you at every step",
//       stat: '24/7 Ongoing Maintenance Available',
//     },
//   ];

//   return (
//     <section className="py-16 px-4 max-w-7xl mx-auto shadow-2xl rounded-4xl shadow-blue-500/70">
//       <div className="text-center mb-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-blue-600 mb-4"
//         >
//           Why Choose My Services?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-xl text-blue-300 max-w-3xl mx-auto"
//         >
//           Here's what sets me apart from the competition and guarantees exceptional results for your project
//         </motion.p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex flex-row justify-between"> 
//         {reasons.map((reason, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ y: -10 }}
//             className=" backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
//           >
//             <div className="flex flex-col items-center text-center">
//               <div className="p-3 bg-white rounded-full shadow-md mb-4">
//                 {reason.icon}
//               </div>
//               <h3 className="text-xl font-bold text-gray-100 mb-2">{reason.title}</h3>
//               <p className="text-gray-200 mb-4">{reason.description}</p>
//               <div className="mt-auto">
//                 <p className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//                   {reason.stat}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Client Testimonials */}
//       {/* <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//         className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white"
//       >
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center mb-6">
//             <div className="flex -space-x-2 overflow-hidden">
//               {[1, 2, 3, 4, 5].map((i) => (
//                 <img
//                   key={i}
//                   src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 20}.jpg`}
//                   alt="Happy client"
//                   className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
//                 />
//               ))}
//             </div>
//             <div className="ml-4">
//               <p className="font-bold">Trusted by 50+ Clients Worldwide</p>
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-amber-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//                 <span className="ml-2 text-sm">5.0 (42 reviews)</span>
//               </div>
//             </div>
//           </div>
//           <p className="text-xl italic mb-6">
//             "Working with this developer was a game-changer for our business. The attention to detail and
//             technical expertise delivered results that exceeded our expectations. We've seen a 300%
//             increase in conversions since launching our new platform."
//           </p>
//           <p className="font-bold">- Sarah Johnson, CEO at DigitalSolutions</p>
//         </div>
//       </motion.div> */}

//       {/* Unique Selling Points */}
//       <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className=" p-6 rounded-xl shadow-md border border-gray-100"
//         >
//           <h3 className="text-xl font-bold text-gray-100 mb-4">Technical Excellence</h3>
//           <ul className="space-y-3">
//             <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>Certified in 10+ modern technologies</span>
//             </li>
//             <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>Clean, maintainable code architecture</span>
//             </li>
//             <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>Performance optimization expertise</span>
//             </li>
//           </ul>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className=" p-6 rounded-xl shadow-md border border-gray-100"
//         >
//           <h3 className="text-xl font-bold text-gray-100 mb-4">Client-Centric Approach</h3>
//           <ul className="space-y-3">
//             {/* <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>Dedicated project manager for each client</span>
//             </li> */}
//             <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>Regular progress updates and demos</span>
//             </li>
//             <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>Flexible to accommodate changes</span>
//             </li>
//           </ul>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="p-6 rounded-xl shadow-md border border-gray-100"
//         >
//           <h3 className="text-xl font-bold text-gray-100 mb-4">Business Value</h3>
//           <ul className="space-y-3">
//             <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>ROI-focused development strategy</span>
//             </li>
//             <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>Competitive pricing with transparent costs</span>
//             </li>
//             <li className="flex items-start">
//               <svg
//                 className="w-5 h-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <span>Post-launch support and training</span>
//             </li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseMe;