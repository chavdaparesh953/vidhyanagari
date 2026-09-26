'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle2, FileText } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    program: 'All Programs / General Prospectus',
  });
  const [submitted, setSubmitted] = useState(false);

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert('Please fill in your name and mobile number.');
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="vn-modal-overlay open">
      <div className="vn-modal-dialog">
        <button onClick={handleClose} className="vn-modal-close" aria-label="Close dialog">
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '32px 12px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0b192c', marginBottom: '8px' }}>
              Prospectus Access Granted
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
              Thank you, <strong>{formData.name}</strong>. The <strong>Vidhyanagari Admissions 2026–27 Prospectus</strong> link has been authorized and dispatched to your email (<strong>{formData.email || 'your phone number'}</strong>).
            </p>
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px', textAlign: 'left', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0b192c', fontWeight: 600 }}>
                <FileText size={16} style={{ color: '#c59b27' }} />
                <span>Vidhyanagari_Campus_Prospectus_2026-27.pdf (PDF • 4.2 MB)</span>
              </div>
            </div>
            <button onClick={handleClose} className="btn-primary" style={{ width: '100%' }}>
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="vn-eyebrow">
              <Download size={14} />
              <span>Official Academic Prospectus</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0b192c', marginBottom: '6px' }}>
              Download Campus Prospectus 2026–27
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '20px' }}>
              Get complete details on course syllabus, eligibility criteria, campus infrastructure, hostel policies, and admission deadlines.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="vn-form-group">
                <label className="vn-form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Student or Guardian Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="vn-form-input"
                />
              </div>

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
                <label className="vn-form-label">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="vn-form-input"
                />
              </div>

              <div className="vn-form-group">
                <label className="vn-form-label">Program of Interest</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="vn-form-select"
                >
                  <option value="All Programs / General Prospectus">All Programs / General Prospectus</option>
                  <option value="MBA & Management">MBA & Management</option>
                  <option value="MCA & Computer Applications">MCA & Computer Applications</option>
                  <option value="B.Sc Nursing & Healthcare">B.Sc Nursing & Healthcare</option>
                  <option value="B.Ed. & Teacher Education">B.Ed. & Teacher Education</option>
                  <option value="B.Sc. & Science Programs">B.Sc. & Science Programs</option>
                  <option value="Parulba ITI Trades">Parulba ITI Trades</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{ width: '100%', marginTop: '8px', padding: '14px', justifyContent: 'center' }}
              >
                <span>Download Prospectus (PDF)</span>
                <Download size={16} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginTop: '12px' }}>
                Instant access • Official publication of Vishwa Mangalam Education Trust
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
