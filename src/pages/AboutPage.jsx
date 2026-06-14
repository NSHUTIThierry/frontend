import React from 'react';
import Footer from '../components/Footer';

export default function AboutPage({ onGoTo }) {
  return (
    <div className="page on" id="pg-about">
      <div className="about-hero">
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.15)', color: '#86efac', fontSize: '8px', padding: '2px 8px', borderRadius: '10px', marginBottom: '7px' }}>
          About AgriConnect Rwanda
        </div>
        <h2>Farming Together. Growing Rwanda.</h2>
        <p>A national digital agriculture platform transforming how Rwandan farmers access information, markets, expert support, and government services.</p>
      </div>
      <div className="about-mission">
        <div className="amc"><h3><span>🎯</span> Our Mission</h3><p>To digitally transform Rwanda's agriculture sector by connecting every farmer to the resources, experts, markets, and technologies they need to thrive sustainably.</p></div>
        <div className="amc"><h3><span>👁</span> Our Vision</h3><p>A Rwanda where every farmer can access world-class agricultural knowledge, fair markets, and expert support at their fingertips regardless of location.</p></div>
        <div className="amc"><h3><span>💡</span> What We Do</h3><p>We bridge farmers, agronomists, cooperatives, government agencies, and buyers through a unified digital platform covering all 30 districts.</p></div>
        <div className="amc"><h3><span>🤝</span> Our Partners</h3><p>Working with RAB, MINAGRI, RDB, USAID, World Bank, FAO, IFAD, and GIZ to deliver comprehensive agricultural transformation across Rwanda.</p></div>
      </div>
      <div className="team-sec">
        <h3>Our Leadership Team</h3>
        <div className="team-grid">
          <div className="tc2"><div className="tc2-av" style={{ background: '#dcfce7', color: '#15803d' }}>JN</div><div className="tc2-name">Jean Nkurunziza</div><div className="tc2-role">CEO & Founder</div></div>
          <div className="tc2"><div className="tc2-av" style={{ background: '#dbeafe', color: '#1d4ed8' }}>AM</div><div className="tc2-name">Alice Mukamurenzi</div><div className="tc2-role">Chief Agronomist</div></div>
          <div className="tc2"><div className="tc2-av" style={{ background: '#ede9fe', color: '#5b21b6' }}>PI</div><div className="tc2-name">Pierre Ingabire</div><div className="tc2-role">CTO</div></div>
          <div className="tc2"><div className="tc2-av" style={{ background: '#fef3c7', color: '#92400e' }}>MU</div><div className="tc2-name">Marie Uwimana</div><div className="tc2-role">Head of Cooperatives</div></div>
        </div>
      </div>
      <div className="stats-bar">
        <div><div className="sb-val">500K+</div><div className="sb-lbl">Registered Farmers</div></div>
        <div><div className="sb-val">320+</div><div className="sb-lbl">Agronomists</div></div>
        <div><div className="sb-val">185+</div><div className="sb-lbl">Cooperatives</div></div>
        <div><div className="sb-val">30</div><div className="sb-lbl">Districts</div></div>
      </div>
      <Footer />
    </div>
  );
}
