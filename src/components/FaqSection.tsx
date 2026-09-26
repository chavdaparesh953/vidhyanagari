'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Which statutory councils and universities recognize Vidhyanagari programs?',
      a: 'Programs across Vidhyanagari Campus operate with appropriate state university and statutory council recognitions. Professional technical programs like MBA and MCA follow AICTE guidelines; healthcare and nursing courses (B.Sc Nursing, GNM, ANM) are recognized by the Indian Nursing Council (INC) and Gujarat Nursing Council (GNC); teacher training programs (B.Ed., M.Ed.) comply with NCTE standards; and university degrees are affiliated with recognized state universities in Gujarat.',
    },
    {
      q: 'Are separate hostel facilities available for outstation students?',
      a: 'Yes. Vidhyanagari provides supervised, separate residential hostels for boys and girls on the campus grounds. Hostels feature 24x7 security surveillance, resident wardens, hygienic dining facilities serving wholesome vegetarian meals, study rooms, and high-speed Wi-Fi access.',
    },
    {
      q: 'What transportation facilities are available for day scholars across Sabarkantha?',
      a: 'The campus operates an extensive fleet of institutional buses connecting Himmatnagar town, Idar, Prantij, Talod, and surrounding regional centers. Bus routes are coordinated with daily academic lecture schedules for student safety and convenience.',
    },
    {
      q: 'How does the admission counseling and document verification process work?',
      a: 'Prospective candidates can initiate their application either online through our inquiry desk or by visiting the Vidhyanagari Campus Admissions Office on Motipura Bypass Road. Candidates should bring original and copies of standard academic credentials (10th/12th marksheets, graduation transcripts for PG programs, school leaving certificate, caste certificate if applicable, and passport-size photographs).',
    },
    {
      q: 'Can students avail Gujarat Government and merit scholarships at Vidhyanagari?',
      a: 'Yes. Eligible students can apply for post-matric scholarships and educational assistance under Government of Gujarat welfare schemes (Digital Gujarat Portal) for SC, ST, SEBC, and EWS categories, as well as MYSY (Mukhyamantri Yuva Swavalamban Yojana) based on state government eligibility criteria.',
    },
    {
      q: 'Can parents and students schedule a campus tour before finalizing admission?',
      a: 'Certainly. Our campus counseling office is open Monday through Saturday from 9:00 AM to 5:00 PM. Parents and students are encouraged to tour our laboratories, library, lecture halls, and riverside campus grounds, and consult directly with departmental faculty.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="vn-faq-section">
      <div className="vn-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div className="vn-eyebrow" style={{ justifyContent: 'center' }}>
            <HelpCircle size={15} />
            <span>Admissions Guidance</span>
          </div>
          <h2 className="vn-section-title">
            Frequently Asked Questions
          </h2>
          <p className="vn-section-subtitle" style={{ margin: '0 auto' }}>
            Clear answers to common questions asked by prospective students and parents regarding programs, campus amenities, approvals, and admissions.
          </p>
        </div>

        <div className="vn-faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`vn-faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="vn-faq-question"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div style={{ color: isOpen ? '#c59b27' : '#64748b', flexShrink: 0 }}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="vn-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
