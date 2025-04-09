
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DevPortfolio</h3>
            <p className="text-gray-300 mb-4">
              A passionate full-stack developer creating innovative web solutions for real-world problems.
            </p>
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail size={18} />
              <span>contact@devportfolio.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300 mt-2">
              <Phone size={18} />
              <span>+254 710 464 858</span>
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-gold transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
