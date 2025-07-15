'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerAnimation: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25
      }
    }
  }

  const itemAnimation: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }


  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-20 md:py-24 lg:py-26">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <motion.div
            className="lg:w-1/2 space-y-7 text-center lg:text-left"
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={containerAnimation}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900"
              variants={itemAnimation}
            >
              <span className="block">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Aditya Gour
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl text-gray-700 font-semibold"
              variants={itemAnimation}
            >
              Full Stack Engineer
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemAnimation}
            >
              Crafting modern web applications with cutting-edge technologies.
              Passionate about building intuitive interfaces and robust backend systems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-5 justify-center lg:justify-start pt-2"
              variants={itemAnimation}
            >
              <Link
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Me
                <FiArrowRight className="text-lg" />
              </Link>

              <Link
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 hover:bg-white rounded-xl transition-all duration-300 hover:border-gray-400"
              >
                <FiDownload className="text-lg" />
                Resume
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-6"
              variants={itemAnimation}
            >
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <motion.div
                className="absolute inset-0 rounded-full shadow-xl overflow-hidden border-2 border-white"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/my-ghibli.jpg"
                  alt="Aditya Gour - Full Stack Developer"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 