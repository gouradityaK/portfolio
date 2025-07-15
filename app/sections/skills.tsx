import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiGit, SiTailwindcss, SiNextdotjs, SiMysql, SiPostgresql } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'Web Development', level: 100 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Backend Development', level: 75 },
    { name: 'Project Management', level: 85 },
  ];

  const technologies = [
      { name: 'Next.js', icon: <SiNextdotjs className="text-black" />, percent: 76 },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, percent: 95 },
    { name: 'React.js', icon: <FaReact className="text-blue-500" />, percent: 90 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, percent: 85 },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800" />, percent: 80 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, percent: 75 },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, percent: 75 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" />, percent: 75 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, percent: 90 },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, percent: 85 },
    { name: 'CSS3', icon: <FaCss3 className="text-blue-400" />, percent: 80 },
    { name: 'Git', icon: <SiGit className="text-orange-600" />, percent: 85 },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800" />, percent: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-4">
            My <span className="text-indigo-600">Skills</span> & <span className="text-indigo-600">Technologies</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The tools and expertise I use to bring your ideas to life
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
        
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">My Expertise</h3>
            <div className="grid grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="3"
                        strokeDasharray={`${skill.level}, 100`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-indigo-600">{skill.level}%</span>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
        
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Technologies I Use</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center transition-all hover:shadow-md hover:border-indigo-100 hover:-translate-y-1"
                >
                  <div className="relative w-16 h-16 mb-2">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="2"
                        strokeDasharray={`${tech.percent}, 100`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl">
                      {tech.icon}
                    </div>
                    <div className="absolute -bottom-2 left-0 right-0 text-center">
                      <span className="text-xs font-bold text-indigo-600 bg-white px-1">
                        {tech.percent}%
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center mt-2">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}