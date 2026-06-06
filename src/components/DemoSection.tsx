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
                    >
                        Launch Web Application Platform 🚀
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
                                <div className={styles.passwordBox}>
                                    <span>123456</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* APK Downloads Section */}
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
                        {/* Download paths assume files live inside your /public folder: public/apk/... */}
                        <a href="/apk/merchant" download className={`${styles.downloadBtn} ${styles.merchantApk}`}>
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Merchant Portal APK
                        </a>

                        <a href="/apk/Rider.apk" download className={`${styles.downloadBtn} ${styles.riderApk}`}>
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