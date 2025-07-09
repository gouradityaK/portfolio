import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Aditya Gour
            </Link>
            <p className="mt-2 max-w-md">
              Creating digital experiences that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Consulting</Link></li>
              </ul>
            </div> */}
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
                {/* <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li> */}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Aditya Gour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}