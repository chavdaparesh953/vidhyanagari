'use client';

import React from 'react';
import { Phone, Send, Sparkles } from 'lucide-react';

interface ConversionWidgetsProps {
  onOpenEnquiry: () => void;
}

export default function ConversionWidgets({ onOpenEnquiry }: ConversionWidgetsProps) {
  return (
    <>
      {/* Desktop Floating Right Tab */}
      <div 
        onClick={onOpenEnquiry}
        className="vn-floating-enquire-tab"
        title="Quick Admissions Inquiry 2026-27"
      >
        <Sparkles size={14} />
        <span>Enquire 2026–27</span>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="vn-mobile-sticky-bar">
        <a
          href="tel:+9102772244621"
          className="btn-secondary"
          style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem', justifyContent: 'center' }}
        >
          <Phone size={15} />
          <span>Call Helpline</span>
        </a>

        <button
          onClick={onOpenEnquiry}
          className="btn-gold"
          style={{ flex: 1.2, padding: '10px 14px', fontSize: '0.85rem', justifyContent: 'center' }}
        >
          <Send size={15} />
          <span>Apply Now</span>
        </button>
      </div>
    </>
  );
}
