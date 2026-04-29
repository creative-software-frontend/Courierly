'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--dark)', 
      color: 'white', 
      padding: '40px 0', 
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand/Logo Area */}
          <motion.h3 
            style={{ 
              marginBottom: '10px', 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              letterSpacing: '1px'
            }}
            whileHover={{ scale: 1.05 }}
          >
            Courierly
          </motion.h3>

          <p style={{ 
            fontSize: '0.9rem', 
            opacity: 0.6, 
            maxWidth: '500px', 
            margin: '0 auto 20px' 
          }}>
            Providing the most reliable and fastest automated logistics solution for your business.
          </p>

          <hr style={{ 
            border: 'none', 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            margin: '20px auto',
            width: '100px'
          }} />

          <motion.p 
            style={{ fontSize: '0.85rem', opacity: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ delay: 0.3 }}
          >
            © 2026 Courierly. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;