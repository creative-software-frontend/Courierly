'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect which section is in view
      const sections = ['modules', 'pricing', 'projects', 'clients', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Modules', href: '#modules', id: 'modules' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : styles.navbarTransparent}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Courierly
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={link.href}
                className={`
                  ${styles.navLink} 
                  ${scrolled ? styles.navLinkScrolled : styles.navLinkTransparent}
                  ${activeSection === link.id ? styles.activeLink : ''}
                `}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: scrolled ? 'var(--primary)' : 'white' }}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <li key={link.name} style={{ width: '100%' }}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.activeLink : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;