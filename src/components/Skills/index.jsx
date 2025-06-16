import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: 'HTML5', icon: '🌐', level: 'Advanced' },
        { name: 'CSS3', icon: '🎨', level: 'Advanced' },
        { name: 'JavaScript', icon: '⚡', level: 'Intermediate' },
        { name: 'React.js', icon: '⚛️', level: 'Intermediate' },
        { name: 'Bootstrap', icon: '🅱️', level: 'Intermediate' },
        { name: 'Flexbox', icon: '📐', level: 'Advanced' }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: 'Node.js', icon: '🟢', level: 'Intermediate' },
        { name: 'Express.js', icon: '🚀', level: 'Intermediate' },
        { name: 'Python', icon: '🐍', level: 'Intermediate' },
        { name: 'REST APIs', icon: '🔗', level: 'Intermediate' }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: 'MongoDB', icon: '🍃', level: 'Beginner' },
        { name: 'SQL', icon: '🗃️', level: 'Intermediate' },
        { name: 'Git', icon: '🔧', level: 'Intermediate' },
        { name: 'GitHub', icon: '🐙', level: 'Intermediate' }
      ]
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <motion.div 
          className="skills-categories"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={categoryVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-level">{skill.level}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;