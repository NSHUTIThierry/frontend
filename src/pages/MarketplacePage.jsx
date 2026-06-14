import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function MarketplacePage({ onGoTo }) {
  const [activeTab, setActiveTab] = useState('inputs');

  return (
    <div className="page on" id="pg-marketplace">
      <div className="mkt-hero"><div><h2>Buy Agricultural Inputs. Sell Farm Produce Across Rwanda.</h2><p>Connecting farmers, buyers and cooperatives with the best prices</p></div><button className="btn-green">View All Marketplaces</button></div>
      <div className="mkt-body">
        <div className="mkt-tabs">
          <button className={`mt ${activeTab === 'inputs' ? 'act' : ''}`} onClick={() => setActiveTab('inputs')}>Popular Inputs</button>
          <button className={`mt ${activeTab === 'produce' ? 'act' : ''}`} onClick={() => setActiveTab('produce')}>Top Produce</button>
          <button className={`mt ${activeTab === 'seeds' ? 'act' : ''}`} onClick={() => setActiveTab('seeds')}>Seeds</button>
          <button className={`mt ${activeTab === 'fertilizers' ? 'act' : ''}`} onClick={() => setActiveTab('fertilizers')}>Fertilizers</button>
        </div>
        <div className="sec-row"><h3>Popular Inputs</h3><a>View All</a></div>
        <div className="prod-grid">
          <div className="pc"><div className="pc-img">🧪</div><div className="pc-body"><div className="pc-name">Fertilizer</div><div className="pc-price">RWF 8,500</div><button className="pc-btn">Buy Now</button></div></div>
          <div className="pc"><div className="pc-img">🌽</div><div className="pc-body"><div className="pc-name">Maize Seeds</div><div className="pc-price">RWF 5,000</div><button className="pc-btn">Buy Now</button></div></div>
          <div className="pc"><div className="pc-img">🫘</div><div className="pc-body"><div className="pc-name">Bean Seeds</div><div className="pc-price">RWF 3,200</div><button className="pc-btn">Buy Now</button></div></div>
          <div className="pc"><div className="pc-img">💊</div><div className="pc-body"><div className="pc-name">Pesticides</div><div className="pc-price">RWF 12,000</div><button className="pc-btn">Buy Now</button></div></div>
          <div className="pc"><div className="pc-img">🌿</div><div className="pc-body"><div className="pc-name">Animal Feed</div><div className="pc-price">RWF 9,000</div><button className="pc-btn">Buy Now</button></div></div>
        </div>
        <div className="sec-row"><h3>Top Produce</h3><a>View All</a></div>
        <div className="prod-grid">
          <div className="pc"><div className="pc-img">🌾</div><div className="pc-body"><div className="pc-name">Maize</div><div className="pc-price">RWF 450/kg</div><button className="pc-btn" style={{ background: '#047857' }}>Sell Now</button></div></div>
          <div className="pc"><div className="pc-img">🥔</div><div className="pc-body"><div className="pc-name">Irish Potatoes</div><div className="pc-price">RWF 300/kg</div><button className="pc-btn" style={{ background: '#047857' }}>Sell Now</button></div></div>
          <div className="pc"><div className="pc-img">🍅</div><div className="pc-body"><div className="pc-name">Tomatoes</div><div className="pc-price">RWF 600/kg</div><button className="pc-btn" style={{ background: '#047857' }}>Sell Now</button></div></div>
          <div className="pc"><div className="pc-img">🍌</div><div className="pc-body"><div className="pc-name">Bananas</div><div className="pc-price">RWF 200/kg</div><button className="pc-btn" style={{ background: '#047857' }}>Sell Now</button></div></div>
          <div className="pc"><div className="pc-img">🫘</div><div className="pc-body"><div className="pc-name">Beans</div><div className="pc-price">RWF 550/kg</div><button className="pc-btn" style={{ background: '#047857' }}>Sell Now</button></div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
