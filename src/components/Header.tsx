'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, Download, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: (program?: string) => void;
  onOpenBrochure: () => void;
}

export default function Header({ onOpenEnquiry, onOpenBrochure }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopNavLinks = [
    { label: 'About Campus', href: '#about' },
    { label: 'Why Vidhyanagari', href: '#why-us' },
    { label: 'Programs', href: '#programs', badge: '18+ Degrees' },
    { label: 'Campus Life', href: '#campus' },
    { label: 'Admissions 2026', href: '#admissions', live: true },
    { label: 'Contact', href: '#contact' },
  ];

  const mobileNavLinks = [
    { label: 'About Trust & Heritage', href: '#about', desc: 'Est. 1982 by Dr. D. L. Patel' },
    { label: 'Why Vidhyanagari', href: '#why-us', desc: 'Accreditation, Faculty & Riverside Campus' },
    { label: 'All 18+ Programs', href: '#programs', badge: '18+ Degrees', desc: 'Nursing, Pharmacy, Engg, Education & Science' },
    { label: 'Flagship Degrees', href: '#featured', desc: 'Industry-integrated curriculum' },
    { label: 'Campus Life & Facilities', href: '#campus', desc: 'Hostels, transport, sports & hospital labs' },
    { label: 'Admissions 2026–27', href: '#admissions', live: true, desc: 'Criteria, seat matrices & application steps' },
    { label: 'FAQ', href: '#faq', desc: 'Answers to student & parent queries' },
    { label: 'Contact & Directions', href: '#contact', desc: 'Motipura Bypass Road, Himmatnagar' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Academic Institutional Top Utility Bar */}
      <div className="vn-topbar">
        <div className="vn-container vn-topbar-inner">
          <div className="vn-topbar-contacts">
            <span className="vn-topbar-item">
              <Phone size={13} className="text-gold" />
              <a href="tel:+9102772244621">+91 (02772) 244621</a>
            </span>
            <span className="vn-topbar-item vn-topbar-email">
              <Mail size={13} className="text-gold" />
              <a href="mailto:info@vidhyanagari.org">info@vidhyanagari.org</a>
            </span>
            <span className="vn-topbar-item vn-topbar-location">
              <MapPin size={13} className="text-gold" />
              <span>Himmatnagar, Gujarat</span>
            </span>
          </div>

          <div className="vn-topbar-badges">
            <span className="vn-topbar-trust">
              Vishwa Mangalam Education Trust (Est. 1982)
            </span>
            <span className="vn-topbar-sep">•</span>
            <span className="vn-topbar-approvals">
              Approved by AICTE, INC, GNC & NCTE
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky University Navigation Header */}
      <header className={`vn-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="vn-container">
          <div className="vn-nav-inner">
            {/* Official Vidhyanagari Brand Logo */}
            <a href="#" className="vn-brand" aria-label="Vidhyanagari Campus Homepage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Vidhyanagari Campus"
                className="vn-header-logo-img"
              />
            </a>

            {/* Desktop Navigation Menu */}
            <nav className="vn-nav-links" aria-label="Primary Navigation">
              {desktopNavLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="vn-nav-link"
                >
                  {link.live && <span className="vn-nav-live-dot" aria-hidden="true" />}
                  <span>{link.label}</span>
                  {link.badge && <span className="vn-nav-badge">{link.badge}</span>}
                </button>
              ))}
            </nav>

            {/* Desktop Primary Action CTAs */}
            <div className="vn-header-actions">
              <button
                onClick={onOpenBrochure}
                className="vn-header-brochure-btn"
                title="Download 2026-27 Prospectus"
              >
                <Download size={14} />
                <span>Brochure</span>
              </button>

              <button
                onClick={() => onOpenEnquiry()}
                className="vn-header-enquire-btn"
                id="header-enquire-now-btn"
              >
                <span>Enquire Now</span>
                <ArrowRight size={15} />
              </button>

              {/* Mobile Drawer Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="vn-mobile-toggle"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      <div
        className={`vn-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Off-Canvas Drawer */}
      <aside className={`vn-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="vn-mobile-drawer-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Vidhyanagari Logo"
            className="vn-mobile-drawer-logo"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="vn-mobile-drawer-close"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="vn-mobile-drawer-trust">
          <span>Vishwa Mangalam Education Trust • Est. 1982</span>
        </div>

        <nav className="vn-mobile-nav-list">
          {mobileNavLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="vn-mobile-nav-item"
            >
              <div className="vn-mobile-nav-item-content">
                <div className="vn-mobile-nav-item-header">
                  {link.live && <span className="vn-nav-live-dot" aria-hidden="true" />}
                  <span className="vn-mobile-nav-item-title">{link.label}</span>
                  {link.badge && <span className="vn-nav-badge">{link.badge}</span>}
                </div>
                {link.desc && <span className="vn-mobile-nav-item-desc">{link.desc}</span>}
              </div>
              <ArrowRight size={15} className="text-gold" />
            </button>
          ))}
        </nav>

        <div className="vn-mobile-drawer-footer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="vn-header-enquire-btn"
            style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
          >
            <span>Enquire for Admissions</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBrochure();
            }}
            className="vn-header-brochure-btn"
            style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
          >
            <Download size={15} />
            <span>Download Prospectus</span>
          </button>

          <div className="vn-mobile-drawer-phone">
            <Phone size={13} className="text-gold" />
            <a href="tel:+9102772244621">Admissions Helpline: +91 (02772) 244621</a>
          </div>
        </div>
      </aside>
    </>
  );
}
