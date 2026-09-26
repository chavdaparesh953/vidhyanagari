'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onOpenEnquiry: () => void;
}

export default function ContactSection({ onOpenEnquiry }: ContactSectionProps) {
  return (
    <section id="contact" className="vn-contact-section">
      <div className="vn-container">
        <div>
          <div className="vn-eyebrow">
            <span>Official Campus Information</span>
          </div>
          <h2 className="vn-section-title">
            Visit Vidhyanagari Campus
          </h2>
          <p className="vn-section-subtitle">
            Our admissions office and academic counseling faculty welcome prospective students and parents for campus visits, counseling, and facility tours.
          </p>
        </div>

        <div className="vn-contact-grid">
          {/* Verified Contact Details Card */}
          <div className="vn-contact-info-panel">
            <div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c59b27' }}>
                Vishwa Mangalam Education Trust
              </span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0b192c', marginTop: '4px', marginBottom: '8px' }}>
                Central Admissions & Campus Office
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
                Reach out to our campus administrative desk directly or plan your visit during working hours.
              </p>

              <div className="vn-contact-details">
                {/* Address */}
                <div className="vn-contact-point">
                  <div className="vn-contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="vn-contact-text">
                    <h4>Campus Address</h4>
                    <p>
                      Vidhyanagari Campus, Motipura Bypass Road,<br />
                      On the bank of River Hathmati,<br />
                      Himmatnagar – 383001, Sabarkantha, Gujarat, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="vn-contact-point">
                  <div className="vn-contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="vn-contact-text">
                    <h4>Admissions & Campus Telephone</h4>
                    <p>
                      <a href="tel:+9102772244621" style={{ color: '#0b192c', textDecoration: 'none' }}>
                        +91 (02772) 244621
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="vn-contact-point">
                  <div className="vn-contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="vn-contact-text">
                    <h4>Official Email Inquiries</h4>
                    <p>
                      <a href="mailto:info@vidhyanagari.org" style={{ color: '#0b192c', textDecoration: 'none' }}>
                        info@vidhyanagari.org
                      </a>
                    </p>
                  </div>
                </div>

                {/* Office Timings */}
                <div className="vn-contact-point">
                  <div className="vn-contact-icon">
                    <Clock size={20} />
                  </div>
                  <div className="vn-contact-text">
                    <h4>Office Hours</h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155' }}>
                      Monday – Saturday: 9:00 AM – 5:00 PM<br />
                      <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Closed on Sundays and statutory holidays</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
              <button
                onClick={onOpenEnquiry}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Request Campus Counseling</span>
              </button>
            </div>
          </div>

          {/* Location Context & Directions Frame */}
          <div className="vn-map-frame">
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 600, color: '#dcad35', marginBottom: '16px' }}>
                <MapPin size={14} />
                <span>Geographical Location</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px', color: '#ffffff' }}>
                Himmatnagar, Sabarkantha
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '28px' }}>
                Strategically located on the Motipura Bypass Road along the picturesque bank of the Hathmati River, the campus is easily accessible via major state highways and regional bus connectivity across Sabarkantha, Idar, Prantij, and Ahmedabad.
              </p>

              <div style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '8px', padding: '20px', marginBottom: '28px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  Transit Guidance for Visitors:
                </div>
                <ul style={{ fontSize: '0.82rem', color: '#cbd5e1', paddingLeft: '18px', lineHeight: 1.6 }}>
                  <li>Approx. 3.5 km from Himmatnagar Central Railway Station</li>
                  <li>Approx. 2.8 km from Himmatnagar GSRTC Bus Depot</li>
                  <li>Directly connected along the Motipura Bypass arterial corridor</li>
                </ul>
              </div>

              <a
                href="https://maps.google.com/?q=Vidhyanagari+Campus+Himmatnagar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-white"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
