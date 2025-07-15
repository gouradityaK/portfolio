'use client'
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Education() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-4xl font-bold text-black">
            <span>My</span>  <span className="text-indigo-600">Education</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
        >
          {/* First Education */}
          <motion.div
            className="bg-gray-50 p-8 rounded-lg border-l-4 border-indigo-600 shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-2">
              <motion.span
                className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded inline-block"
                initial={{ scale: 0.9 }}
                animate={mounted ? { scale: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                2023-2025
              </motion.span>
            </div>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-2"
              initial={{ x: -10 }}
              animate={mounted ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Master in Computer Application
            </motion.h3>
            <motion.p
              className="text-gray-700 font-medium mb-3"
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              G.H Raisoni College of Engineering and Management
            </motion.p>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <span className="text-sm font-medium text-gray-600">Grade:</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                First Class Distinction
              </span>
            </motion.div>
          </motion.div>

          {/* Second Education */}
          <motion.div
            className="bg-gray-50 p-8 rounded-lg border-l-4 border-indigo-600 shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mb-2">
              <motion.span
                className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded inline-block"
                initial={{ scale: 0.9 }}
                animate={mounted ? { scale: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                2020-2023
              </motion.span>
            </div>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-2"
              initial={{ x: -10 }}
              animate={mounted ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Bachelor of Science in Computer Science
            </motion.h3>
            <motion.p
              className="text-gray-700 font-medium mb-3"
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Shri Shivaji Science College
            </motion.p>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm font-medium text-gray-600">Grade:</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                First Class Distinction
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



// // export default function Education() {
// //   return (
// //     <section id="education" className="py-15 bg-white">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
// //           <span className="text-indigo-600">Education</span>
// //         </h2>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-8xl mx-auto">
// //           {/* First Education */}
// //           <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-indigo-600 shadow-sm">
// //             <div className="mb-2">
// //               <span className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded inline-block">
// //                 2023-2025
// //               </span>
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900 mb-2">Master in Computer Application</h3>
// //             <p className="text-gray-700 font-medium mb-3">G.H Raisoni College of Engineering and Management</p>
// //             <div className="flex items-center gap-2">
// //               <span className="text-sm font-medium text-gray-600">Grade:</span>
// //               <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
// //                 First Class Distinction
// //               </span>
// //             </div>
// //           </div>

// //           {/* Second Education */}
// //           <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-indigo-600 shadow-sm">
// //             <div className="mb-2">
// //               <span className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded inline-block">
// //                 2020-2023
// //               </span>
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Science in Computer Science</h3>
// //             <p className="text-gray-700 font-medium mb-3">Shri Shivaji Science College</p>
// //             <div className="flex items-center gap-2">
// //               <span className="text-sm font-medium text-gray-600">Grade:</span>
// //               <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
// //                 First Class Distinction
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }



