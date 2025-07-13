import Link from 'next/link';
import Image from 'next/image';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text content - comes first in DOM but displayed second on mobile */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I am <span className="text-blue-600 dark:text-blue-400">Aditya Gour</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              Full Stack Developer & Web Solutions Architect
            </h2>

            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto md:mx-0">
              I build high-performance web applications with modern technologies.
              Focused on creating seamless user experiences and scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <FiArrowRight className="ml-1" />
              </Link>

              <Link
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
              >
                <FiDownload />
                Download CV
              </Link>
            </div>

            {/* Tech stack badges (optional) */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-4">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Profile image - comes second in DOM but displayed first on mobile */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-2xl overflow-hidden">
                <Image
                  src="/profile.jpg" // Replace with your image path
                  alt="Aditya Gour"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  priority
                />
              </div>
              {/* Decorative element (optional) */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}