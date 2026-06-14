import React from 'react';
import Footer from '../components/Footer';

export default function CooperativesPage({ onGoTo }) {
  return (
    <div className="page on" id="pg-cooperative">
      <div className="coop-hero">
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.15)', color: '#bfdbfe', fontSize: '8px', padding: '2px 8px', borderRadius: '10px', marginBottom: '7px' }}>
          Cooperative Management
        </div>
        <h2>Manage Your Cooperative Efficiently</h2>
        <p>Digital tools for member management, group procurement, collective sales, and financial tracking across all districts.</p>
      </div>
      <div className="coop-stats-bar">
        <div className="cs"><div className="cs-val">185+</div><div className="cs-lbl">Active Cooperatives</div></div>
        <div className="cs"><div className="cs-val">24,800+</div><div className="cs-lbl">Coop Members</div></div>
        <div className="cs"><div className="cs-val">RWF 2.4B</div><div className="cs-lbl">Group Sales</div></div>
        <div className="cs"><div className="cs-val">30</div><div className="cs-lbl">Districts</div></div>
      </div>
      <div className="coop-grid">
        <div className="coop-card"><h4><span>👥</span> Member Management</h4><p>Register and manage all cooperative members. Track contributions, loans, and individual performance.</p></div>
        <div className="coop-card"><h4><span>🛒</span> Group Procurement</h4><p>Purchase agricultural inputs in bulk for all members and distribute at subsidized cooperative prices.</p></div>
        <div className="coop-card"><h4><span>📊</span> Collective Sales</h4><p>Pool produce from all members for bulk sales to markets and exporters at negotiated prices.</p></div>
        <div className="coop-card"><h4><span>💳</span> Financial Tracking</h4><p>Track all cooperative finances, member savings, distributions, and generate financial reports anytime.</p></div>
        <div className="coop-card"><h4><span>📋</span> Reports & Analytics</h4><p>Access detailed analytics on production, sales, and member performance across your cooperative.</p></div>
        <div className="coop-card"><h4><span>📱</span> Mobile Access</h4><p>Manage your cooperative on mobile — members can check balances, submit produce, and receive payments.</p></div>
      </div>
      <div className="coop-cta">
        <button className="btn-blue" onClick={() => onGoTo('register')}>Register Cooperative</button>
        <button className="btn-outline-blue">Learn More</button>
      </div>
      <Footer />
    </div>
  );
}
