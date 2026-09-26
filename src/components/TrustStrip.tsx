'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Building2, BookOpen, ShieldCheck } from 'lucide-react';

function useCounter(target: number, duration: number = 1600, start: number = 0, isVisible: boolean = false) {
  const [count, setCount] = useState<number>(target);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || animatedRef.current) return;
    animatedRef.current = true;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Buttery-smooth easeOutCubic deceleration curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * easeProgress);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, duration, start]);

  return count;
}

export default function TrustStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const boardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (boardRef.current) {
      observer.observe(boardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const yearCount = useCounter(1982, 1600, 1920, isVisible);
  const institutesCount = useCounter(12, 1400, 0, isVisible);
  const schoolsCount = useCounter(5, 1200, 0, isVisible);
  const verifiedCount = useCounter(100, 1600, 0, isVisible);

  const credentials = [
    'AICTE Approved (MBA & MCA)',
    'Indian Nursing Council (INC) Recognized',
    'Gujarat Nursing Council (GNC) Approved',
    'National Council for Teacher Education (NCTE)',
    'HNGU University Affiliated Degrees',
  ];

  return (
    <section id="about" className="vn-intro-section">
      <div className="vn-container">
        {/* Top Editorial Row */}
        <div className="vn-intro-editorial-row">
          <div className="vn-intro-editorial-main">
            <div className="vn-eyebrow">
              <Landmark size={14} className="text-gold" />
              <span>Institutional Heritage & Trust</span>
            </div>

            <h2 className="vn-section-title">
              Four Decades of Value-Grounded Education in North Gujarat
            </h2>

            <p className="vn-intro-lead">
              Founded in <strong>1982</strong> by the revered educationist <strong>Dr. D. L. Patel</strong>, the <strong>Vishwa Mangalam Education Trust</strong> was created with a mission to bring high-quality, disciplined, and career-oriented learning to Sabarkantha and North Gujarat.
            </p>

            <p className="vn-intro-body">
              In 2005, the trust established the unified <strong>Vidhyanagari Campus</strong> on the scenic banks of the Hathmati River in Himmatnagar. Today, the campus houses 12 premier higher education institutions alongside 5 reputed schools—spanning management, computing, healthcare, natural sciences, pedagogy, and technical vocations.
            </p>

            {/* Direct Statutory Approvals Strip */}
            <div className="vn-intro-approvals">
              <span className="vn-intro-approvals-label">Statutory Recognitions:</span>
              <div className="vn-intro-approvals-list">
                {credentials.map((cred, idx) => (
                  <span key={idx} className="vn-approval-tag">
                    <ShieldCheck size={13} className="text-gold" />
                    <span>{cred}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stately Institutional Stat Counter Block */}
          <div ref={boardRef} className="vn-intro-stat-board">
            {/* Card 1: 1982 */}
            <div className="vn-intro-stat-card">
              <div className="vn-stat-card-header">
                <div className="vn-stat-icon-wrap">
                  <Landmark size={18} className="text-gold" />
                </div>
                <span className="vn-stat-pill">Est. 1982</span>
              </div>
              <div className="vn-stat-value">{yearCount}</div>
              <h3 className="vn-stat-title">Founding Heritage</h3>
              <p className="vn-stat-desc">
                Four decades of educational stewardship under Vishwa Mangalam Education Trust.
              </p>
            </div>

            {/* Card 2: 12 */}
            <div className="vn-intro-stat-card">
              <div className="vn-stat-card-header">
                <div className="vn-stat-icon-wrap">
                  <Building2 size={18} className="text-gold" />
                </div>
                <span className="vn-stat-pill">Institutes</span>
              </div>
              <div className="vn-stat-value">
                {institutesCount}
                <span className="vn-stat-suffix">+</span>
              </div>
              <h3 className="vn-stat-title">Higher Ed Colleges</h3>
              <p className="vn-stat-desc">
                Covering MBA, MCA, Nursing, B.Sc., M.Sc., B.Ed., M.Ed., Law, and ITI vocations.
              </p>
            </div>

            {/* Card 3: 05 */}
            <div className="vn-intro-stat-card">
              <div className="vn-stat-card-header">
                <div className="vn-stat-icon-wrap">
                  <BookOpen size={18} className="text-gold" />
                </div>
                <span className="vn-stat-pill">K-12 Network</span>
              </div>
              <div className="vn-stat-value">
                {String(schoolsCount).padStart(2, '0')}
              </div>
              <h3 className="vn-stat-title">Integrated Schools</h3>
              <p className="vn-stat-desc">
                Continuous learning ecosystem from kindergarten to higher secondary certification.
              </p>
            </div>

            {/* Card 4: 100% */}
            <div className="vn-intro-stat-card">
              <div className="vn-stat-card-header">
                <div className="vn-stat-icon-wrap">
                  <ShieldCheck size={18} className="text-gold" />
                </div>
                <span className="vn-stat-pill vn-stat-pill-gold">100% Verified</span>
              </div>
              <div className="vn-stat-value">
                {verifiedCount}
                <span className="vn-stat-suffix">%</span>
              </div>
              <h3 className="vn-stat-title">Statutory Approvals</h3>
              <p className="vn-stat-desc">
                Compliant with AICTE, INC, GNC, NCTE, and state university academic governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
