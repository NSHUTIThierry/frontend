import { useState } from 'react';

function dashContent(t) {
  if (t === 'dashboard') {return <div className="dcard"><h4>Dashboard Overview</h4><p style={{fontSize:'11px',color:'#666'}}>Welcome to your cooperative dashboard.</p></div>;}
  var titles = {members:'Members',procurement:'Procurement',sales:'Collective Sales',finance:'Finance',analytics:'Analytics',reports:'Reports',alerts:'Alerts',messages:'Messages',settings:'Settings'};
  return <div className="dcard"><h4>{titles[t] || t}</h4><p style={{fontSize:'11px',color:'#666'}}>Content coming soon.</p></div>;
}

export default function CooperativeDashboard({ user, onLogout }) {
  const first = user?.name?.split(' ')[0] || 'Pierre';
  const inits = user?.initials || 'PN';
  var sT = useState('dashboard');
  var tab = sT[0], setTab = sT[1];

  return (
    <div className="page on" id="pg-dash-coop">
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
            <div className={'di ' + (tab==='dashboard' ? 'act' : '')} onClick={function(){setTab('dashboard');}}><span className="dii">⊞</span><span>Dashboard</span></div>
            <div className={'di ' + (tab==='members' ? 'act' : '')} onClick={function(){setTab('members');}}><span className="dii">👥</span><span>Members</span></div>
            <div className={'di ' + (tab==='procurement' ? 'act' : '')} onClick={function(){setTab('procurement');}}><span className="dii">🛒</span><span>Procurement</span></div>
            <div className={'di ' + (tab==='sales' ? 'act' : '')} onClick={function(){setTab('sales');}}><span className="dii">💰</span><span>Collective Sales</span></div>
            <div className={'di ' + (tab==='finance' ? 'act' : '')} onClick={function(){setTab('finance');}}><span className="dii">💳</span><span>Finance</span></div>
            <div className={'di ' + (tab==='analytics' ? 'act' : '')} onClick={function(){setTab('analytics');}}><span className="dii">📊</span><span>Analytics</span></div>
            <div className={'di ' + (tab==='reports' ? 'act' : '')} onClick={function(){setTab('reports');}}><span className="dii">📋</span><span>Reports</span><span className="dib">4</span></div>
            <div className={'di ' + (tab==='alerts' ? 'act' : '')} onClick={function(){setTab('alerts');}}><span className="dii">🔔</span><span>Alerts</span></div>
            <div className={'di ' + (tab==='messages' ? 'act' : '')} onClick={function(){setTab('messages');}}><span className="dii">✉</span><span>Messages</span><span className="dib">3</span></div>
            <div className={'di ' + (tab==='settings' ? 'act' : '')} onClick={function(){setTab('settings');}}><span className="dii">⚙</span><span>Settings</span></div>
          </div>
          <div className="sb-prof">
            <div className="sb-prof-card">
              <div className="sb-prow">
                <div className="sb-av" id="coop-av">{inits}</div>
                <div>
                  <div className="sb-pname" id="coop-name">{user?.name || 'Pierre Nkurunziza'}</div>
                  <div className="sb-prole" style={{ color: '#60a5fa' }}>Coop Manager</div>
                </div>
              </div>
              <div className="sb-pdet">🤝 Musanze Coop</div>
              <button onClick={onLogout} style={{ width: '100%', marginTop: '5px', background: 'transparent', border: '0.5px solid #f87171', color: '#f87171', padding: '3px', borderRadius: '4px', fontSize: '7px', cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="dash-main">
          <div className="dash-hdr">
            <div className="dash-search-wrap"><input className="dash-search" placeholder="Search members, sales..." /></div>
            <div className="dash-hdr-right">
              <div className="hbadge">🔔<span className="hbd" style={{ background: '#ef4444' }}>4</span></div>
              <div className="huser">
                <div className="hav" style={{ background: '#dbeafe', color: '#1d4ed8' }} id="coop-hav">{inits}</div>
                <div>
                  <div className="hname" id="coop-hname">{first}</div>
                  <div className="hrole">Coop Manager</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dash-body">
            <div>
              <div className="dash-ptitle">Cooperative Dashboard</div>
              <div className="dash-psub">Musanze Farmers Cooperative — Overview for this month</div>
            </div>
            <div className="metrics">
              <div className="met" style={{ borderColor: '#bfdbfe' }}>
                <div className="met-icon" style={{ background: '#dbeafe', color: '#1d4ed8' }}>👥</div>
                <div className="met-val">247</div>
                <div className="met-label">Total Members</div>
                <div className="met-ch" style={{ color: '#1d4ed8' }}>+12 this month</div>
              </div>
              <div className="met" style={{ borderColor: '#bbf7d0' }}>
                <div className="met-icon" style={{ background: '#dcfce7', color: '#15803d' }}>💰</div>
                <div className="met-val">RWF 8.4M</div>
                <div className="met-label">Group Sales</div>
                <div className="met-ch" style={{ color: '#15803d' }}>+18% vs last</div>
              </div>
              <div className="met" style={{ borderColor: '#fde68a' }}>
                <div className="met-icon" style={{ background: '#fef3c7', color: '#d97706' }}>🛒</div>
                <div className="met-val">RWF 2.1M</div>
                <div className="met-label">Procurement</div>
                <div className="met-ch" style={{ color: '#d97706' }}>This season</div>
              </div>
              <div className="met" style={{ borderColor: '#e9d5ff' }}>
                <div className="met-icon" style={{ background: '#f3e8ff', color: '#7c3aed' }}>🌾</div>
                <div className="met-val">48.3 MT</div>
                <div className="met-label">Produce Pooled</div>
                <div className="met-ch" style={{ color: '#7c3aed' }}>This season</div>
              </div>
              <div className="met" style={{ borderColor: '#bbf7d0' }}>
                <div className="met-icon" style={{ background: '#dcfce7', color: '#15803d' }}>📊</div>
                <div className="met-val">92%</div>
                <div className="met-label">Active Members</div>
                <div className="met-ch" style={{ color: '#15803d' }}>Good standing</div>
              </div>
            </div>
            <div className="dash-grid2" style={{ marginTop: '8px' }}>
              <div className="dcard">
                <div className="dcard-head"><h3>Member Overview</h3><p>Top contributing members this season</p></div>
                <table className="dtable">
                  <thead><tr><th>Member</th><th>District</th><th>Produce (kg)</th><th>Sales (RWF)</th><th>Status</th></tr></thead>
                  <tbody>
                    <tr><td>Claudine Mukamana</td><td>Gasabo</td><td>850</td><td>382,500</td><td><span className="pill pill-g">Active</span></td></tr>
                    <tr><td>Emmanuel Habimana</td><td>Musanze</td><td>1,200</td><td>540,000</td><td><span className="pill pill-g">Active</span></td></tr>
                    <tr><td>Vestine Nyirahabimana</td><td>Rulindo</td><td>620</td><td>279,000</td><td><span className="pill pill-g">Active</span></td></tr>
                    <tr><td>Jean-Baptiste Nkusi</td><td>Musanze</td><td>950</td><td>427,500</td><td><span className="pill pill-y">Monitor</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div className="dcard">
                  <div className="dcard-head"><h3>Sales by Crop</h3></div>
                  <div className="bar-list">
                    <div className="bar-row"><span className="bar-lbl">Maize</span><div className="bar-track"><div className="bar-fill" style={{ width: '100%', background: '#1d4ed8' }}></div></div><span className="bar-num">42%</span></div>
                    <div className="bar-row"><span className="bar-lbl">Potatoes</span><div className="bar-track"><div className="bar-fill" style={{ width: '71%', background: '#1d4ed8' }}></div></div><span className="bar-num">30%</span></div>
                    <div className="bar-row"><span className="bar-lbl">Beans</span><div className="bar-track"><div className="bar-fill" style={{ width: '45%', background: '#1d4ed8' }}></div></div><span className="bar-num">19%</span></div>
                    <div className="bar-row"><span className="bar-lbl">Other</span><div className="bar-track"><div className="bar-fill" style={{ width: '21%', background: '#1d4ed8' }}></div></div><span className="bar-num">9%</span></div>
                  </div>
                </div>
                <div className="dcard">
                  <div className="dcard-head"><h3>Quick Actions</h3></div>
                  <div className="qa-grid">
                    <button className="qa" style={{ background: '#1d4ed8', fontSize: '7px' }}>👤 Add Member</button>
                    <button className="qa" style={{ background: '#15803d', fontSize: '7px' }}>💰 Record Sale</button>
                    <button className="qa" style={{ background: '#7c3aed', fontSize: '7px' }}>🛒 Procurement</button>
                    <button className="qa" style={{ background: '#d97706', fontSize: '7px' }}>📊 Reports</button>
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
