import { useState } from 'react';

export default function AdminDashboard({ user, onLogout }) {
  const first = user?.name?.split(' ')[0] || 'Admin';
  const inits = user?.initials || 'AD';
  const [tab, setTab] = useState('dashboard');

  return (
    <div className="page on" id="pg-dash-admin">
      <div className="dash-wrap">
        <div className="dash-sb">
          <div className="dash-sb-top">
            <div className="dash-sb-logo">
              <div className="li">🌿</div>
              <div>
                <div className="lt">AgriConnect</div>
                <div className="ls">Admin Panel</div>
              </div>
            </div>
          </div>
          <div className="dash-nav">
            <div className={'di ' + (tab==='dashboard' ? 'act' : '')} onClick={function(){setTab('dashboard');}}><span className="dii">⊞</span><span>Dashboard</span></div>
            <div className={'di ' + (tab==='users' ? 'act' : '')} onClick={function(){setTab('users');}}><span className="dii">👥</span><span>All Users</span></div>
            <div className={'di ' + (tab==='farmers' ? 'act' : '')} onClick={function(){setTab('farmers');}}><span className="dii">👨‍🌾</span><span>Farmers</span></div>
            <div className={'di ' + (tab==='agronomists' ? 'act' : '')} onClick={function(){setTab('agronomists');}}><span className="dii">👨‍🔬</span><span>Agronomists</span></div>
            <div className={'di ' + (tab==='cooperatives' ? 'act' : '')} onClick={function(){setTab('cooperatives');}}><span className="dii">🤝</span><span>Cooperatives</span></div>
            <div className={'di ' + (tab==='marketplace' ? 'act' : '')} onClick={function(){setTab('marketplace');}}><span className="dii">🛒</span><span>Marketplace</span></div>
            <div className={'di ' + (tab==='reports' ? 'act' : '')} onClick={function(){setTab('reports');}}><span className="dii">📋</span><span>Reports</span><span className="dib">12</span></div>
            <div className={'di ' + (tab==='alerts' ? 'act' : '')} onClick={function(){setTab('alerts');}}><span className="dii">🔔</span><span>Alerts</span><span className="dib">5</span></div>
            <div className={'di ' + (tab==='analytics' ? 'act' : '')} onClick={function(){setTab('analytics');}}><span className="dii">📊</span><span>Analytics</span></div>
            <div className={'di ' + (tab==='settings' ? 'act' : '')} onClick={function(){setTab('settings');}}><span className="dii">⚙</span><span>System Settings</span></div>
          </div>
          <div className="sb-prof">
            <div className="sb-prof-card">
              <div className="sb-prow">
                <div className="sb-av" style={{ color: '#fbbf24', borderColor: '#fbbf24' }} id="admin-av">{inits}</div>
                <div>
                  <div className="sb-pname" id="admin-name">{user?.name || 'System Admin'}</div>
                  <div className="sb-prole" style={{ color: '#fbbf24' }}>System Admin 🔑</div>
                </div>
              </div>
              <button onClick={onLogout} style={{ width: '100%', marginTop: '5px', background: 'transparent', border: '0.5px solid #f87171', color: '#f87171', padding: '3px', borderRadius: '4px', fontSize: '7px', cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="dash-main">
          <div className="dash-hdr">
            <div className="dash-search-wrap"><input className="dash-search" placeholder="Search users, reports, system..." /></div>
            <div className="dash-hdr-right">
              <div className="hbadge">🔔<span className="hbd" style={{ background: '#ef4444' }}>5</span></div>
              <div className="huser">
                <div className="hav" style={{ background: '#fef3c7', color: '#92400e' }}>AD</div>
                <div>
                  <div className="hname">Admin</div>
                  <div className="hrole">System Admin</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dash-body">
            <div>
              <div className="dash-ptitle">System Administration Dashboard</div>
              <div className="dash-psub">AgriConnect Rwanda — Full platform overview</div>
            </div>
            <div className="admin-metrics">
              <div className="am"><div className="am-val">24,800</div><div className="am-lbl">Total Farmers</div></div>
              <div className="am"><div className="am-val">320</div><div className="am-lbl">Agronomists</div></div>
              <div className="am"><div className="am-val">185</div><div className="am-lbl">Cooperatives</div></div>
              <div className="am"><div className="am-val">1,240</div><div className="am-lbl">Buyers</div></div>
              <div className="am"><div className="am-val">12,450</div><div className="am-lbl">Issues Resolved</div></div>
            </div>
            <div className="dash-grid2" style={{ marginTop: '8px' }}>
              <div className="dcard">
                <div className="dcard-head"><h3>Recent User Registrations</h3></div>
                <table className="dtable">
                  <thead><tr><th>Name</th><th>Role</th><th>District</th><th>Joined</th><th>Status</th></tr></thead>
                  <tbody>
                    <tr><td>Claudine Mukamana</td><td>Farmer</td><td>Gasabo</td><td>2024-03-15</td><td><span className="pill pill-g">Active</span></td></tr>
                    <tr><td>Dr. Emmanuel Habimana</td><td>Agronomist</td><td>Kicukiro</td><td>2024-03-14</td><td><span className="pill pill-g">Verified</span></td></tr>
                    <tr><td>Musanze Coop</td><td>Cooperative</td><td>Musanze</td><td>2024-03-13</td><td><span className="pill pill-y">Pending</span></td></tr>
                    <tr><td>Alice Ingabire</td><td>Buyer</td><td>Nyarugenge</td><td>2024-03-12</td><td><span className="pill pill-g">Active</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div className="dcard">
                  <div className="dcard-head"><h3>System Health</h3></div>
                  <div className="sev-bars">
                    <div><div className="sev-row"><span>Uptime</span><span>99.8%</span></div><div className="prog"><div className="prog-fill" style={{ width: '99.8%', background: '#15803d' }}></div></div></div>
                    <div><div className="sev-row"><span>Active Users</span><span>87%</span></div><div className="prog"><div className="prog-fill" style={{ width: '87%', background: '#2563eb' }}></div></div></div>
                    <div><div className="sev-row"><span>Reports Resolved</span><span>76%</span></div><div className="prog"><div className="prog-fill" style={{ width: '76%', background: '#f59e0b' }}></div></div></div>
                  </div>
                </div>
                <div className="dcard">
                  <div className="dcard-head"><h3>Quick Actions</h3></div>
                  <div className="qa-grid">
                    <button className="qa" style={{ background: '#1e293b', fontSize: '7px' }}>👤 Add User</button>
                    <button className="qa" style={{ background: '#15803d', fontSize: '7px' }}>✅ Verify Agro</button>
                    <button className="qa" style={{ background: '#dc2626', fontSize: '7px' }}>🔔 Send Alert</button>
                    <button className="qa" style={{ background: '#7c3aed', fontSize: '7px' }}>📊 Reports</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
