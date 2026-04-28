'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import styles from './PricingSection.module.css';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      desc: 'Small Courier Business',
      price: '50,000',
      features: ['Basic Tracking System', 'Order Management', 'Limited Support'],
      popular: false,
      btnText: 'Order Now',
    },
    {
      name: 'Business',
      desc: 'Growing Courier Company',
      price: '5,00,000',
      features: [
        'Full Automation System',
        'Real-Time Tracking',
        'Multi Branch Support',
        'Advanced Reports',
      ],
      popular: true,
      btnText: 'Order Now',
    },
    {
      name: 'Enterprise',
      desc: 'Large Courier Network',
      price: '10,00,000',
      features: [
        'Custom Development',
        'Dedicated Server',
        'API Integration',
        'Priority Support',
      ],
      popular: false,
      btnText: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Pricing Plan</h2>
          <p className="section-subtitle">
            আপনার ব্যবসার সাইজ অনুযায়ী সঠিক প্যাকেজ নির্বাচন করুন
          </p>
        </motion.div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${styles.pricingCard} ${plan.popular ? styles.pricingCardPopular : ''}`}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.desc}</p>
              <div className={styles.price}>
                <span className={styles.currency}>৳</span>
                {plan.price}
              </div>
              <ul className={styles.featureList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    <HiCheck className={styles.featureIcon} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? '' : 'btn-primary'} ${styles.btnAction}`}>
                {plan.btnText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
