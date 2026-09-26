'use client';

import React from 'react';
import { Sparkles, ShieldCheck, GraduationCap, Phone, Award } from 'lucide-react';

export default function AdmissionsMarquee() {
  const items = [
    { text: 'Admissions Open for Academic Year 2026–27', icon: <Sparkles size={13} className="text-gold" /> },
    { text: 'AICTE-Approved Master of Business Administration (MBA) & MCA', icon: <ShieldCheck size={13} className="text-gold" /> },
    { text: 'B.Sc. Nursing & GNM Registrations Active • INC & GNC Approved', icon: <Award size={13} className="text-gold" /> },
    { text: 'Vishwa Mangalam Education Trust • 40+ Years of Academic Heritage (Est. 1982)', icon: <GraduationCap size={13} className="text-gold" /> },
    { text: 'Admissions Helpline: +91 (02772) 244621', icon: <Phone size={13} className="text-gold" /> },
    { text: 'BBA • BCA • B.Com • B.Sc • M.Sc • B.Ed • M.Ed • Parulba ITI', icon: <ShieldCheck size={13} className="text-gold" /> },
  ];

  return (
    <div className="vn-marquee-bar" aria-label="Admissions Announcements">
      <div className="vn-marquee-track">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="vn-marquee-item">
            <span className="vn-marquee-icon">{item.icon}</span>
            <span className="vn-marquee-text">{item.text}</span>
            <span className="vn-marquee-sep">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
