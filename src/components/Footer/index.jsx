import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import './index.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-text"
          >
            <p>© 2025 Vemula Mounika. All Rights Reserved.</p>
            <p className="footer-made">
              Made with <Heart size={16} className="heart-icon" /> using React.js
            </p>
          </motion.div>
          
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(127, 0, 255, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;