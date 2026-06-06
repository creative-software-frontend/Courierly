'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './DemoSection.module.css';

interface CredentialCard {
    role: string;
    email: string;
    color: string;
}

const DemoSection = () => {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const credentials: CredentialCard[] = [
        { role: 'System Admin', email: 'admin@gmail.com', color: '#4f46e5' },
        { role: 'Branch / Hub Manager', email: 'hub@gmail.com', color: '#0ea5e9' },
        { role: 'Delivery Rider', email: 'rider@gmail.com', color: '#10b981' },
        { role: 'Merchant Portal', email: 'merchant@gmail.com', color: '#f59e0b' },
    ];

    const handleCopy = (email: string) => {
        navigator.clipboard.writeText(email);
        setCopiedText(email);
        setTimeout(() => setCopiedText(null), 2000);
    };

    return (
        <section id="demo" className={styles.section}>
            <div className={styles.container}>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.badge}>Live Environment</span>
                    <h2 className={styles.title}>Explore the Courier Software</h2>
                    <p className={styles.subtitle}>
                        Test out our live demo systems across multiple operational viewports. Use the access credentials provided below.
                    </p>

                    <a
                        href="https://courier.demo-bd.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mainDemoButton}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: '16px 36px',
                            borderRadius: '12px', // Softer, modern roundness
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            cursor: 'pointer',
                            position: 'relative',
                            zIndex: 10,
                            backgroundColor: 'var(--dark)', // Uses your global secondary theme background color
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 10px 25px -5px rgba(30, 39, 46, 0.3), 0 8px 16px -6px rgba(30, 39, 46, 0.2)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth dynamic physics curves
                        }}
                        // Quick inline actions to mimic modular hover mechanics smoothly
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.backgroundColor = 'var(--primary)'; // Dynamically switches to your brand green
                            e.currentTarget.style.boxShadow = '0 20px 30px -8px rgba(119, 177, 65, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.backgroundColor = 'var(--dark)';
                            e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(30, 39, 46, 0.3), 0 8px 16px -6px rgba(30, 39, 46, 0.2)';
                        }}
                    >
                        <span>Click the link:</span>
                        <span style={{ textDecoration: 'underline', opacity: 0.95, color: '#e2e8f0' }}>
                            https://courier.demo-bd.com
                        </span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </motion.div>

                {/* Credentials Grid (4 Boxes) */}
                <div className={styles.grid}>
                    {credentials.map((account, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={styles.card}
                            style={{ '--accent-color': account.color } as React.CSSProperties}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.dot} />
                                <h3>{account.role}</h3>
                            </div>

                            <div className={styles.fieldGroup}>
                                <label>Email Address</label>
                                <div className={styles.copyWrapper} onClick={() => handleCopy(account.email)}>
                                    <span>{account.email}</span>
                                    <button className={styles.copyBtn}>
                                        {copiedText === account.email ? '✓ Copied' : 'Copy'}
                                    </button>
                                </div>
                            </div>

                            <div className={styles.fieldGroup}>
                                <label>Password</label>
                                {/* Wrap it in the copyWrapper to make it clickable, just like the email field */}
                                <div className={styles.copyWrapper} onClick={() => handleCopy('123456')}>
                                    <span>123456</span>
                                    <button className={styles.copyBtn}>
                                        {copiedText === '123456' ? '✓ Copied' : 'Copy'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.apkSection}
                >
                    <div className={styles.apkTextContainer}>
                        <h3>Download Mobile Applications</h3>
                        <p>Install production-ready android binaries directly onto test devices to view native flows.</p>
                    </div>

                    <div className={styles.apkButtonGroup}>
                        {/* FIXED: Pointing to merchant.apk with file download attribute */}
                        <a
                            href="/apk/merchant.apk"
                            download="merchant.apk"
                            className={`${styles.downloadBtn} ${styles.merchantApk}`}
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Merchant Portal APK
                        </a>

                        {/* FIXED: Lowercase route matching the newly renamed rider.apk */}
                        <a
                            href="/apk/rider.apk"
                            download="rider.apk"
                            className={`${styles.downloadBtn} ${styles.riderApk}`}
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Rider Delivery APK
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default DemoSection;