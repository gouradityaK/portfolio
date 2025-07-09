import Link from 'next/link'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

interface Project {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  liveUrl: string
  codeUrl: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {/* Replace with actual image */}
        [Project Image]
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
          >
            <FiExternalLink /> Live Demo
          </Link>
          <Link
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <FiGithub /> View Code
          </Link>
        </div>
      </div>
    </div>
  )
}