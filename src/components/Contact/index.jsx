import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_u2r6kji',
        'template_kmhqanh',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_name: 'Vemula Mounika'
        },
        '_n7rd76g2XAvlTEHl'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'vemulamounika540@gmail.com',
      href: 'mailto:vemulamounika540@gmail.com'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'vemulamounika1025',
      href: 'https://www.linkedin.com/in/vemulamounika1025/'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'mounika-2510',
      href: 'https://github.com/mounika-2510'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Get In Touch</h3>
            <p>
              I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
            
            <div className="contact-list">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number (optional)"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <p className="form-message success">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="form-message error">
                Something went wrong. Please try again or contact me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;