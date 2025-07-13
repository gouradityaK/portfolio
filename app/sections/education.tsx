// src/app/sections/Education.tsx
export default function Education() {
  return (
    <section id="education" className="py-15 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-indigo-600">Education</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-8xl mx-auto">
          {/* First Education */}
          <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-indigo-600 shadow-sm">
            <div className="mb-2">
              <span className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded inline-block">
                2023-2025
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Master in Computer Application</h3>
            <p className="text-gray-700 font-medium mb-3">G.H Raisoni College of Engineering and Management</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Grade:</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                First Class Distinction
              </span>
            </div>
          </div>

          {/* Second Education */}
          <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-indigo-600 shadow-sm">
            <div className="mb-2">
              <span className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded inline-block">
                2020-2023
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-700 font-medium mb-3">Shri Shivaji Science College</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Grade:</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                First Class Distinction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}