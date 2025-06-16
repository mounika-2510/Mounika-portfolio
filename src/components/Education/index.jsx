import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Target } from 'lucide-react';
import './index.css';

const Education = () => {
  const educationData = [
    {
      type: "Professional Training",
      degree: "Full Stack Development (MERN)",
      institution: "NxtWave Intensive Program",
      duration: "2024",
      description: "Intensive training in MongoDB, Express.js, React.js, and Node.js with hands-on projects"
    },
    {
      type: "Higher Education",
      degree: "Bachelor of Commerce (Computer Applications)",
      institution: "Sri Chittem Narsi Reddy Govt. Degree College, Narayanpet",
      duration: "2018 - 2021"
    },
    {
      type: "Intermediate",
      degree: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Sai Junior College, Narayanpet",
      duration: "2016 - 2018"
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education & Learning Journey</h2>
        
        <div className="education-content">
          <motion.div 
            className="education-timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="education-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <span className="education-type">{item.type}</span>
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-duration">{item.duration}</p>
                {item.description && (
                  <p className="journey-text" style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="career-journey"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="journey-title">
              <Target size={24} />
              Career Transition Journey
            </h3>
            <p className="journey-text">
              After completing my graduation in 2021, I dedicated two years to preparing for banking sector examinations, 
              which helped me develop strong analytical and problem-solving skills. However, I discovered my true passion 
              lay in technology and software development.
            </p>
            <div className="journey-highlight">
              <strong>Strategic Career Shift:</strong> In 2024, I made a decisive transition to the IT field by enrolling in 
              NxtWave's intensive MERN Full Stack program. This comprehensive training equipped me with modern web development 
              skills and hands-on project experience, preparing me for a successful career in software development.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;