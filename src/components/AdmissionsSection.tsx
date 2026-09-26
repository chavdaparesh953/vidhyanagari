'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, HelpCircle, Mail, MapPin, Sparkles } from 'lucide-react';

interface AdmissionsSectionProps {
  selectedProgramPrefill?: string;
  onOpenEnquiryModal: () => void;
}

export default function AdmissionsSection({
  selectedProgramPrefill,
  onOpenEnquiryModal,
}: AdmissionsSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: selectedProgramPrefill || 'MBA (Master of Business Administration)',
    city: '',
  });

  useEffect(() => {
    if (selectedProgramPrefill) {
      setFormData((prev) => ({ ...prev, program: selectedProgramPrefill }));
    }
  }, [selectedProgramPrefill]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const programsList = [
    'MBA (Master of Business Administration) - 2 Yrs',
    'MCA (Master of Computer Applications) - 2 Yrs',
    'BBA (Bachelor of Business Administration) - 3 Yrs',
    'BCA (Bachelor of Computer Applications) - 3 Yrs',
    'B.Com. (Bachelor of Commerce) - 3 Yrs',
    'PGDCA (Computer Applications Diploma) - 1 Yr',
    'B.Sc. Nursing (Degree) - 4 Yrs',
    'G.N.M. (General Nursing & Midwifery) - 3 Yrs',
    'A.N.M. (Auxiliary Nurse Midwife) - 2 Yrs',
    'B.Sc. (Chemistry / Microbiology) - 3 Yrs',
    'M.Sc. (Organic Chemistry / Microbiology) - 2 Yrs',
    'B.Ed. (Bachelor of Education) - 2 Yrs',
    'M.Ed. (Master of Education) - 2 Yrs',
    'D.El.Ed. (P.T.C. Teacher Training) - 2 Yrs',
    'LL.B. (3-Year Professional Law Degree)',
    'M.S.W. (Master of Social Work) - 2 Yrs',
    'Parulba ITI - Medical Laboratory Tech (MLT)',
    'Parulba ITI - Gujarati Stenography & Secretarial',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  const steps = [
    {
      num: '01',
      title: 'Select Academic Discipline',
      desc: 'Review curricula, eligibility benchmarks, and statutory council recognitions across our 12 institutions.',
    },
    {
      num: '02',
      title: 'Consult Admissions Counselors',
      desc: 'Connect with dedicated faculty advisors online or visit the campus admissions office on Motipura Bypass Road.',
    },
    {
      num: '03',
      title: 'Document & Transcripts Verification',
      desc: 'Submit academic marksheets, school leaving certificates, and identity documents for merit verification.',
    },
    {
      num: '04',
      title: 'Enrolment & Academic Induction',
      desc: 'Confirm program seat, receive official academic syllabus, and join the freshman orientation program.',
    },
  ];

  return (
    <section id="admissions" className="vn-admissions-section">
      <div className="vn-container">
        <div className="vn-admissions-box">
          {/* Left Column: Admissions Process & Heritage */}
          <div className="vn-admissions-info">
            <div className="vn-eyebrow vn-eyebrow-dark">
              <Sparkles size={14} className="text-gold" />
              <span>Admissions Cycle 2026–27</span>
            </div>

            <h2 className="vn-section-title vn-section-title-dark">
              Step Into Your Future at Vidhyanagari
            </h2>

            <p className="vn-admissions-desc">
              Whether you are aspiring for an AICTE-approved master’s degree, an INC-recognized nursing career, or teacher training, our admissions desk provides transparent, one-on-one academic guidance.
            </p>

            {/* 4 Clear Admissions Steps */}
            <div className="vn-admission-steps">
              {steps.map((step) => (
                <div key={step.num} className="vn-admission-step">
                  <div className="vn-step-badge">{step.num}</div>
                  <div className="vn-step-text">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Helpline Strip */}
            <div className="vn-admissions-helpline">
              <a href="tel:+9102772244621" className="btn-secondary-white">
                <PhoneCall size={16} />
                <span>Admissions Desk: +91 (02772) 244621</span>
              </a>
              <span className="helpline-hours">Mon–Sat: 9:00 AM – 5:00 PM</span>
            </div>
          </div>

          {/* Right Column: Direct Admissions Lead Capture Form */}
          <div className="vn-inquiry-card">
            {isSubmitted ? (
              <div className="vn-inquiry-success">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={36} />
                </div>
                <h3>Admissions Inquiry Received</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. An admissions counselor from Vidhyanagari Campus will connect with you shortly at <strong>{formData.phone}</strong> regarding <strong>{formData.program}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                  style={{ width: '100%', marginTop: '16px' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="vn-inquiry-card-header">
                  <span className="inquiry-badge">Admissions 2026–27</span>
                  <h3 className="inquiry-title">Enquire for Admissions</h3>
                  <p className="inquiry-desc">
                    Get detailed syllabus, seat availability, fee structures, and scholarship assistance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="vn-lead-form">
                  <div className="vn-form-group">
                    <label className="vn-form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="vn-form-input"
                    />
                  </div>

                  <div className="vn-form-row">
                    <div className="vn-form-group">
                      <label className="vn-form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="vn-form-input"
                      />
                    </div>

                    <div className="vn-form-group">
                      <label className="vn-form-label">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="vn-form-input"
                      />
                    </div>
                  </div>

                  <div className="vn-form-group">
                    <label className="vn-form-label">Select Program *</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="vn-form-select"
                    >
                      {programsList.map((prog, pIdx) => (
                        <option key={pIdx} value={prog}>
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="vn-form-group">
                    <label className="vn-form-label">City / District</label>
                    <input
                      type="text"
                      placeholder="e.g. Himmatnagar, Idar, Ahmedabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="vn-form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold vn-form-submit-btn"
                  >
                    <span>Submit Admissions Inquiry</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="vn-form-privacy">
                    <ShieldCheck size={14} className="text-gold" />
                    <span>Your information is strictly protected and used solely for admission guidance.</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
