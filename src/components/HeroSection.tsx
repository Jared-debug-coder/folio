import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  guestName?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ guestName = 'My Guest' }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 200 && scrollY < 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/uploads/image2.png"
          alt="Jared Mogonchi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:ml-auto md:pl-12 mb-10 md:mb-0 md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h2
                className="text-2xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Hello, <span className="text-green-500 font-bold">{guestName}</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl mb-2">My name is</h3>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Jared <span className="text-green-500">Mogonchi</span>
                </h1>
                <h3 className="text-xl mb-6">And I'm a:</h3>
                <div className="text-3xl font-bold mb-8 h-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-10"
                  >
                    {["Software Engineer", "Web Developer", "PHP Developer", "JavaScript Expert"].map((text, index) => (
                      <motion.p
                        key={text}
                        className={index === 0 ? "text-green-500" : index === 1 ? "text-blue-400" : index === 2 ? "text-yellow-400" : "text-purple-400"}
                        initial={{ opacity: 0, y: 20, position: "absolute", top: 0, right: 0 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          y: [20, 0, 0, -20],
                        }}
                        transition={{
                          times: [0, 0.1, 0.9, 1],
                          duration: 4,
                          delay: index * 4,
                          repeat: Infinity,
                          repeatDelay: 12,
                        }}
                      >
                        {text}
                      </motion.p>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors px-8 py-3 rounded-full font-medium inline-flex items-center justify-center"
                >
                  Hire Me <ArrowDown size={18} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Social Media Icons */}
      <motion.div
        className={`fixed top-1/3 left-0 z-50 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ x: -60 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-4">
          {[
            {
              name: 'Facebook',
              href: 'https://facebook.com/jaredmogonchi',
              bg: 'bg-blue-600',
              icon: <FaFacebook className="w-3 h-3" /> // Adjust icon size here
            },
            {
              name: 'Instagram',
              href: 'https://instagram.com/jared_mogonchi',
              bg: 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400',
              icon: <FaInstagram className="w-3 h-3" /> // Adjust icon size here
            },
           
            {
              name: 'LinkedIn',
              href: 'https://linkedin.com/in/jaredmogonchi',
              bg: 'bg-blue-700',
              icon: <FaLinkedin className="w-3 h-3" /> // Adjust icon size here
            },
            {
              name: 'GitHub',
              href: 'https://github.com/jaredmogonchi',
              bg: 'bg-gray-800',
              icon: <FaGithub className="w-3 h-3" /> // Adjust icon size here
            },
            {
              name: 'WhatsApp',
              href: 'https://wa.me/254710464858', // Replace with your number
              bg: 'bg-green-500',
              icon: <FaWhatsapp className="w-3 h-3" /> // Adjust icon size here
            }
          ].map((icon, i) => (
            <motion.a
              key={i}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center p-3 rounded-full ${icon.bg} text-white hover:scale-110 transition-transform duration-300`}
            >
              {icon.icon}
              <span className="absolute left-12 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {icon.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
