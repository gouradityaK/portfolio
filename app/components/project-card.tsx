import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion, Variants } from 'framer-motion';


interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  codeUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  
  const cardVariants: Variants = {
    hover: {
      y: -8, 
      transition: {
        type: "spring" as const, 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  
  const imageVariants: Variants = {
    hover: {
      scale: 1.05, 
      transition: {
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };


  const tagVariants: Variants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 10
      }
    }
  };

  return (
  
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col border border-gray-100"
      whileHover="hover"
      variants={cardVariants}


    >
      
      <motion.div 
        className="relative h-72 w-full overflow-hidden"
        variants={imageVariants}
      >
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          priority={false}
        />
      </motion.div>
  


      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}</h3>
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
              variants={tagVariants}
              whileHover="hover"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
       
        <div className="flex gap-4 
        mt-auto">
         
          {project.liveUrl !== '#' 
          && (
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="flex items-center gap-2
               text-indigo-600
               hover:text-indigo-800 
              transition-colors"
            >
              <Link
                href={project.liveUrl}
                target="_blank"

                rel="noopener noreferrer"

                className="flex items-center gap-2"
              >
                <FiExternalLink /> Live Demo
              </Link>
            </motion.div>
          )}
          
         

          {project.codeUrl !== '#' && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Link
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FiGithub /> View Code
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}