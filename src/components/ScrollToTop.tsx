'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show after user scrolls ~450px down
      if (scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalHeight > 0) {
        const currentProgress = Math.min(Math.max((scrollY / totalHeight) * 100, 0), 100);
        setProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Circular progress math: r = 20, circumference ≈ 125.66
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <button
      onClick={scrollToTop}
      className={`vn-scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
      aria-label="Scroll to top"
      title={`Back to top (${Math.round(progress)}% viewed)`}
    >
      <svg
        className="vn-scroll-progress-svg"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        aria-hidden="true"
      >
        {/* Background track circle */}
        <circle
          className="vn-scroll-progress-track"
          cx="23"
          cy="23"
          r={radius}
          strokeWidth="2.5"
        />
        {/* Animated golden fill progress circle */}
        <circle
          className="vn-scroll-progress-indicator"
          cx="23"
          cy="23"
          r={radius}
          strokeWidth="2.5"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      <span className="vn-scroll-arrow-icon">
        <ArrowUp size={17} />
      </span>
    </button>
  );
}
