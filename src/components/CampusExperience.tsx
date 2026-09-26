'use client';

import React, { useState } from 'react';
import { Waves, BookOpen, Monitor, Hospital, Bus, Shield, MapPin, Eye, CheckCircle2 } from 'lucide-react';

export default function CampusExperience() {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const galleryImages = [
    {
      src: '/images/hero-campus.jpg',
      label: 'Main Academic Campus & Courtyard',
      category: 'Campus Grounds',
      caption: 'Serene campus setting located on Motipura Bypass Road along the Hathmati River.',
    },
    {
      src: '/images/hero-students.jpg',
      label: 'Collaborative Learning & Seminar Hall',
      category: 'Academic Community',
      caption: 'Modern interactive lecture theaters for symposiums, seminars, and student presentations.',
    },
    {
      src: '/images/hero-lab.jpg',
      label: 'Computing & Science Laboratories',
      category: 'Research & Labs',
      caption: 'High-speed computer laboratories and analytical chemistry & microbiology facilities.',
    },
    {
      src: '/images/hero-nursing.jpg',
      label: 'Healthcare & Clinical Training Suites',
      category: 'Clinical Facilities',
      caption: 'Simulation hospital suites and practical medical training for nursing students.',
    },
  ];

  const facilities = [
    {
      icon: <Waves size={20} />,
      title: 'Hathmati Riverside Setting',
      desc: 'Positioned on Motipura Bypass Road along the picturesque banks of River Hathmati, fostering mental clarity, natural beauty, and focused academic study.',
    },
    {
      icon: <Monitor size={20} />,
      title: 'High-Tech Computing Centers',
      desc: 'Modern computer application labs with high-speed internet connectivity, enterprise software tools, and development frameworks for MCA & BCA students.',
    },
    {
      icon: <Hospital size={20} />,
      title: 'Clinical Healthcare Suites',
      desc: 'Dedicated anatomy and nursing simulation laboratories equipped with medical mannequins, paired with clinical rotations at affiliated hospitals.',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Comprehensive Academic Library',
      desc: 'Extensive physical and digital repository of textbooks, national journals, research papers, and quiet reading zones for all disciplines.',
    },
    {
      icon: <Bus size={20} />,
      title: 'Dedicated Transport Fleet',
      desc: 'Convenient and safe institutional bus transportation connecting Himmatnagar, Idar, Prantij, Talod, and surrounding regional centers across Sabarkantha.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Residential Hostels & 24/7 Security',
      desc: 'Supervised, separate residential hostels for boys and girls with hygienic vegetarian dining halls, resident wardens, and round-the-clock CCTV security.',
    },
  ];

  return (
    <section id="campus" className="vn-campus-section">
      <div className="vn-container">
        {/* Section Header */}
        <div className="vn-campus-header-row">
          <div>
            <div className="vn-eyebrow">
              <MapPin size={14} className="text-gold" />
              <span>Campus Environment & Infrastructure</span>
            </div>
            <h2 className="vn-section-title">
              A Campus Built for Focus, Community & Discovery
            </h2>
            <p className="vn-section-subtitle">
              Vidhyanagari Campus balances academic rigor with peaceful riverside nature along the Hathmati River in Himmatnagar.
            </p>
          </div>
        </div>

        {/* Real High-Resolution Photo Showcase */}
        <div className="vn-campus-gallery-wrap">
          {/* Main Large Visual Display */}
          <div className="vn-campus-main-photo">
            <div
              className="vn-campus-photo-canvas"
              style={{ backgroundImage: `url('${galleryImages[activePhoto].src}')` }}
            />
            <div className="vn-campus-photo-overlay">
              <span className="photo-category">{galleryImages[activePhoto].category}</span>
              <h3 className="photo-title">{galleryImages[activePhoto].label}</h3>
              <p className="photo-caption">{galleryImages[activePhoto].caption}</p>
            </div>
          </div>

          {/* Interactive Thumbnails Selector */}
          <div className="vn-campus-thumbs-grid">
            {galleryImages.map((img, idx) => {
              const isActive = idx === activePhoto;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(idx)}
                  className={`vn-campus-thumb-card ${isActive ? 'active' : ''}`}
                  aria-label={`View ${img.label}`}
                >
                  <div
                    className="vn-campus-thumb-img"
                    style={{ backgroundImage: `url('${img.src}')` }}
                  />
                  <div className="vn-campus-thumb-content">
                    <span className="thumb-cat">{img.category}</span>
                    <span className="thumb-label">{img.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Documented Amenities & Facilities */}
        <div className="vn-campus-amenities-section">
          <div className="vn-amenities-heading">
            <h3 className="amenities-title">Documented Campus Amenities</h3>
            <span className="amenities-subtitle">Supporting academic, clinical, and residential needs</span>
          </div>

          <div className="vn-facilities-grid">
            {facilities.map((item, idx) => (
              <div key={idx} className="vn-facility-card">
                <div className="facility-icon-wrap">
                  {item.icon}
                </div>
                <div className="facility-content">
                  <h4 className="facility-title">{item.title}</h4>
                  <p className="facility-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
