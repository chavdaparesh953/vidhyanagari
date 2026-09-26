'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { ArrowRight, BookOpen, Laptop, Microscope, Stethoscope, GraduationCap, Scale, Wrench, Search, X, Check, ShieldCheck, Clock, Award } from 'lucide-react';

interface ProgramExplorerProps {
  onSelectProgram: (programName: string) => void;
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

interface ProgramItem {
  name: string;
  code: string;
  level: string;
  duration: string;
  eligibility: string;
  approval: string;
  desc: string;
  highlights: string[];
}

interface ProgramCategory {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  programs: ProgramItem[];
}

export default function ProgramExplorer({
  onSelectProgram,
  selectedCategory,
  onCategoryChange,
}: ProgramExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
      setSearchQuery('');
    }
  }, [selectedCategory]);

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    onCategoryChange?.(catId);
  };

  const categories: ProgramCategory[] = [
    {
      id: 'management',
      name: 'Management & Commerce',
      shortName: 'Management',
      icon: <BookOpen size={16} />,
      programs: [
        {
          name: 'Master of Business Administration',
          code: 'MBA',
          level: 'PG Degree',
          duration: '2 Years (Full-Time)',
          eligibility: 'Bachelor Degree in any discipline with minimum required aggregate',
          approval: 'AICTE Approved • Affiliated to State University',
          desc: 'Comprehensive executive curriculum covering Strategic Management, Corporate Finance, Digital Marketing, and Human Resource Leadership.',
          highlights: ['Specializations in Finance, Marketing & HR', 'Industry Internships & Case Studies', 'Executive Leadership Seminars'],
        },
        {
          name: 'Bachelor of Business Administration',
          code: 'BBA',
          level: 'UG Degree',
          duration: '3 Years (Full-Time)',
          eligibility: '10+2 (Higher Secondary) in any stream from recognized board',
          approval: 'Affiliated to State University',
          desc: 'Foundational business education building entrepreneurial insight, organizational behavior, business mathematics, and communication excellence.',
          highlights: ['Business Communication Lab', 'Corporate Field Exposure', 'Foundation for Advanced Management'],
        },
        {
          name: 'Bachelor of Commerce',
          code: 'B.Com.',
          level: 'UG Degree',
          duration: '3 Years (Full-Time)',
          eligibility: '10+2 with Commerce / Accountancy or General Stream',
          approval: 'Affiliated to State University',
          desc: 'Rigorous grounding in corporate accounting, taxation frameworks, business law, financial management, and banking practices.',
          highlights: ['Advanced Financial Accounting', 'Corporate Taxation & Auditing', 'Banking & Financial Markets'],
        },
      ],
    },
    {
      id: 'technology',
      name: 'Computer Applications & IT',
      shortName: 'IT & Computing',
      icon: <Laptop size={16} />,
      programs: [
        {
          name: 'Master of Computer Applications',
          code: 'MCA',
          level: 'PG Degree',
          duration: '2 Years (Full-Time)',
          eligibility: 'BCA / B.Sc. IT / Relevant Bachelor Degree with Mathematics at 10+2 or Degree level',
          approval: 'AICTE Approved • Affiliated to State University',
          desc: 'Advanced software engineering, modern database architectures, cloud applications, distributed computing, and full-stack development.',
          highlights: ['Dedicated High-Performance Computing Lab', 'Project-Driven Capstone Implementation', 'Hands-On Full Stack Technologies'],
        },
        {
          name: 'Bachelor of Computer Applications',
          code: 'BCA',
          level: 'UG Degree',
          duration: '3 Years (Full-Time)',
          eligibility: '10+2 (Higher Secondary) with English as a subject',
          approval: 'Affiliated to State University',
          desc: 'Comprehensive undergraduate programming education in Python, Java, Web Technologies, Database Systems, and Network Fundamentals.',
          highlights: ['Hands-On Coding & Lab Sessions', 'Web Development & UI Frameworks', 'Core Foundation for IT Careers'],
        },
        {
          name: 'Post Graduate Diploma in Computer Applications',
          code: 'PGDCA',
          level: 'PG Diploma',
          duration: '1 Year (Full-Time)',
          eligibility: 'Graduation in any discipline from a recognized university',
          approval: 'Affiliated to State University',
          desc: 'Fast-track computing qualification equipping non-technical graduates with essential database tools, office automation, and software skills.',
          highlights: ['Essential Programming & Scripting', 'Database Management Fundamentals', 'Career Acceleration for Non-IT Grads'],
        },
      ],
    },
    {
      id: 'science',
      name: 'Natural & Applied Sciences',
      shortName: 'Sciences',
      icon: <Microscope size={16} />,
      programs: [
        {
          name: 'Bachelor of Science',
          code: 'B.Sc.',
          level: 'UG Degree',
          duration: '3 Years (Full-Time)',
          eligibility: '10+2 (Science Stream with PCM / PCB)',
          approval: 'Affiliated to State University',
          desc: 'Structured science education with dedicated analytical laboratories in Chemistry, Microbiology, Physics, and Advanced Mathematics.',
          highlights: ['Dedicated Chemistry & Microbiology Labs', 'Analytical Instrumentation Training', 'Pathway to Industrial & Academic R&D'],
        },
        {
          name: 'Master of Science',
          code: 'M.Sc.',
          level: 'PG Degree',
          duration: '2 Years (Full-Time)',
          eligibility: 'B.Sc. in relevant scientific discipline',
          approval: 'Affiliated to State University',
          desc: 'Advanced research-focused curriculum in specialized chemical and microbial sciences, analytical experimentation, and dissertation work.',
          highlights: ['Advanced Instrumental Analysis', 'Guided Research Dissertation', 'Industrial Chemistry & Bio-Applications'],
        },
      ],
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Nursing',
      shortName: 'Nursing & Health',
      icon: <Stethoscope size={16} />,
      programs: [
        {
          name: 'Bachelor of Science in Nursing',
          code: 'B.Sc. Nursing',
          level: 'UG Degree',
          duration: '4 Years (Full-Time)',
          eligibility: '10+2 with Physics, Chemistry, Biology & English (Min. 45% aggregate)',
          approval: 'Recognized by Indian Nursing Council (INC) & Gujarat Nursing Council (GNC)',
          desc: 'Comprehensive clinical nursing curriculum covering medical-surgical nursing, maternal & pediatric care, community health, and emergency triage.',
          highlights: ['Affiliated Hospital Clinical Rotations', 'Advanced Clinical Simulation Suites', 'High Global & National Healthcare Demand'],
        },
        {
          name: 'General Nursing and Midwifery',
          code: 'G.N.M.',
          level: 'Diploma',
          duration: '3 Years (Full-Time)',
          eligibility: '10+2 in any stream (Science stream preferred, min. 40%)',
          approval: 'Recognized by Indian Nursing Council (INC) & GNC',
          desc: 'Bedside patient care, operation theater assistance, rural healthcare delivery, pharmacology, and comprehensive clinical practicum.',
          highlights: ['Hands-On Ward & ICU Training', 'Community Healthcare Postings', 'Immediate Professional Clinical Licensure'],
        },
        {
          name: 'Auxiliary Nurse Midwife',
          code: 'A.N.M.',
          level: 'Diploma',
          duration: '2 Years (Full-Time)',
          eligibility: '10+2 in any stream from recognized board',
          approval: 'Recognized by Indian Nursing Council (INC) & GNC',
          desc: 'Community health service, maternal and newborn care, primary healthcare center management, and immunization protocols.',
          highlights: ['Primary Health Center Fieldwork', 'Maternal & Child Health Specialization', 'Grassroots Healthcare Employment'],
        },
      ],
    },
    {
      id: 'education',
      name: 'Education & Pedagogy',
      shortName: 'Education (B.Ed)',
      icon: <GraduationCap size={16} />,
      programs: [
        {
          name: 'Bachelor of Education',
          code: 'B.Ed.',
          level: 'UG Degree',
          duration: '2 Years (Full-Time)',
          eligibility: 'Bachelor or Master Degree with minimum 50% marks',
          approval: 'Recognized by National Council for Teacher Education (NCTE)',
          desc: 'Rigorous teacher education focusing on instructional design, child psychology, pedagogical methodology, educational technology, and school teaching internships.',
          highlights: ['Mandatory School Teaching Internship', 'Modern Pedagogical Training & Microteaching', 'Eligible for Government & Private Teacher Recruitment'],
        },
        {
          name: 'Master of Education',
          code: 'M.Ed.',
          level: 'PG Degree',
          duration: '2 Years (Full-Time)',
          eligibility: 'B.Ed. or B.El.Ed. degree with minimum required percentage',
          approval: 'Recognized by NCTE • State University Affiliated',
          desc: 'Advanced pedagogical research, curriculum development, educational administration, policy analysis, and teacher-educator training.',
          highlights: ['Educational Administration & Policy', 'Advanced Pedagogical Research', 'Preparation for College Lectureship'],
        },
        {
          name: 'Diploma in Elementary Education (D.El.Ed. / PTC)',
          code: 'D.El.Ed.',
          level: 'Diploma',
          duration: '2 Years (Full-Time)',
          eligibility: '10+2 with minimum required percentage',
          approval: 'Recognized by NCTE & State Education Department',
          desc: 'Foundational training for primary school educators, child-centric teaching practices, and classroom management.',
          highlights: ['Primary School Classroom Immersion', 'Child Psychology & Creative Learning', 'Government Elementary School Eligibility'],
        },
      ],
    },
    {
      id: 'legal',
      name: 'Law & Social Sciences',
      shortName: 'Law & Social Work',
      icon: <Scale size={16} />,
      programs: [
        {
          name: 'Bachelor of Laws',
          code: 'LL.B. (3-Year)',
          level: 'UG Degree',
          duration: '3 Years (Full-Time)',
          eligibility: 'Graduation in any discipline from a recognized university',
          approval: 'Affiliated to State University & Bar Council Guidelines',
          desc: 'Rigorous legal education covering Constitutional Law, Criminal Jurisprudence, Civil Procedure, Corporate Law, and Moot Court training.',
          highlights: ['Moot Court Practical Sessions', 'Legal Aid Clinic & Court Visits', 'Comprehensive Bar Examination Preparation'],
        },
        {
          name: 'Master of Social Work',
          code: 'M.S.W.',
          level: 'PG Degree',
          duration: '2 Years (Full-Time)',
          eligibility: 'Graduation in any discipline from a recognized university',
          approval: 'Affiliated to State University',
          desc: 'Professional social work training in Community Organization, Rural Development, Family & Child Welfare, and Labor Welfare Management.',
          highlights: ['Fieldwork in NGOs & Rural Agencies', 'Human Resource & Labor Welfare Modules', 'Community Health & Social Advocacy'],
        },
      ],
    },
    {
      id: 'vocational',
      name: 'Technical & Vocational (ITI)',
      shortName: 'Vocational ITI',
      icon: <Wrench size={16} />,
      programs: [
        {
          name: 'Medical Laboratory Technologist (MLT)',
          code: 'Parulba ITI',
          level: 'Diploma',
          duration: '1–2 Years',
          eligibility: '10th / 12th Pass from recognized board',
          approval: 'NCVT / GCVT Approved Vocational Center',
          desc: 'Practical diagnostic laboratory training covering clinical hematology, biochemistry analysis, microbiology cultures, and laboratory instrumentation.',
          highlights: ['Direct Hospital Diagnostic Lab Training', 'Practical Hands-On Equipment Usage', 'Immediate Healthcare Employability'],
        },
        {
          name: 'Secretarial Practice & Gujarati Stenography',
          code: 'Parulba ITI',
          level: 'Certificate',
          duration: '1 Year',
          eligibility: '10th / 12th Pass from recognized board',
          approval: 'Approved Technical Vocational Course',
          desc: 'High-speed vernacular shorthand dictation, legal and government administrative documentation, typing proficiency, and office management.',
          highlights: ['Government Job Secretarial Readiness', 'High-Speed Typing & Dictation', 'Administrative Documentation Practice'],
        },
      ],
    },
  ];

  const allPrograms = useMemo(() => categories.flatMap((cat) => cat.programs), []);

  const filteredPrograms = useMemo(() => {
    let progs =
      activeCategory === 'all'
        ? allPrograms
        : categories.find((cat) => cat.id === activeCategory)?.programs || [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      progs = progs.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.level.toLowerCase().includes(q) ||
          p.eligibility.toLowerCase().includes(q) ||
          p.approval.toLowerCase().includes(q)
      );
    }
    return progs;
  }, [activeCategory, searchQuery, allPrograms, categories]);

  return (
    <section id="programs" className="vn-programs-section">
      <div className="vn-container">
        {/* Section Header with Instant Search */}
        <div className="vn-prog-header-row">
          <div>
            <div className="vn-eyebrow">
              <Award size={14} className="text-gold" />
              <span>Academic Catalog 2026–27</span>
            </div>
            <h2 className="vn-section-title">
              Explore 12+ Disciplines & Professional Degrees
            </h2>
            <p className="vn-section-subtitle">
              Vidhyanagari Campus provides a comprehensive educational continuum in Himmatnagar—from management and advanced software technology to clinical nursing and teacher training.
            </p>
          </div>

          {/* Real-time Search Box */}
          <div className="vn-prog-search-bar">
            <Search size={18} className="vn-prog-search-icon" />
            <input
              type="text"
              placeholder="Search by degree or discipline (e.g. MBA, Nursing, BCA, B.Ed)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="vn-prog-search-input"
              aria-label="Search Academic Programs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="vn-prog-search-clear"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Tab Filters */}
        <div className="vn-prog-tabs-bar" role="tablist">
          <button
            onClick={() => handleCategorySelect('all')}
            className={`vn-prog-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            role="tab"
            aria-selected={activeCategory === 'all'}
          >
            All Programs ({allPrograms.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`vn-prog-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span>{cat.shortName} ({cat.programs.length})</span>
            </button>
          ))}
        </div>

        {/* Active Filter State Summary */}
        <div className="vn-prog-filter-summary">
          <span>
            Showing <strong>{filteredPrograms.length}</strong> academic offering{filteredPrograms.length === 1 ? '' : 's'}
            {searchQuery && <> matching &quot;<strong>{searchQuery}</strong>&quot;</>}
          </span>
          {(activeCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                handleCategorySelect('all');
                setSearchQuery('');
              }}
              className="vn-prog-reset-link"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="vn-prog-empty-state">
            <p>No programs found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn-gold"
              style={{ marginTop: '12px' }}
            >
              View All 18 Programs
            </button>
          </div>
        ) : (
          <div className="vn-prog-grid">
            {filteredPrograms.map((prog, idx) => (
              <div key={idx} className="vn-program-item-card">
                {/* Card Top: Code Pill & Level */}
                <div className="vn-prog-card-top">
                  <span className="vn-prog-code-badge">{prog.code}</span>
                  <span className="vn-prog-level-tag">{prog.level}</span>
                </div>

                {/* Program Title & Narrative */}
                <h3 className="vn-prog-title">{prog.name}</h3>
                <p className="vn-prog-desc">{prog.desc}</p>

                {/* Key Spec Badges */}
                <div className="vn-prog-specs-row">
                  <div className="vn-prog-spec-chip">
                    <Clock size={13} className="text-gold" />
                    <span>{prog.duration}</span>
                  </div>
                </div>

                {/* Statutory Approval Chip */}
                <div className="vn-prog-approval-chip">
                  <ShieldCheck size={14} className="text-gold" />
                  <span>{prog.approval}</span>
                </div>

                {/* Eligibility Criteria */}
                <div className="vn-prog-eligibility">
                  <span className="eligibility-label">Eligibility:</span>
                  <span className="eligibility-val">{prog.eligibility}</span>
                </div>

                {/* Program Highlights */}
                <ul className="vn-prog-highlights-list">
                  {prog.highlights.map((h, hIdx) => (
                    <li key={hIdx}>
                      <Check size={13} className="text-gold" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Footer: Conversion Trigger */}
                <div className="vn-prog-card-footer">
                  <div className="admissions-status">
                    <span className="status-dot"></span>
                    <span>Admissions 2026–27 Active</span>
                  </div>
                  <button
                    onClick={() => onSelectProgram(`${prog.code} - ${prog.name}`)}
                    className="btn-gold vn-prog-enquire-btn"
                    title={`Enquire for ${prog.name}`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
