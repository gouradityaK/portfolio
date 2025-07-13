
export default function About() {
  return (
    <section id="about" className="py-20 bg-white  text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-green-600">Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
          <p className="text-gray-600 mb-6">
            I am passionate Full-Stack Developer specializing in modern web applications with React.js/Next.js and Node.js. I build dynamic, user-friendly experiences while expanding my expertise in scalable backend systems. Eager to innovate in web development, SaaS, and emerging tech. 
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Name:</h4>
              <p className="text-gray-600">Aditya Gour</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email:</h4>
              <p className="text-gray-600">gouraditya2002@gmail.com
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Experience:</h4>
              <p className="text-gray-600">6 Months</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Location:</h4>
              <p className="text-gray-600">Nagpur, Maharashtra</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Download Resume
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
              View Certifications
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}