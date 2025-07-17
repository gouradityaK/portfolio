'use client'
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ProjectCard from '@/app/components/project-card';
const projects = [
  {
    title: 'Sommaire AI Site',
    description: 'A responsive web app that generates structured AI summaries from PDFs with secure file handling, interactive viewer, real-time updates, SEO-friendly pages, and markdown export for easy sharing.',
    tags: ['NextJS', 'React', 'Langchain', 'UploadThing', 'GPT-4', 'NeonDB (PostgreSQL)'],
    imageUrl: '/images/sommarie.PNG',
    liveUrl: 'https://sommaire-ai-eta.vercel.app/',
    codeUrl: 'https://sommaire-ai-eta.vercel.app/',
  },
  {
    title: 'Weather App',
    description: 'Weather App is the application of science and technology to predict the conditions of the atmosphere for a given locations.',
    tags: ['NextJS', 'Tailwind CSS', 'Axios', 'Weather API'],
    imageUrl: '/images/weather-2.PNG',
    liveUrl: 'https://weather-app-2-0-mu.vercel.app/',
    codeUrl: 'https://github.com/gouradityaK/weather_app_2.0'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/images/resume-2.PNG',
    liveUrl: 'https://resume-builder-website-nu.vercel.app/',
    codeUrl: 'https://github.com/gouradityaK/Resume-Builder-Website'
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = 2;
  const visibleProjects = showAll ? projects : projects.slice(0, initialProjects);
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.15, 
        when: "beforeChildren"
      }
    }
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100, 
        damping: 15 
      }
    },
    exit: { opacity: 0, scale: 0.9 } 


  };


  const buttonVariants: Variants = {
    initial: { scale: 1 }, 
    hover: { 
      scale: 1.05, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.98 } 
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        {/* Animated header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 

          whileInView={{ opacity: 1, y: 0 }}



          viewport={{ once: true, margin: "-50px" }} 

          transition={{ duration: 0.6 }} 
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems.
          </p>
        </motion.div>

      
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
       
          <AnimatePresence mode="wait">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}


                variants={item}
                layout 

                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      


        {projects.length > initialProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }} 
            
            className="text-center mt-12"
          >
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {showAll ? 'Show Less' : 'View More Projects'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}