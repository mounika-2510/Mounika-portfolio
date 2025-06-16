import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';
import './index.css';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Build Your Own Static Website",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747479783/Screenshot_1260_rlgjj8.png"
    },
    {
      title: "Build Your Own Responsive Website",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747479821/Screenshot_1261_jyrrlx.png"
    },
    {
      title: "Programming Foundations",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747479849/Screenshot_1262_rrubp0.png"
    },
    {
      title: "Introduction to Databases",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747479886/Screenshot_1263_vfgwlu.png"
    },
    {
      title: "Developer Foundations",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747479924/Screenshot_1264_rdp4hm.png"
    },
    {
      title: "Build Your Own Dynamic Web Application",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747479945/Screenshot_1265_wfuwft.png"
    },
    {
      title: "JavaScript Essentials",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747480018/Screenshot_1266_tz8lyv.png"
    },
    {
      title: "Responsive Web Design using Flexbox",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747480040/Screenshot_1267_srjoeb.png"
    },
    {
      title: "Node JS",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747480060/Screenshot_1268_anq0j8.png"
    },
    {
      title: "React JS - Getting Started",
      image: "https://res.cloudinary.com/drecb9hgv/image/upload/v1747480083/Screenshot_1269_ldpoh0.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const certVariants = {
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
    <section id="certificates" className="certificates section">
      <div className="container">
        <h2 className="section-title">Certificates & Achievements</h2>
        
        <motion.div 
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              variants={certVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
                <div className="certificate-overlay">
                  <Award size={30} />
                  <span>View Certificate</span>
                </div>
              </div>
              <h3 className="certificate-title">{cert.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for certificate preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="certificate-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="certificate-close"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} />
              <h3>{selectedCert.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;