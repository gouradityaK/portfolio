'use client'
import { motion, cubicBezier } from "framer-motion";

export default function About() {
    const customEase = cubicBezier(0.4, 0, 0.2, 1);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: customEase
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.98
        }
    };

    return (
        <section id="about" className="py-20 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        About <span className="text-green-600">Me</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-0 md:ml-0 lg:ml-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h3 variants={itemVariants} className="text-3xl font-semibold mb-4 text-left">
                        Who I Am
                    </motion.h3>

                    <motion.p variants={itemVariants} className="text-gray-600 mb-6 text-left text-xl">
                        I am passionate Full-Stack Developer specializing in modern web applications with React.js/Next.js and Node.js. I build dynamic, user-friendly experiences while expanding my expertise in scalable backend systems. Eager to innovate in web development, SaaS, and emerging tech.
                    </motion.p>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xl">
                        <div className="text-left">
                            <h4 className="font-semibold mb-2">Name:</h4>
                            <p className="text-gray-600">Aditya Gour</p>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold mb-2">Email:</h4>
                            <p className="text-gray-600">gouraditya2002@gmail.com</p>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold mb-2">Experience:</h4>
                            <p className="text-gray-600">6 Months</p>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold mb-2">Location:</h4>
                            <p className="text-gray-600">Nagpur, Maharashtra</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-start">
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Download Resume
                        </motion.button>
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                            View Certifications
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
