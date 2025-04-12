

import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; 
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jared Mogonchi</h3>
            <p className="text-gray-300 mb-4">
              A passionate full-stack developer creating innovative web solutions for real-world problems.
            </p>
            <div className="flex items-center space-x-4 text-gray-300">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ombongijared2@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 hover:underline"
>
  <FaEnvelope size={18} color="#EA4335" />
  <span className="text-white">ombongijared2@gmail.com</span>
</a>

</div>

<div className="flex items-center space-x-4 text-gray-300 mt-2">
  <a href="tel:+254710464858" className="flex items-center space-x-2 hover:underline">
    <FaPhoneAlt size={18} color="#25D366" />
    <span className="text-white">+254 710 464 858</span>
  </a>
</div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-portfolio-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-portfolio-gold transition-colors">About</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-portfolio-gold transition-colors">Projects</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-portfolio-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
  <h3 className="text-xl font-bold mb-4">Connect</h3>
  <div className="flex space-x-4">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Facebook size={20} />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Twitter size={20} />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Instagram size={20} />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#333] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Github size={20} />
    </a>
    <a
      href="https://wa.me/+254710464858" 
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <FaWhatsapp size={20} />
    </a>
  </div>
</div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Jared Mogonchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
