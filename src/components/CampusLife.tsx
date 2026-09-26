'use client';

import React from 'react';
import { Calendar, Users, Trophy, HeartHandshake, Sparkles, BookOpen } from 'lucide-react';

export default function CampusLife() {
  const activities = [
    {
      icon: <Users size={22} />,
      title: 'Student Community & Peer Learning',
      desc: 'Collaborative academic study circles, peer project groups, and supportive student committees foster lasting relationships and mutual encouragement.',
      highlight: false,
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Cultural Celebrations & Campus Days',
      desc: 'Annual college cultural fests, festival observances, talent days, and traditional gatherings celebrate the rich heritage of Gujarat and India.',
      highlight: true,
    },
    {
      icon: <Trophy size={22} />,
      title: 'Athletics & Physical Recreation',
      desc: 'Open campus grounds encourage outdoor sporting activities, cricket tournaments, volleyball matches, and active student wellness.',
      highlight: false,
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Academic Seminars & Guest Lectures',
      desc: 'Interactive expert talks, technical symposiums, and institutional seminars expose learners to regional industry perspectives.',
      highlight: false,
    },
    {
      icon: <HeartHandshake size={22} />,
      title: 'Social Service & Community Outreach',
      desc: 'Reflecting the founding spirit of Vishwa Mangalam Education Trust, students participate in community health drives, environmental cleanups, and literacy initiatives.',
      highlight: false,
    },
    {
      icon: <Calendar size={22} />,
      title: 'Structured Academic Calendar',
      desc: 'Organized terms ensuring timely curriculum coverage, internal assessments, laboratory evaluations, and university examination preparedness.',
      highlight: false,
    },
  ];

  return (
    <section className="vn-life-section">
      <div className="vn-container">
        <div style={{ maxWidth: '720px' }}>
          <div className="vn-eyebrow">
            <span>Life Beyond the Classroom</span>
          </div>
          <h2 className="vn-section-title">
            A Vibrant, Purposeful Student Experience
          </h2>
          <p className="vn-section-subtitle">
            At Vidhyanagari, university life encompasses intellectual curiosity, community service, peer camaraderie, and cultural vibrancy.
          </p>
        </div>

        <div className="vn-life-masonry">
          {activities.map((item, idx) => (
            <div key={idx} className={`vn-life-item ${item.highlight ? 'highlight' : ''}`}>
              <div>
                <div style={{ marginBottom: '16px', color: item.highlight ? '#dcad35' : '#0b192c' }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
