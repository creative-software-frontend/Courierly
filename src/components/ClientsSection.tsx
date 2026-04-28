'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ClientsSection.module.css';

const ClientsSection = () => {
  const clients = [
    { 
      name: '1', 
      logo: '/1.jpg' 
    },
    { 
      name: '2', 
      logo: '/2.jpg' 
    },
    { 
      name: '3', 
      logo: '/3.jpg' 
    },
    { 
      name: '4', 
      logo: '/4.jpg' 
    },
 
   
    { 
      name: '5', 
      logo: '/5.jpg' 
    },
    { 
      name: '6', 
      logo: '/6.jpg' 
    },
{ 
      name: '7', 
      logo: '/7.jpg' 
    },{ 
      name: '8', 
      logo: '/8.jpg' 
    },{ 
      name: '9', 
      logo: '/9.jpg' 
    },{ 
      name: '10', 
      logo: '/10.jpg' 
    },{ 
      name: '11', 
      logo: '/11.jpg' 
    },{ 
      name: '12', 
      logo: '/12.jpg' 
    },{ 
      name: '13', 
      logo: '/13.jpg' 
    },
    { 
      name: '14', 
      logo: '/14.jpg' 
    },
    { 
      name: '15', 
      logo: '/15.jpg' 
    },
    { 
      name: '16', 
      logo: '/16.jpg' 
    },
    { 
      name: '17', 
      logo: '/17.jpg' 
    },
    { 
      name: '18', 
      logo: '/18.jpg' 
    },
    { 
      name: '19', 
      logo: '/19.jpg' 
    },
    { 
      name: '20', 
      logo: '/20.jpg' 
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