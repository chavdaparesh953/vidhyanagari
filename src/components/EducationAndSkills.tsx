'use client';

import React from 'react';
import { BookOpenCheck, Hammer, Rocket } from 'lucide-react';

export default function EducationAndSkills() {
  const steps = [
    {
      num: '01 / Learn',
      icon: <BookOpenCheck size={28} />,
      title: 'Build Strong Foundations',
      desc: 'Master core academic principles under dedicated faculty guidance, establishing deep theoretical understanding across chosen management, science, or healthcare disciplines.',
    },
    {
      num: '02 / Develop',
      icon: <Hammer size={28} />,
      title: 'Cultivate Applied Skills',
      desc: 'Engage in hands-on laboratory experimentation, clinical patient care, coding assignments, or vocational workshops to bridge textbooks with authentic professional practice.',
    },
    {
      num: '03 / Grow',
      icon: <Rocket size={28} />,
      title: 'Prepare for Career Success',
      desc: 'Refine professional communication, ethical decision-making, and collaborative teamwork to step confidently into industry roles, regional institutions, or higher academic pursuits.',
    },
  ];

  return (
    <section className="vn-skills-section">
      <div className="vn-container">
        <div className="vn-skills-header-grid">
          <div>
            <div className="vn-eyebrow">
              <span>Educational Philosophy</span>
            </div>
            <h2 className="vn-section-title" style={{ marginBottom: 0 }}>
              Practical Education That Bridges Study and Industry
            </h2>
          </div>

          <div>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
              At Vidhyanagari, learning extends beyond lecture memorization. As envisioned by the Vishwa Mangalam Education Trust, our institutions focus on empowering individuals with technical proficiency, analytical competence, and self-reliance to make meaningful contributions to society.
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards: Learn, Develop, Grow */}
        <div className="vn-skills-triad">
          {steps.map((step, idx) => (
            <div key={idx} className="vn-skill-pill-card">
              <span className="vn-skill-step-num">{step.num}</span>
              <div style={{ color: '#0b192c', marginBottom: '16px' }}>
                {step.icon}
              </div>
              <h3 className="vn-skill-pill-title">{step.title}</h3>
              <p className="vn-skill-pill-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
