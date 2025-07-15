import ProjectCard from '@/app/components/project-card'

const projects = [
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
    title: 'web Management App',
    description: 'A productivity app for organizing tasks with team collaboration features.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageUrl: '/images/project3.jpg',
    liveUrl: '#',
    codeUrl: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was carefully crafted to solve specific problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}