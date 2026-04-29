'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineCube, HiOutlineTruck, HiOutlineUserGroup, HiOutlineLocationMarker,
  HiOutlineSwitchHorizontal, HiOutlineBadgeCheck, HiOutlineReceiptRefund,
  HiOutlineClock, HiOutlineAdjustments, HiOutlineUsers, HiOutlineOfficeBuilding,
  HiOutlineCog, HiOutlineCurrencyDollar, HiOutlineCalculator, HiOutlineChartPie,
  HiOutlineChartBar, HiOutlineChatAlt2, HiOutlineExclamationCircle, HiOutlineUserCircle
} from 'react-icons/hi';
import styles from './ModulesSection.module.css';

const ModulesSection = () => {
  const modules = [
    { title: 'Parcel Booking', icon: <HiOutlineCube />, desc: 'Single & bulk parcel booking system' },
    { title: 'Pickup Management', icon: <HiOutlineTruck />, desc: 'Auto & manual pickup assignment' },
    { title: 'Real-Time Tracking', icon: <HiOutlineLocationMarker />, desc: 'Live parcel location tracking' },
    { title: 'Delivery Management', icon: <HiOutlineBadgeCheck />, desc: 'Successful & failed delivery control' },
    { title: 'Return Management', icon: <HiOutlineReceiptRefund />, desc: 'Return & reverse logistics system' },
    { title: 'Pending Orders', icon: <HiOutlineClock />, desc: 'Hold, delay & reschedule orders' },
    { title: 'Admin Dashboard', icon: <HiOutlineAdjustments />, desc: 'Full system control panel' },
    { title: 'User Management', icon: <HiOutlineUsers />, desc: 'Rider, Merchant, Agent control' },
    { title: 'Branch System', icon: <HiOutlineOfficeBuilding />, desc: 'Multi-branch management system' },
    { title: 'COD Management', icon: <HiOutlineCurrencyDollar />, desc: 'Cash on delivery tracking system' },
    { title: 'Accounts System', icon: <HiOutlineCalculator />, desc: 'Payments, invoices & settlements' },
    { title: 'Financial Reports', icon: <HiOutlineChartPie />, desc: 'Profit, loss & daily reports' },
    { title: 'Analytics Dashboard', icon: <HiOutlineChartBar />, desc: 'Business performance insights' },
    { title: 'SMS Notification', icon: <HiOutlineChatAlt2 />, desc: 'Auto SMS updates for customers' },
    { title: 'Complaint System', icon: <HiOutlineExclamationCircle />, desc: 'Customer complaint handling' },
    { title: 'Hub Transfer', icon: <HiOutlineSwitchHorizontal />, desc: 'Branch to branch parcel movement' },
    { title: 'Merchant App', icon: <HiOutlineUserGroup />, desc: 'Order create & manage system' },
    { title: 'Rider App', icon: <HiOutlineUserCircle />, desc: 'Delivery tracking & task management' },
    { title: 'Settings', icon: <HiOutlineCog />, desc: 'Zone, area, pricing & configuration' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="modules" className="section bg-offset" style={{ backgroundColor: 'var(--bg-offset)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Complete Courier System Modules</h2>
          <p className="section-subtitle">
            একটি সম্পূর্ণ কুরিয়ার ম্যানেজমেন্ট সিস্টেমের জন্য প্রয়োজনীয় সব মডিউল এখানে অন্তর্ভুক্ত
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.modulesGrid}
        >
          {modules.map((module, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.moduleCard}>
              <div className={styles.iconWrapper}>{module.icon}</div>
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <p className={styles.moduleDesc}>{module.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
