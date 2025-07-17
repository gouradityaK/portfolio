'use client';
import { motion } from 'framer-motion';
import ContactForm from '@/app/components/contact-form';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/adityagour06/'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/gouradityaK'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      url: 'https://x.com/AdityaG48638889'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://instagram.com'
    }
  ];
  return (
    <section id="contact" className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Havee a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            {/* Contact Section  */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <HiOutlineMail className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:gouraditya2002@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    gouraditya2002@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <BsTelephoneFill className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+918485899908" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    +91 84858 99908
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <IoLocationSharp className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="https://www.google.com/maps/place/Nagpur,+Maharashtra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Nagpur, Maharashtra
                  </a>
                </div>
              </div>
            </div>


            {/* Follow Me Section  */}

            <motion.div variants={fadeInUp} className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 p-3 rounded-full hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

