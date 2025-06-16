import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import './index.css';

const Projects = () => {
  const projects = [
    {
      title: "Jobby App",
      description: "A job-hunting platform that allows users to log in, search for jobs, filter listings, and view detailed job info.",
      tech: ["React.js", "CSS", "REST APIs"],
      github: "https://github.com/mounika-2510/Jobby-App.git",
      live: "https://jobbyappcp.ccbp.tech",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747921838/Screenshot_1313_bzxnbv.png"
    },
    {
      title: "Nxt Trendz - Cart Features",
      description: "A responsive e-commerce web app with add-to-cart, quantity adjustments, and product detail features.",
      tech: ["React.js", "Bootstrap", "REST APIs"],
      github: "https://github.com/mounika-2510/Nxt-Trendz-CartFeatures",
      live: "https://mounika2510.ccbp.tech",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747921410/Screenshot_1311_jfggwn.png"
    },
    {
      title: "Spotify Remix",
      description: "A sleek music streaming UI clone inspired by Spotify with custom playlist and song card components.",
      tech: ["React.js", "CSS"],
      github: "https://github.com/mounika-2510/Spotify-Remix",
      live: "https://vmspotifyremix.ccbp.tech",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747921229/Screenshot_1310_noq4ha.png"
    },
    {
      title: "Emoji Game",
      description: "A memory challenge where users click on emojis without repeating — resets on duplicate click.",
      tech: ["React.js", "CSS"],
      github: "https://github.com/mounika-2510/Emoji-Game",
      live: "https://mvemojigame.ccbp.tech",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747922280/Screenshot_1314_xe4mvh.png"
    },
    {
      title: "Match Game",
      description: "A fun, fast-paced game where users match thumbnail images before the timer runs out.",
      tech: ["React.js", "CSS"],
      github: "https://github.com/mounika-2510/Match-Game",
      live: "https://mgvm.ccbp.tech",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747477566/Screenshot_1258_opxhmh.png"
    },
    {
      title: "Digital Timer App",
      description: "A user-friendly timer application with start, pause, and reset functionality, ideal for time management practice.",
      tech: ["React.js", "CSS"],
      github: "https://github.com/mounika-2510/Digital-Timer-App",
      live: "https://dtvm.ccbp.tech",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1748009843/Screenshot_1317_ok3kyx.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Eye size={20} />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;