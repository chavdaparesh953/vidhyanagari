'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Compass, Sparkles } from 'lucide-react';

interface FeaturedProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export default function FeaturedPrograms({ onSelectProgram }: FeaturedProgramsProps) {
  const featured = [
    {
      category: 'Management & Strategy',
      code: 'MBA',
      fullName: 'Master of Business Administration',
      approval: 'AICTE Approved • Affiliated to State University',
      summary: 'Equips graduates with strategic acumen, corporate finance, market leadership, and organizational competencies for competitive business environments.',
      specs: ['2-Year Postgraduate Program', 'Specializations: Finance, Marketing & HR', 'Executive Seminars & Corporate Visits'],
      badge: 'Flagship Master',
    },
    {
      category: 'Computer Applications',
      code: 'MCA',
      fullName: 'Master of Computer Applications',
      approval: 'AICTE Approved • Affiliated to State University',
      summary: 'Advanced software engineering, modern cloud frameworks, scalable database architectures, and applied full-stack software development.',
      specs: ['2-Year Master Degree', 'Dedicated Computing & IT Labs', 'Project-Driven Applied Curriculum'],
      badge: 'High-Demand Tech',
    },
    {
      category: 'Healthcare Sciences',
      code: 'B.Sc. Nursing',
      fullName: 'Bachelor of Science in Nursing',
      approval: 'Approved by INC (New Delhi) & Gujarat Nursing Council',
      summary: 'Professional healthcare clinical education with rigorous bedside hospital rotations, clinical simulation labs, and ethical patient care.',
      specs: ['4-Year Professional Degree', 'Affiliated Multi-Specialty Hospital Rotations', 'Global & National Healthcare Licensure'],
      badge: 'Healthcare Flagship',
    },
    {
      category: 'Teacher Education',
      code: 'B.Ed.',
      fullName: 'Bachelor of Education',
      approval: 'Recognized by National Council for Teacher Education (NCTE)',
      summary: 'Prepares skilled, dedicated educators with modern instructional pedagogies, school internship immersion, and educational psychology.',
      specs: ['2-Year Professional Degree', 'Mandatory School Teaching Internship', 'Eligible for Government & Private Schools'],
      badge: 'NCTE Approved',
    },
    {
      category: 'Information Technology',
      code: 'BCA',
      fullName: 'Bachelor of Computer Applications',
      approval: 'Affiliated to State University',
      summary: 'Practical computing program introducing undergraduate students to programming, algorithm design, web development, and cloud tools.',
      specs: ['3-Year Undergraduate Degree', 'Hands-On Coding Lab Practice', 'Core Foundation for Modern IT Careers'],
      badge: 'Undergraduate IT',
    },
    {
      category: 'Natural Sciences',
      code: 'M.Sc. & B.Sc.',
      fullName: 'Chemistry & Microbiology Sciences',
      approval: 'Affiliated to State University',
      summary: 'Deep scientific inquiry with specialized laboratory courses in Chemistry, Microbiology, Physics, and research instrumentation.',
      specs: ['Dedicated Scientific Research Labs', 'Analytical Instrumentation Training', 'Pathway to Industrial & Academic R&D'],
      badge: 'Applied Sciences',
    },
  ];

  return (
    <section id="featured" className="vn-featured-section">
      <div className="vn-container">
        {/* Section Header */}
        <div className="vn-section-header-dark">
          <div className="vn-eyebrow vn-eyebrow-dark">
            <Sparkles size={14} className="text-gold" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="vn-section-title vn-section-title-dark">
            Flagship Programs at Vidhyanagari
          </h2>
          <p className="vn-section-subtitle vn-section-subtitle-dark">
            Discover our most sought-after higher education degrees and accredited credentials, structured for academic excellence and long-term career success.
          </p>
        </div>

        {/* Featured Cards Grid */}
        <div className="vn-featured-grid">
          {featured.map((item, idx) => (
            <div key={idx} className="vn-featured-card">
              <div className="vn-featured-card-top">
                <span className="vn-featured-category">{item.category}</span>
                <span className="vn-featured-pill">{item.badge}</span>
              </div>

              <div className="vn-featured-heading-wrap">
                <span className="vn-featured-code">{item.code}</span>
                <h3 className="vn-featured-name">{item.fullName}</h3>
              </div>

              <div className="vn-featured-approval">
                <ShieldCheck size={14} className="text-gold" />
                <span>{item.approval}</span>
              </div>

              <p className="vn-featured-summary">{item.summary}</p>

              <div className="vn-featured-specs">
                {item.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="vn-featured-spec-item">
                    <CheckCircle2 size={13} className="text-gold" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="vn-featured-card-actions">
                <button
                  onClick={() => onSelectProgram(`${item.code} - ${item.fullName}`)}
                  className="btn-gold vn-featured-btn"
                  title={`Apply for ${item.fullName}`}
                >
                  <span>Enquire for Admissions</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
