import React from "react";
import { motion } from "framer-motion";
import { FaRegCopyright, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "../Style/Footer.css"
const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400 }
  };

  const tapEffect = {
    scale: 0.95
  };

  return (
    <motion.footer 
      className="bg-gray-50 py-12 px-6 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-600">
            <FaRegCopyright className="text-lg" />
            <p className="text-md lg:text-lg font-medium">
              2025 Akash Kumar. All rights reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: <FaGithub />, url: "https://github.com/mandal-akash", name: "GitHub" },
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/akash-kumar-mandal-20654921b/", name: "LinkedIn" },
              { icon: <FaTwitter />, url: "#", name: "Twitter" },
              { icon: <FaInstagram />, url: "#", name: "Instagram" },
              { icon: <HiOutlineMail />, url: "mailto:akashkumar26858@gmail.com", name: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 text-2xl transition-colors"
                whileHover={hoverEffect}
                whileTap={tapEffect}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <motion.a
              href="#"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={tapEffect}
            >
              <span className="mr-2 text-md lg:text-lg font-medium">Back to Top</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p className="mb-2">Built with React, Tailwind CSS, and Framer Motion</p>
          <p>Designed and developed with ❤️ by Akash Kumar</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;