'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Compass, Send, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: (program?: string) => void;
  onOpenBrochure: () => void;
}

export default function Hero({ onOpenEnquiry, onOpenBrochure }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    {
      image: '/images/hero-campus.jpg',
      badge: 'Admissions Open 2026–27 • Himmatnagar',
      category: 'Campus & Heritage',
      headlineStart: 'Where Ambition Meets',
      headlineAccent: 'Enduring Success.',
      description:
        'North Gujarat’s premier multidisciplinary campus on Hathmati river, offering 12 higher education institutions under Vishwa Mangalam Trust.',
    },
    {
      image: '/images/hero-students.jpg',
      badge: 'Vibrant Student Community',
      category: 'Student Life',
      headlineStart: 'Practical Learning,',
      headlineAccent: 'Purposeful Growth.',
      description:
        'Industry-aligned curricula, interactive academic symposiums, and personal mentorship preparing confident, career-ready professionals.',
    },
    {
      image: '/images/hero-lab.jpg',
      badge: 'Computing & Research Labs',
      category: 'Labs & Tech',
      headlineStart: 'Modern Laboratories &',
      headlineAccent: 'Applied Technology.',
      description:
        'Dedicated computer centers and analytical science research laboratories designed to bridge academic study with industrial demands.',
    },
    {
      image: '/images/hero-nursing.jpg',
      badge: 'Healthcare & Clinical Hub',
      category: 'Healthcare & Nursing',
      headlineStart: 'Clinical Healthcare &',
      headlineAccent: 'Compassionate Care.',
      description:
        'Premier clinical simulation suites and affiliated multi-specialty hospital training for B.Sc. Nursing, GNM, and ANM degrees.',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Continuous 5-second automatic progression (mouse in or mouse out)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const current = slides[currentSlide];

  return (
    <section
      className="vn-hero-grand"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Admissions Hero Banner"
    >
      {/* Background Slides with Smooth Fade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`vn-hero-grand-layer ${idx === currentSlide ? 'active' : ''}`}
        >
          <div
            className="vn-hero-grand-bg"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Directional Cinematic Vignette */}
          <div className="vn-hero-grand-gradient" />
        </div>
      ))}

      {/* Main Content Container - 100% Fixed Height Grid */}
      <div className="vn-container vn-hero-container">
        <div className="vn-hero-grand-content">
          {/* 1. Admissions Eyebrow Pill */}
          <div key={`badge-${currentSlide}`} className="vn-hero-grand-badge">
            <span className="vn-badge-dot"></span>
            <span>{current.badge}</span>
          </div>

          {/* 2. Bold 2-Line Headline (Strictly 2 lines across ALL slides) */}
          <div key={`title-${currentSlide}`} className="vn-hero-title-box">
            <h1 className="vn-hero-grand-title">
              {current.headlineStart} <br />
              <span className="serif-accent">
                {current.headlineAccent}
              </span>
            </h1>
          </div>

          {/* 3. Concise 1-2 Line Description (Uniform character count) */}
          <div key={`desc-${currentSlide}`} className="vn-hero-desc-box">
            <p className="vn-hero-grand-desc">
              {current.description}
            </p>
          </div>

          {/* 4. Stationary Action Buttons */}
          <div className="vn-hero-grand-ctas">
            <button
              onClick={scrollToPrograms}
              className="btn-gold vn-hero-btn-primary"
              id="hero-explore-programs-btn"
            >
              <span>Explore 12+ Disciplines</span>
              <Compass size={18} />
            </button>

            <button
              onClick={() => onOpenEnquiry()}
              className="btn-secondary-white vn-hero-btn-enquire"
              id="hero-enquire-btn"
            >
              <span>Enquire for Admissions</span>
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* 5. Stationary Bottom Slider Dock (Fixed to bottom of hero) */}
        <div className="vn-hero-slider-dock">
          {/* Slide Numeric Counter */}
          <div className="vn-hero-slider-counter">
            <span className="current">0{currentSlide + 1}</span>
            <span className="sep">/</span>
            <span className="total">0{slides.length}</span>
          </div>

          {/* Segmented Timeline Progress Indicators */}
          <div className="vn-hero-slider-indicators">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`vn-hero-indicator-btn ${isActive ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}: ${s.category}`}
                >
                  <span className="indicator-label">{s.category}</span>
                  <div className="indicator-track">
                    <div
                      className={`indicator-fill ${isActive ? 'filling' : ''}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sleek Circular Glass Arrow Controls */}
          <div className="vn-hero-slider-arrows">
            <button
              onClick={prevSlide}
              className="vn-hero-slider-arrow"
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="vn-hero-slider-arrow"
              aria-label="Next Slide"
              title="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
