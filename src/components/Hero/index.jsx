import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import './index.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hero-title"
            >
              Hi, I'm Vemula Mounika{' '}
              <motion.span
                animate={{ 
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
                className="wave-hand"
              >
                👋
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-subtitle"
            >
              Passionate Full Stack Developer & Recent Graduate seeking opportunities to create impactful web solutions
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-buttons"
            >
              <a href="#projects" className="btn btn-primary">
                <Eye size={20} />
                View Projects
              </a>
              <a 
                href="https://drive.google.com/file/d/1F80vTn3xl3_4FJex-nvuqisXGQsA_JbP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="hero-visual"
          >
            <div className="hero-card">
              <div className="code-lines">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"Mounika"</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> status</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"Open to Work"</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> skills</span>
                  <span className="code-operator"> = </span>
                  <span className="code-bracket">[</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">"React"</span>
                  <span className="code-comma">,</span>
                  <span className="code-string"> "Node.js"</span>
                  <span className="code-comma">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">"MongoDB"</span>
                  <span className="code-comma">,</span>
                  <span className="code-string"> "Express"</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">]</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;