import React from 'react';

export default function FarmerDashboard({ user, onLogout }) {
  const first = user?.name?.split(' ')[0] || 'Marie';
  const inits = user?.initials || 'MU';

  return (
    <div className="page on" id="pg-dash-farmer">
      <div className="dash-wrap">
        <div className="dash-sb">
          <div className="dash-sb-top">
            <div className="dash-sb-logo">
              <div className="li">🌿</div>
              <div>
                <div className="lt">AgriConnect</div>
                <div className="ls">Rwanda</div>
              </div>
            </div>
          </div>
          <div className="dash-nav">
            <div className="di act"><span className="dii">⊞</span><span>My Farm</span></div>
            <div className="di"><span className="dii">🌾</span><span>My Crops</span></div>
            <div className="di"><span className="dii">📋</span><span>Reports</span><span className="dib">2</span></div>
            <div className="di"><span className="dii">👨‍🔬</span><span>Find Agronomist</span></div>
            <div className="di"><span className="dii">📅</span><span>Appointments</span></div>
            <div className="di"><span className="dii">🛒</span><span>Marketplace</span></div>
            <div className="di"><span className="dii">💰</span><span>Sell Produce</span></div>
            <div className="di"><span className="dii">🔔</span><span>Alerts</span><span className="dib">3</span></div>
            <div className="di"><span className="dii">📚</span><span>Knowledge Base</span></div>
            <div className="di"><span className="dii">💳</span><span>Payments</span></div>
            <div className="di"><span className="dii">👤</span><span>Profile</span></div>
          </div>
          <div className="sb-prof">
            <div className="sb-prof-card">
              <div className="sb-prow">
                <div className="sb-av" id="farmer-av">{inits}</div>
                <div>
                  <div className="sb-pname" id="farmer-name">{user?.name || 'Marie Uwimana'}</div>
                  <div className="sb-prole">Farmer 🌾</div>
                </div>
              </div>
              <div className="sb-pdet">📍 Musanze District</div>
              <button onClick={onLogout} style={{ width: '100%', marginTop: '5px', background: 'transparent', border: '0.5px solid #f87171', color: '#f87171', padding: '3px', borderRadius: '4px', fontSize: '7px', cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="dash-main">
          <div className="dash-hdr">
            <div className="dash-search-wrap"><input className="dash-search" placeholder="Search crops, agronomists..." /></div>
            <div className="dash-hdr-right">
              <div className="hbadge">🔔<span className="hbd" style={{ background: '#ef4444' }}>3</span></div>
              <div className="huser">
                <div className="hav" id="farmer-hav">{inits}</div>
                <div>
                  <div className="hname" id="farmer-hname">{first}</div>
                  <div className="hrole">Farmer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dash-body">
            <div className="farmer-dash-hero">
              <h2>Welcome back, <span id="farmer-welcome">{first}</span>! 🌾</h2>
              <p>Manage your farm, connect with experts, and sell your produce all in one place.</p>
            </div>
            <div className="fd-metrics">
              <div className="fd-met"><div className="fd-val">3.2 ha</div><div className="fd-lbl">Farm Size</div></div>
              <div className="fd-met"><div className="fd-val">4</div><div className="fd-lbl">Active Crops</div></div>
              <div className="fd-met"><div className="fd-val">RWF 480K</div><div className="fd-lbl">This Season Sales</div></div>
              <div className="fd-met"><div className="fd-val">2</div><div className="fd-lbl">Pending Reports</div></div>
            </div>
            <div className="fd-body">
              <div className="fd-card">
                <h4>🌾 My Active Crops</h4>
                <table className="dtable">
                  <thead><tr><th>Crop</th><th>Area</th><th>Stage</th><th>Health</th></tr></thead>
                  <tbody>
                    <tr><td>Maize</td><td>1.5 ha</td><td>Flowering</td><td><span className="pill pill-g">Good</span></td></tr>
                    <tr><td>Beans</td><td>0.8 ha</td><td>Germination</td><td><span className="pill pill-y">Monitor</span></td></tr>
                    <tr><td>Potatoes</td><td>0.5 ha</td><td>Planting</td><td><span className="pill pill-g">Good</span></td></tr>
                    <tr><td>Tomatoes</td><td>0.4 ha</td><td>Harvesting</td><td><span className="pill pill-r">Alert</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div className="fd-card">
                <h4>⚠ Active Alerts</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ padding: '5px 7px', background: '#fee2e2', borderRadius: '5px', borderLeft: '2px solid #ef4444' }}>
                    <div style={{ fontSize: '8px', fontWeight: '500', color: '#991b1b' }}>Fall Armyworm Alert</div>
                    <div style={{ fontSize: '7px', color: '#b91c1c' }}>Reported in Musanze district. Inspect your maize immediately.</div>
                  </div>
                  <div style={{ padding: '5px 7px', background: '#fef3c7', borderRadius: '5px', borderLeft: '2px solid #f59e0b' }}>
                    <div style={{ fontSize: '8px', fontWeight: '500', color: '#92400e' }}>Drought Warning</div>
                    <div style={{ fontSize: '7px', color: '#78350f' }}>Low rainfall forecast this week. Consider irrigation.</div>
                  </div>
                  <div style={{ padding: '5px 7px', background: '#dbeafe', borderRadius: '5px', borderLeft: '2px solid #3b82f6' }}>
                    <div style={{ fontSize: '8px', fontWeight: '500', color: '#1e40af' }}>Agronomist Available</div>
                    <div style={{ fontSize: '7px', color: '#1d4ed8' }}>Dr. Jean Pierre is available for consultation today.</div>
                  </div>
                </div>
              </div>
              <div className="fd-card">
                <h4>📅 Upcoming</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div className="sched-item" style={{ background: '#f0fdf4', borderColor: '#15803d' }}>
                    <span className="sched-time" style={{ color: '#14532d' }}>10:00</span>
                    <div><div className="sched-name" style={{ color: '#14532d', fontSize: '8px' }}>Agronomist Visit</div><div className="sched-type" style={{ color: '#15803d' }}>Dr. Jean Pierre — Maize field inspection</div></div>
                  </div>
                  <div className="sched-item" style={{ background: '#eff6ff', borderColor: '#3b82f6' }}>
                    <span className="sched-time" style={{ color: '#1d4ed8' }}>14:00</span>
                    <div><div className="sched-name" style={{ color: '#1e40af', fontSize: '8px' }}>Cooperative Meeting</div><div className="sched-type" style={{ color: '#3b82f6' }}>Monthly members meeting — Musanze Hall</div></div>
                  </div>
                </div>
              </div>
              <div className="fd-card">
                <h4>🛒 Quick Actions</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                  <button className="qa" style={{ background: '#15803d', fontSize: '7px' }}>📋 Submit Report</button>
                  <button className="qa" style={{ background: '#2563eb', fontSize: '7px' }}>👨‍🔬 Find Agronomist</button>
                  <button className="qa" style={{ background: '#047857', fontSize: '7px' }}>💰 Sell Produce</button>
                  <button className="qa" style={{ background: '#7c3aed', fontSize: '7px' }}>📚 Knowledge Base</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
