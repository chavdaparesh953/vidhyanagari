'use client';

import React from 'react';
import { Layers, Lightbulb, Compass, Waves, Briefcase, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function WhyVidhyanagari() {
  const pillars = [
    {
      num: '01',
      icon: <Layers size={22} />,
      title: 'Multidisciplinary Academic Depth',
      desc: 'Pursue management, software engineering, laboratory sciences, clinical healthcare, law, or technical vocations within one unified, collaborative campus.',
    },
    {
      num: '02',
      icon: <Lightbulb size={22} />,
      title: 'Applied & Laboratory-Centric Learning',
      desc: 'Education goes beyond rote textbooks. Hands-on coding in high-tech labs, clinical hospital bedside training, and research laboratories prepare work-ready graduates.',
    },
    {
      num: '03',
      icon: <Waves size={22} />,
      title: 'Serene Hathmati Riverside Setting',
      desc: 'Located on Motipura Bypass Road along the Hathmati River, the open campus fosters calmness, mental focus, and a peaceful environment conducive to intensive study.',
    },
    {
      num: '04',
      icon: <ShieldCheck size={22} />,
      title: 'Accredited & Recognized Curricula',
      desc: 'Programs comply strictly with statutory bodies including AICTE, Indian Nursing Council (INC), Gujarat Nursing Council (GNC), NCTE, and university affiliations.',
    },
    {
      num: '05',
      icon: <Briefcase size={22} />,
      title: 'Career & Industry Alignment',
      desc: 'Regular seminars, expert guest lectures, industrial visits, and structured internships prepare learners to meet the regional and national employment demands.',
    },
    {
      num: '06',
      icon: <Compass size={22} />,
      title: 'Value-Grounded Mentorship',
      desc: 'Carrying forward Dr. D. L. Patel’s vision, faculty mentors invest personally in student discipline, communication ethics, and community leadership.',
    },
  ];

  return (
    <section id="why-us" className="vn-why-section">
      <div className="vn-container">
        {/* Section Header */}
        <div className="vn-section-header-center">
          <div className="vn-eyebrow">
            <span>The Vidhyanagari Distinction</span>
          </div>
          <h2 className="vn-section-title">
            Engineered for Academic Rigor and Real-World Impact
          </h2>
          <p className="vn-section-subtitle">
            A purposeful collegiate environment combining four decades of trust with modern computing labs, healthcare facilities, and dedicated faculty mentorship.
          </p>
        </div>

        {/* 6 Pillars Architectural Grid */}
        <div className="vn-why-grid">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="vn-why-card">
              <div className="vn-why-card-header">
                <span className="vn-why-num">{pillar.num}</span>
                <div className="vn-why-icon-box">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="vn-why-card-title">{pillar.title}</h3>
              <p className="vn-why-card-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
