'use client'
import ProjectCard from '@/app/components/project-card';
import { FaChrome, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const featuredProjects = [
  {
    title: 'AI Mock Interview Extension',
    description: 'A browser extension for LeetCode that simulates technical interviews using AI. Practice coding interviews in a realistic environment with feedback.',
    tags: ['React', 'JavaScript', 'Chrome Extension API', 'OpenAI API'],
    imageUrl: '/images/leetcode-extension.jpg',
    liveUrl: '#',
    codeUrl: '#',
    buttonText: 'View Demo',
    icon: <FaChrome className="mr-2" />
  },
  {
    title: 'Real-time Coding Quiz Game',
    description: 'An interactive two player game that tests coding knowledge in real-time. Features live competitions, leaderboards.',
    tags: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'Express'],
    imageUrl: '/images/quiz-game.jpg',
    liveUrl: '#',
    codeUrl: '#',
    buttonText: 'View Demo',
    icon: <FaExternalLinkAlt className="mr-2" />
  }
];

const allProjects = [
  ...featuredProjects,
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with payment integration and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project1.jpg',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/images/project2.jpg',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for organizing tasks with team collaboration features.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageUrl: '/images/project3.jpg',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Web Management App',
    description: 'A productivity app for organizing tasks with team collaboration features.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageUrl: '/images/project3.jpg',
    liveUrl: '#',
    codeUrl: '#'
  },
];

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was carefully crafted to solve specific problems.
        </p>

        {/*Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  {project.icon}
                  {project.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Section */}
        {showAllProjects && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}

        <div className="text-center">
          <button 
            onClick={toggleShowAllProjects}
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
            <FaExternalLinkAlt className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}



// import ProjectCard from '@/app/components/project-card'

// const projects = [
//   {
//     title: 'E-commerce Platform',
//     description: 'A full-featured online store with payment integration and inventory management.',
//     tags: ['React', 'Node.js', 'MongoDB'],
//     imageUrl: '/images/project1.jpg',
//     liveUrl: '#',
//     codeUrl: '#'
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'A responsive portfolio website built with modern web technologies.',
//     tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
//     imageUrl: '/images/project2.jpg',
//     liveUrl: '#',
//     codeUrl: '#'
//   },
//   {
//     title: 'Task Management App',
//     description: 'A productivity app for organizing tasks with team collaboration features.',
//     tags: ['React Native', 'Firebase', 'Redux'],
//     imageUrl: '/images/project3.jpg',
//     liveUrl: '#',
//     codeUrl: '#'
//   },
//   {
//     title: 'web Management App',
//     description: 'A productivity app for organizing tasks with team collaboration features.',
//     tags: ['React Native', 'Firebase', 'Redux'],
//     imageUrl: '/images/project3.jpg',
//     liveUrl: '#',
//     codeUrl: '#'
//   },
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-gray-50 text-black">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           My <span className="text-indigo-600">Projects</span>
//         </h2>
//         <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
//           Here are some of my recent projects. Each one was carefully crafted to solve specific problems.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }






