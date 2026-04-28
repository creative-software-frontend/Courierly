'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ClientsSection.module.css';

const ClientsSection = () => {
  const clients = [
    { 
      name: 'Fastrack', 
      logo: '/fastrack.png' 
    },
    { 
      name: 'FedEx', 
      logo: '/fedex.png' 
    },
    { 
      name: 'UPS', 
      logo: '/ups.png' 
    },
    { 
      name: 'Aramex', 
      logo: '/aramex.png' 
    },
 
   
    { 
      name: 'DHL', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/DHL_Express_logo.svg' 
    },
    { 
      name: 'Maersk', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Maersk_Group_Logo.svg' 
    },

  ];

  // Double the array for infinite scroll effect
  const displayClients = [...clients, ...clients];

  return (
    <section id="clients" className="section bg-offset">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Trusted Clients</h2>
          <p className="section-subtitle">
            আমরা বিভিন্ন কুরিয়ার ও ই-কমার্স কোম্পানির সাথে সফলভাবে কাজ করছি
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{ once: true }}
          className={styles.scroller}
        >
          <div className={styles.scrollerInner}>
            {displayClients.map((client, index) => (
              <motion.div
                key={index}
                className={styles.clientBox}
                whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className={styles.clientLogo} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;