import React from 'react';
import Footer from '../components/Footer';

export default function ServicesPage({ onGoTo }) {
  return (
    <div className="page on" id="pg-services">
      <div className="svc-hero">
        <div className="sbg">Farmer Services</div>
        <h2>Everything Rwanda's Farmers Need in One Platform</h2>
        <p>Access expert agronomists, government programs, crop information, and market tools — all in one place.</p>
      </div>
      <div className="svc-grid">
        <div className="svc-card"><div className="svc-icon" style={{ background: '#dcfce7' }}>🌤</div><h3>Crop & Weather Information</h3><p>Real-time weather updates and farming insights tailored to your district and crop type throughout the season.</p></div>
        <div className="svc-card"><div className="svc-icon" style={{ background: '#dbeafe' }}>🏛</div><h3>Government Programs & Subsidies</h3><p>Access government agricultural programs, subsidies, and training programs available for registered farmers.</p></div>
        <div className="svc-card"><div className="svc-icon" style={{ background: '#ede9fe' }}>👨‍🔬</div><h3>Agronomist Consulting</h3><p>Book certified agronomists for expert guidance on crop disease, soil health, and field visits.</p></div>
        <div className="svc-card"><div className="svc-icon" style={{ background: '#fef3c7' }}>🛒</div><h3>Agriculture Marketplace</h3><p>Buy agricultural inputs and sell your farm produce directly to buyers across Rwanda at fair prices.</p></div>
        <div className="svc-card"><div className="svc-icon" style={{ background: '#ffedd5' }}>📋</div><h3>Agriculture Management</h3><p>Track farm operations, field schedules, planting cycles, and production records in one dashboard.</p></div>
        <div className="svc-card"><div className="svc-icon" style={{ background: '#ccfbf1' }}>💳</div><h3>Digital Payments</h3><p>Secure mobile money payments for buying inputs and receiving payments from marketplace sales.</p></div>
      </div>
      <div className="svc-cta">
        <button className="btn-green" onClick={() => onGoTo('register')}>Get Started Free</button>
        <button className="btn-outline-green">Learn More</button>
      </div>
      <Footer />
    </div>
  );
}
