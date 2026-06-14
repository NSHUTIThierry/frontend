import React from 'react';

export default function BuyerDashboard({ user, onLogout }) {
  const first = user?.name?.split(' ')[0] || 'Alice';
  const inits = user?.initials || 'AI';

  return (
    <div className="page on" id="pg-dash-buyer">
      <div className="buyer-hero">
        <div>
          <h2>Agricultural Marketplace</h2>
          <p>Find fresh produce and agricultural inputs from verified farmers across Rwanda</p>
        </div>
        <button style={{ background: '#4ade80', color: '#14532d', border: 'none', padding: '6px 14px', borderRadius: '5px', fontSize: '9px', fontWeight: '500', cursor: 'pointer' }}>
          Post a Buy Request
        </button>
      </div>
      <div className="buyer-body">
        <div className="buyer-search">
          <input placeholder="Search produce, inputs, cooperatives..." />
          <select><option>All Categories</option><option>Vegetables</option><option>Cereals</option><option>Inputs</option></select>
          <select><option>All Districts</option><option>Musanze</option><option>Gasabo</option><option>Huye</option></select>
          <button style={{ background: '#15803d', color: '#fff', border: 'none', padding: '5px 12px', borderRadius: '4px', fontSize: '9px', cursor: 'pointer' }}>Search</button>
        </div>
        <div className="sec-row"><h3>Fresh Produce Available</h3><a>View All</a></div>
        <div className="buyer-grid">
          <div className="bc">
            <div className="bc-img" style={{ background: '#f0fdf4' }}>
              <span className="bc-badge">Grade A</span>🌽
            </div>
            <div className="bc-body">
              <div className="bc-name">Fresh Maize (50kg)</div>
              <div className="bc-seller">Koperative y'Abahinzi</div>
              <div className="bc-loc">📍 Musanze · 500 units</div>
              <div className="bc-foot">
                <span className="bc-price">RWF 12,500</span>
                <button className="bc-btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="bc">
            <div className="bc-img" style={{ background: '#fefce8' }}>
              <span className="bc-badge">Grade A</span>🥔
            </div>
            <div className="bc-body">
              <div className="bc-name">Irish Potatoes (100kg)</div>
              <div className="bc-seller">Gisenyi Farmers Coop</div>
              <div className="bc-loc">📍 Rubavu · 1200 units</div>
              <div className="bc-foot">
                <span className="bc-price">RWF 25,000</span>
                <button className="bc-btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="bc">
            <div className="bc-img" style={{ background: '#f0fdf4' }}>
              <span className="bc-badge">Export</span>🫘
            </div>
            <div className="bc-body">
              <div className="bc-name">Green Beans (20kg)</div>
              <div className="bc-seller">Southern Highlands Coop</div>
              <div className="bc-loc">📍 Huye · 300 units</div>
              <div className="bc-foot">
                <span className="bc-price">RWF 9,000</span>
                <button className="bc-btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="bc">
            <div className="bc-img" style={{ background: '#fff7ed' }}>
              <span className="bc-badge">Fresh</span>🍌
            </div>
            <div className="bc-body">
              <div className="bc-name">Banana Bunches (10)</div>
              <div className="bc-seller">Rwamagana Farmers</div>
              <div className="bc-loc">📍 Rwamagana · 150 units</div>
              <div className="bc-foot">
                <span className="bc-price">RWF 5,500</span>
                <button className="bc-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '8px' }}>
        <button onClick={onLogout} style={{ background: 'transparent', border: '0.5px solid #f87171', color: '#f87171', padding: '4px 12px', borderRadius: '4px', fontSize: '8px', cursor: 'pointer' }}>Logout</button>
      </div>
    </div>
  );
}
