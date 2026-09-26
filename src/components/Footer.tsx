'use client';

import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, GraduationCap } from 'lucide-react';

interface FooterProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDisciplineClick = (e: React.MouseEvent, categoryId: string) => {
    e.preventDefault();
    onSelectCategory?.(categoryId);
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="vn-footer">
      <div className="vn-container">
        {/* Main Footer Grid */}
        <div className="vn-footer-top">
          {/* Column 1: Institutional Heritage & Brand */}
          <div className="vn-footer-brand-col">
            <div className="vn-footer-brand-wrap">
              <div className="vn-footer-logo-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Vidhyanagari Campus"
                  className="vn-footer-logo-img"
                />
              </div>
              <div>
                <div className="vn-footer-brand-name">VIDHYANAGARI CAMPUS</div>
                <div className="vn-footer-brand-sub">VISHWA MANGALAM EDUCATION TRUST (EST. 1982)</div>
              </div>
            </div>

            <p className="vn-footer-brand-desc">
              Established in 1982 by the visionary educationist Dr. D. L. Patel, managing 12 higher education institutions and 5 schools committed to disciplined, career-focused learning along the Hathmati River in Himmatnagar.
            </p>

            <div className="vn-footer-campus-address">
              <MapPin size={15} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Vidhyanagari Campus, Motipura Bypass Road, On the bank of River Hathmati, Himmatnagar – 383001, Gujarat.</span>
            </div>
          </div>

          {/* Column 2: Academic Disciplines */}
          <div className="vn-footer-col">
            <h5>Academic Disciplines</h5>
            <ul className="vn-footer-links">
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleDisciplineClick(e, 'management')}
                >
                  Management (MBA, BBA, B.Com)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleDisciplineClick(e, 'technology')}
                >
                  Computer Applications (MCA, BCA, PGDCA)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleDisciplineClick(e, 'healthcare')}
                >
                  Healthcare (B.Sc. Nursing, GNM, ANM)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleDisciplineClick(e, 'science')}
                >
                  Applied Sciences (B.Sc., M.Sc.)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleDisciplineClick(e, 'education')}
                >
                  Teacher Education (B.Ed., M.Ed., D.El.Ed.)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleDisciplineClick(e, 'legal')}
                >
                  Law & Social Sciences (LL.B., M.S.W.)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleDisciplineClick(e, 'vocational')}
                >
                  Parulba ITI (MLT & Stenography)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory Recognitions */}
          <div className="vn-footer-col">
            <h5>Statutory Approvals</h5>
            <ul className="vn-footer-links" style={{ color: '#cbd5e1' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} className="text-gold" />
                <span>AICTE Approved (MBA & MCA)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} className="text-gold" />
                <span>Indian Nursing Council (INC)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} className="text-gold" />
                <span>Gujarat Nursing Council (GNC)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} className="text-gold" />
                <span>National Council for Teacher Education</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GraduationCap size={14} className="text-gold" />
                <span>Recognized State University Affiliated</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions Helpdesk */}
          <div className="vn-footer-col">
            <h5>Admissions Desk 2026–27</h5>
            <ul className="vn-footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} className="text-gold" />
                <a href="tel:+9102772244621">+91 (02772) 244621</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} className="text-gold" />
                <a href="mailto:info@vidhyanagari.org">info@vidhyanagari.org</a>
              </li>
              <li style={{ color: '#94a3b8', fontSize: '0.82rem', marginTop: '6px' }}>
                Office Hours: Monday – Saturday<br />
                9:00 AM – 5:00 PM (IST)
              </li>
            </ul>

            <div style={{ marginTop: '18px' }}>
              <a href="#admissions" className="btn-gold" style={{ padding: '8px 16px', fontSize: '0.8rem', display: 'inline-flex' }}>
                <span>Apply for 2026–27</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="vn-footer-bottom">
          <div className="vn-footer-copy">
            © {new Date().getFullYear()} Vidhyanagari Campus • Vishwa Mangalam Education Trust. All Rights Reserved.
          </div>

          <div className="vn-footer-bottom-actions">
            <span className="vn-footer-trust-tag">Est. 1982 by Dr. D. L. Patel • Himmatnagar, Gujarat</span>
            <button
              onClick={scrollToTop}
              className="vn-back-to-top-btn"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
