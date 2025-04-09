import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  guestName?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ guestName = 'My Guest' }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/37da14e4-6691-40de-ab9a-53597eae38fd.png"
          alt="Jared Mogonchi"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:ml-auto md:pl-12 mb-10 md:mb-0">
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
                <div className="text-3xl font-bold mb-8 space-y-2">
                  <p className="text-green-500">Software Engineer</p>
                  <p className="text-blue-400">Web Developer</p>
                  <p className="text-yellow-400">Full Stack Developer</p>
                  <p className="text-purple-400">UI/UX Enthusiast</p>
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
      
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center space-y-6 ml-4">
        <motion.a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          whileHover={{ scale: 1.2 }}
        >
          <span className="sr-only">Facebook</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </motion.a>
        
        <motion.a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          whileHover={{ scale: 1.2 }}
        >
          <span className="sr-only">Instagram</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </motion.a>
        
        <motion.a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          whileHover={{ scale: 1.2 }}
        >
          <span className="sr-only">YouTube</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </motion.a>
        
        <motion.a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          whileHover={{ scale: 1.2 }}
        >
          <span className="sr-only">LinkedIn</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </motion.a>
        
        <motion.a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          whileHover={{ scale: 1.2 }}
        >
          <span className="sr-only">GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </motion.a>
        
        <motion.a 
          href="https://wa.me/254710464858" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          whileHover={{ scale: 1.2 }}
        >
          <span className="sr-only">WhatsApp</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.882-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </motion.a>
      </div>
      
      <motion.div 
        className="absolute bottom-8 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={32} className="text-green-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
