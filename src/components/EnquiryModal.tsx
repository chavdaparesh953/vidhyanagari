'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  prefilledProgram?: string;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, prefilledProgram, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    program: prefilledProgram || 'MBA (Master of Business Administration)',
    city: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({ ...prev, program: prefilledProgram }));
    }
  }, [prefilledProgram]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Escape key listener for fast closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) {
      alert('Please fill in your name and mobile number.');
      return;
    }
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className={`vn-drawer-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleResetAndClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`vn-enquiry-drawer ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-drawer-title"
      >
        {/* Drawer Academic Header */}
        <div className="vn-drawer-header">
          <div className="vn-drawer-header-meta">
            <span className="vn-drawer-badge">
              <Sparkles size={12} className="text-gold" />
              <span>Admissions 2026–27 Open</span>
            </span>
            <button
              onClick={handleResetAndClose}
              className="vn-drawer-close"
              aria-label="Close admissions inquiry drawer"
            >
              <X size={18} />
            </button>
          </div>
          <h3 id="enquiry-drawer-title" className="vn-drawer-title">
            Admissions Inquiry
          </h3>
          <p className="vn-drawer-subtitle">
            Vishwa Mangalam Education Trust • Est. 1982 • Himmatnagar
          </p>
        </div>

        {/* Drawer Body (Scrollable Form / Confirmation) */}
        <div className="vn-drawer-body">
          {submitted ? (
            <div className="vn-drawer-success">
              <div className="vn-drawer-success-icon">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="vn-drawer-success-title">
                Inquiry Successfully Registered!
              </h4>
              <p className="vn-drawer-success-desc">
                Thank you, <strong>{formData.fullName}</strong>. Your inquiry for{' '}
                <strong>{formData.program}</strong> has been assigned to our senior admissions counselor. We will call you shortly at <strong>{formData.mobile}</strong>.
              </p>

              <div className="vn-drawer-success-card">
                <div className="vn-drawer-success-row">
                  <Phone size={14} className="text-gold" />
                  <span><strong>Admissions Helpline:</strong> +91 (02772) 244621</span>
                </div>
                <div className="vn-drawer-success-row">
                  <Mail size={14} className="text-gold" />
                  <span><strong>Email:</strong> info@vidhyanagari.org</span>
                </div>
                <div className="vn-drawer-success-row">
                  <ShieldCheck size={14} className="text-gold" />
                  <span><strong>Campus:</strong> Motipura Bypass, Himmatnagar</span>
                </div>
              </div>

              <button onClick={handleResetAndClose} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="vn-drawer-highlight">
                <ShieldCheck size={16} style={{ color: '#c59b27', flexShrink: 0 }} />
                <span>Direct admission support with official university counselors & fee guidance.</span>
              </div>

              <form onSubmit={handleSubmit} className="vn-drawer-form">
                <div className="vn-form-group">
                  <label className="vn-form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Candidate or Parent Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="vn-form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="vn-form-group">
                    <label className="vn-form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="vn-form-input"
                    />
                  </div>

                  <div className="vn-form-group">
                    <label className="vn-form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="vn-form-input"
                    />
                  </div>
                </div>

                <div className="vn-form-group">
                  <label className="vn-form-label">Program / Degree Interested *</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="vn-form-select"
                  >
                    <option value="MBA (Master of Business Administration)">MBA (Master of Business Administration)</option>
                    <option value="MCA (Master of Computer Applications)">MCA (Master of Computer Applications)</option>
                    <option value="BCA (Bachelor of Computer Applications)">BCA (Bachelor of Computer Applications)</option>
                    <option value="BBA (Bachelor of Business Administration)">BBA (Bachelor of Business Administration)</option>
                    <option value="B.Com. (Bachelor of Commerce)">B.Com. (Bachelor of Commerce)</option>
                    <option value="B.Sc. (Bachelor of Science)">B.Sc. (Bachelor of Science)</option>
                    <option value="M.Sc. (Master of Science)">M.Sc. (Master of Science)</option>
                    <option value="B.Sc. Nursing (4-Year Degree)">B.Sc. Nursing (4-Year Degree)</option>
                    <option value="G.N.M. Nursing (3-Year Diploma)">G.N.M. Nursing (3-Year Diploma)</option>
                    <option value="A.N.M. Nursing (2-Year Diploma)">A.N.M. Nursing (2-Year Diploma)</option>
                    <option value="M.Sc. Nursing / P.B.B.Sc.">M.Sc. Nursing / P.B.B.Sc.</option>
                    <option value="B.Ed. (Bachelor of Education)">B.Ed. (Bachelor of Education)</option>
                    <option value="M.Ed. (Master of Education)">M.Ed. (Master of Education)</option>
                    <option value="D.El.Ed. (P.T.C.)">D.El.Ed. (P.T.C.)</option>
                    <option value="LL.B. (3-Year Law Degree)">LL.B. (3-Year Law Degree)</option>
                    <option value="M.S.W. (Master of Social Work)">M.S.W. (Master of Social Work)</option>
                    <option value="Parulba ITI (Vocational Trades)">Parulba ITI (Vocational Trades)</option>
                  </select>
                </div>

                <div className="vn-form-group">
                  <label className="vn-form-label">City / Native District</label>
                  <input
                    type="text"
                    placeholder="e.g. Himmatnagar, Idar, Ahmedabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="vn-form-input"
                  />
                </div>

                <div className="vn-form-group">
                  <label className="vn-form-label">Questions or Inquiries (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Any specific questions regarding eligibility, hostel, or transport..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="vn-form-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{ width: '100%', marginTop: '6px', padding: '13px', justifyContent: 'center' }}
                >
                  <span>Submit Inquiry to Admissions Office</span>
                  <ArrowRight size={16} />
                </button>

                <div style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', marginTop: '10px' }}>
                  🔒 100% Confidential • Official Vishwa Mangalam Education Trust Counseling
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Drawer Persistent Bottom Contact Strip */}
        <div className="vn-drawer-footer">
          <span>Need Immediate Help?</span>
          <a href="tel:+9102772244621" className="vn-drawer-footer-link">
            <Phone size={13} className="text-gold" />
            <span>+91 (02772) 244621</span>
          </a>
        </div>
      </div>
    </div>
  );
}
