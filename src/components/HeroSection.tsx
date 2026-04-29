'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const badges = [
    'Real-Time Tracking',
    'Auto Dispatch',
    'Multi Branch',
    'COD System',
  ];

  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          Smart Courier Software
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.subtitle}
        >
          Booking থেকে Delivery পর্যন্ত সম্পূর্ণ অটোমেটেড কুরিয়ার ম্যানেজমেন্ট সিস্টেম
        </motion.p>

        <div className={styles.badgeContainer}>
          {badges.map((badge, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.15) }}
              className={styles.badge}
            >
              <HiCheckCircle className={styles.badgeIcon} />
              {badge}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className={styles.videoWrapper}
        >
          {/* Updated the src below to your specific video ID */}
          <iframe
            src="https://www.youtube.com/embed/Dscoh8wYUSQ?si=lAJ8qmHqvQISSL5G" 
            title="Courierly Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className={styles.buttonGroup}
        >
          <button className="btn btn-primary">Free Demo Request</button>
          <button className="btn btn-whatsapp">
            <FaWhatsapp />Chat on WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;