'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import styles from './ContactSection.module.css';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form Data:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Thank you! Your request has been sent.');
    reset();
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            আমরা ২৪ ঘণ্টার মধ্যে রিপ্লাই দিই
          </p>
        </motion.div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            {[
              { icon: <HiPhone />, title: 'Phone', content: '09649-866 977' },
              { icon: <HiWhatsApp />, title: 'whatsApp', content: '01978866977' },
              { icon: <HiMail />, title: 'Email', content: 'info@courierly.com' },
              { icon: <HiLocationMarker />, title: 'Address', content: 'Dhaka, Bangladesh' }
            ].map((info, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className={styles.infoItem}
              >
                <div className={styles.infoIcon}>{info.icon}</div>
                <div className={styles.infoText}>
                  <h4>{info.title}</h4>
                  <p>{info.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.contactForm}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                  {...register('name')}
                  placeholder="John Doe"
                  className={styles.input}
                />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                  {...register('phone')}
                  placeholder="017XXXXXXXX"
                  className={styles.input}
                />
                {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  {...register('email')}
                  placeholder="example@mail.com"
                  className={styles.input}
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  {...register('message')}
                  placeholder="How can we help you?"
                  className={`${styles.input} ${styles.textarea}`}
                />
                {errors.message && <span className={styles.error}>{errors.message.message}</span>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary ${styles.submitBtn}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
