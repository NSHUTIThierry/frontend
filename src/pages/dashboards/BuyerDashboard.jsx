import { useState } from 'react';

export default function BuyerDashboard({ user, onLogout }) {
  const first = user?.name?.split(' ')[0] || 'Alice';
  const inits = user?.initials || 'AI';
  const [tab, setTab] = useState('marketplace');

  function contentFor(t) {
    if (t === 'marketplace') {
      return <div className="dcard"><h4> Marketplace</h4><p>Browse available produce and inputs.</p></div>;
    }
    var titles = {buyRequests:'My Buy Requests',orders:'My Orders',payments:'Payments',history:'History',favorites:'Favorites',messages:'Messages',alerts:'Alerts',profile:'Profile',settings:'Settings'};
    return <div className="dcard"><h4>{titles[t] || t}</h4><p style={{fontSize:'11px',color:'#666'}}>Content coming soon.</p></div>;
  }

  return (
    <div className="page on" id="pg-dash-buyer">
      <div className="buyer-hero">
        <div>
          <h2>Agricultural Marketplace</h2>
          <p>Find fresh produce and agricultural inputs from verified farmers across Rwanda</p>
        </div>
        <button style={{background:'#4ade80',color:'#14532d',border:'none',padding:'6px 14px',borderRadius:'5px',fontSize:'9px',fontWeight:'500',cursor:'pointer'}}>Post a Buy Request</button>
      </div>
      <div className="dash-wrap">
        <div className="dash-sb">
          <div className="dash-sb-top"><div className="dash-sb-logo"><div className="li">🌿</div><div><div className="lt">AgriConnect</div><div className="ls">Rwanda</div></div></div></div>
          <div className="dash-nav">
            <div className={'di ' + (tab==='marketplace' ? 'act' : '')} onClick={function(){setTab('marketplace');}}><span className="dii">🛒</span><span>Marketplace</span></div>
            <div className={'di ' + (tab==='buyRequests' ? 'act' : '')} onClick={function(){setTab('buyRequests');}}><span className="dii">📝</span><span>My Buy Requests</span></div>
            <div className={'di ' + (tab==='orders' ? 'act' : '')} onClick={function(){setTab('orders');}}><span className="dii">📦</span><span>My Orders</span></div>
            <div className={'di ' + (tab==='payments' ? 'act' : '')} onClick={function(){setTab('payments');}}><span className="dii">💳</span><span>Payments</span></div>
            <div className={'di ' + (tab==='history' ? 'act' : '')} onClick={function(){setTab('history');}}><span className="dii">📋</span><span>History</span></div>
            <div className={'di ' + (tab==='favorites' ? 'act' : '')} onClick={function(){setTab('favorites');}}><span className="dii">⭐</span><span>Favorites</span></div>
            <div className={'di ' + (tab==='messages' ? 'act' : '')} onClick={function(){setTab('messages');}}><span className="dii">✉</span><span>Messages</span></div>
            <div className={'di ' + (tab==='alerts' ? 'act' : '')} onClick={function(){setTab('alerts');}}><span className="dii">🔔</span><span>Alerts</span></div>
            <div className={'di ' + (tab==='profile' ? 'act' : '')} onClick={function(){setTab('profile');}}><span className="dii">👤</span><span>Profile</span></div>
            <div className={'di ' + (tab==='settings' ? 'act' : '')} onClick={function(){setTab('settings');}}><span className="dii">⚙</span><span>Settings</span></div>
          </div>
          <div className="sb-prof">
            <div className="sb-prof-card">
              <div className="sb-prow">
                <div className="sb-av" id="buyer-av">{inits}</div>
                <div>
                  <div className="sb-pname" id="buyer-name">{user?.name || 'Alice Ingabire'}</div>
                  <div className="sb-prole" style={{color:'#f59e0b'}}>Buyer 🛒</div>
                </div>
              </div>
              <div className="sb-pdet">📍 Nyarugenge, Kigali</div>
              <button onClick={onLogout} style={{width:'100%',marginTop:'5px',background:'transparent',border:'0.5px solid #f87171',color:'#f87171',padding:'3px',borderRadius:'4px',fontSize:'7px',cursor:'pointer'}}>Logout</button>
            </div>
          </div>
        </div>
        <div className="dash-main">
          <div className="dash-hdr">
            <div className="dash-hdr-right">
              <div className="hbadge">🔔<span className="hbd" style={{background:'#ef4444'}}>3</span></div>
              <div className="huser"><div className="hav" id="buyer-hav">{inits}</div><div><div className="hname" id="buyer-hname">{first}</div><div className="hrole">Buyer</div></div></div>
            </div>
          </div>
          <div className="dash-body">
            {contentFor(tab)}
          </div>
        </div>
      </div>
    </div>
  );
}
