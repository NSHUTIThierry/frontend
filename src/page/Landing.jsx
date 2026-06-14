import React, { useState } from 'react'
import { useSession } from '../store/useSession'

const Landing = ({ onNavigate, onShowLogin, onShowRegister }) => {
  const { user, login, logout } = useSession()
  const [currentPage, setCurrentPage] = useState('home')

  const goTo = (page) => {
    setCurrentPage(page)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const email = document.getElementById('l-email')?.value
    const password = document.getElementById('l-pass')?.value
    if (email && password) {
      // Mock login - replace with actual API call
      login({ email, name: email.split('@')[0], role: 'farmer' }, 'mock-token')
      onShowLogin(false)
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const name = document.getElementById('r-name')?.value
    const email = document.getElementById('r-email')?.value
    const role = document.getElementById('r-role')?.value
    if (name && email && role) {
      login({ email, name, role }, 'mock-token')
      onShowRegister(false)
    }
  }

  return (
    <div className="site-wrap">
      {/* TOPBAR */}
      <div className="topbar">
        <span>🌿 Rwanda's Premier Agricultural Platform | Connecting Farmers, Agronomists & Markets</span>
        <span>📞 +250 788 000 000 &nbsp;|&nbsp; ✉ info@agriconnect.rw</span>
      </div>

      {/* NAVIGATION */}
      <nav className="nav">
        <div className="nav-brand" onClick={() => goTo('home')}>
          <div className="nav-leaf">🌿</div>
          <div>
            <div className="nav-b1">AgriConnect</div>
            <div className="nav-b2">Rwanda</div>
          </div>
        </div>
        <div className="nav-links">
          <button className={`nl ${currentPage === 'home' ? 'act' : ''}`} onClick={() => goTo('home')}>
            Home
          </button>
          <button className={`nl ${currentPage === 'marketplace' ? 'act' : ''}`} onClick={() => goTo('marketplace')}>
            Marketplace
          </button>
          <button className={`nl ${currentPage === 'services' ? 'act' : ''}`} onClick={() => goTo('services')}>
            Farmer Services
          </button>
          <button className={`nl ${currentPage === 'cooperative' ? 'act' : ''}`} onClick={() => goTo('cooperative')}>
            Cooperatives
          </button>
          <button className={`nl ${currentPage === 'reports' ? 'act' : ''}`} onClick={() => goTo('reports')}>
            Reports & Alerts
          </button>
          <button className={`nl ${currentPage === 'about' ? 'act' : ''}`} onClick={() => goTo('about')}>
            About Us
          </button>
        </div>
        <div className="nav-auth" id="nav-auth">
          {user ? (
            <>
              <button className="btn-ln" style={{ background: '#4ade80', color: '#14532d', borderColor: '#4ade80' }}>
                My Dashboard
              </button>
              <button className="btn-logout" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn-ln" onClick={() => onShowLogin(true)}>
                Login
              </button>
              <button className="btn-rg" onClick={() => onShowRegister(true)}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <div className="page on">
          {/* HERO SECTION */}
          <div className="hero">
            <div>
              <div className="hero-badge">
                <span></span> Rwanda's #1 Agricultural Platform
              </div>
              <h1>
                Empowering Rwanda's Farmers.<br />
                <em>Strengthening Agricultural Growth.</em>
              </h1>
              <p className="hero-sub">
                AgriConnect Rwanda is a digital agriculture coordination platform connecting farmers, buyers, cooperatives, and agronomists across all 30 districts of Rwanda.
              </p>
              <div className="hero-checks">
                <div className="hero-check">
                  <div className="hc-dot">✓</div> Connect with certified agronomists instantly
                </div>
                <div className="hero-check">
                  <div className="hc-dot">✓</div> Access real-time crop disease alerts
                </div>
                <div className="hero-check">
                  <div className="hc-dot">✓</div> Buy and sell produce in the marketplace
                </div>
              </div>
              <div className="hero-btns">
                <button className="hbtn-y" onClick={() => onShowRegister(true)}>
                  Join Free →
                </button>
                <button className="hbtn-g" onClick={() => goTo('services')}>
                  ▶ Explore Services
                </button>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="hs-val">500K+</div>
                  <div className="hs-lbl">Farmers</div>
                </div>
                <div>
                  <div className="hs-val">50K+</div>
                  <div className="hs-lbl">Agronomists</div>
                </div>
                <div>
                  <div className="hs-val">185+</div>
                  <div className="hs-lbl">Cooperatives</div>
                </div>
                <div>
                  <div className="hs-val">30</div>
                  <div className="hs-lbl">Districts</div>
                </div>
              </div>
            </div>
            <div className="hero-img-box">
              <img src="/mnt/user-data/uploads/1781248556734_image.png" alt="Rwandan farmer in field" />
              <div className="hero-float1">
                <div className="f1t">Today's Market</div>
                <div className="f1p">Maize: RWF 250/kg</div>
                <div className="f1s">↑ 5% this week</div>
              </div>
              <div className="hero-float2">
                <div className="f2av">JD</div>
                <div>
                  <div className="f2name">Dr. Jean Pierre</div>
                  <div className="f2role">🟢 Agronomist Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS BAR */}
          <div className="stats-bar">
            <div>
              <div className="sb-val">500K+</div>
              <div className="sb-lbl">Registered Farmers</div>
            </div>
            <div>
              <div className="sb-val">50K+</div>
              <div className="sb-lbl">Agronomists</div>
            </div>
            <div>
              <div className="sb-val">100K+</div>
              <div className="sb-lbl">Cooperatives</div>
            </div>
            <div>
              <div className="sb-val">30</div>
              <div className="sb-lbl">Districts Connected</div>
            </div>
            <div>
              <div className="sb-val">12K+</div>
              <div className="sb-lbl">Issues Resolved</div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="feat-sec">
            <div className="sec-badge">Platform Features</div>
            <div className="sec-title">Everything You Need to Grow</div>
            <div className="sec-sub">Comprehensive tools for every stakeholder in Rwanda's agricultural value chain.</div>
            <div className="feat-grid">
              <div className="fc">
                <div className="fc-icon" style={{ background: '#dcfce7' }}>
                  🌤
                </div>
                <h4>Crop & Weather Info</h4>
                <p>Real-time weather and farming insights for your district.</p>
              </div>
              <div className="fc">
                <div className="fc-icon" style={{ background: '#dbeafe' }}>
                  🏛
                </div>
                <h4>Government Programs</h4>
                <p>Access subsidies and training programs for registered farmers.</p>
              </div>
              <div className="fc">
                <div className="fc-icon" style={{ background: '#ede9fe' }}>
                  👨‍🔬
                </div>
                <h4>Agronomist Connect</h4>
                <p>Book certified experts for crop diagnosis and field visits.</p>
              </div>
              <div className="fc">
                <div className="fc-icon" style={{ background: '#fef3c7' }}>
                  🛒
                </div>
                <h4>Marketplace</h4>
                <p>Buy inputs and sell produce at fair prices across Rwanda.</p>
              </div>
              <div className="fc">
                <div className="fc-icon" style={{ background: '#ffedd5' }}>
                  📋
                </div>
                <h4>Farm Management</h4>
                <p>Track operations, planting cycles and production records.</p>
              </div>
              <div className="fc">
                <div className="fc-icon" style={{ background: '#ccfbf1' }}>
                  🤝
                </div>
                <h4>Cooperative Tools</h4>
                <p>Manage members, procurement, and group sales.</p>
              </div>
              <div className="fc">
                <div className="fc-icon" style={{ background: '#fce7f3' }}>
                  🔔
                </div>
                <h4>Alerts & Warnings</h4>
                <p>Real-time pest and disease outbreak notifications.</p>
              </div>
              <div className="fc">
                <div className="fc-icon" style={{ background: '#fff7ed' }}>
                  💳
                </div>
                <h4>Digital Payments</h4>
                <p>Secure mobile money for buying and receiving payments.</p>
              </div>
            </div>
          </div>

          {/* MARKETPLACE PREVIEW */}
          <div className="mkt-prev">
            <div className="sec-badge">Marketplace Preview</div>
            <div className="sec-title">Buy Agricultural Inputs. Sell Farm Produce.</div>
            <div className="sec-sub">Connecting farmers, buyers and cooperatives across Rwanda.</div>
            <div className="mkt-grid">
              <div className="mc">
                <div className="mc-img" style={{ background: '#f0fdf4' }}>
                  🌽
                </div>
                <div className="mc-body">
                  <div className="mc-name">Fresh Maize (50kg)</div>
                  <div className="mc-seller">Koperative y'Abahinzi</div>
                  <div className="mc-row">
                    <div className="mc-price">RWF 12,500</div>
                    <button className="mc-btn" onClick={() => goTo('marketplace')}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="mc">
                <div className="mc-img" style={{ background: '#fefce8' }}>
                  🥔
                </div>
                <div className="mc-body">
                  <div className="mc-name">Irish Potatoes (100kg)</div>
                  <div className="mc-seller">Gisenyi Farmers Coop</div>
                  <div className="mc-row">
                    <div className="mc-price">RWF 25,000</div>
                    <button className="mc-btn" onClick={() => goTo('marketplace')}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="mc">
                <div className="mc-img" style={{ background: '#f0fdf4' }}>
                  🫘
                </div>
                <div className="mc-body">
                  <div className="mc-name">Green Beans (20kg)</div>
                  <div className="mc-seller">Southern Highlands Coop</div>
                  <div className="mc-row">
                    <div className="mc-price">RWF 9,000</div>
                    <button className="mc-btn" onClick={() => goTo('marketplace')}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ISSUE REPORTING */}
          <div style={{ padding: '14px 20px' }}>
            <div className="sec-badge">Issue Reporting</div>
            <div className="sec-title">Report Agricultural Issues Quickly</div>
            <div className="rpt-strip">
              <div>
                <p style={{ fontSize: '9px', color: 'var(--color-text-primary)', fontWeight: '500', marginBottom: '4px' }}>
                  Farmers can instantly submit:
                </p>
                <div className="rpt-icons">
                  <div className="rpt-ic">
                    <span>🐛</span>
                    <span>Pest Outbreak</span>
                  </div>
                  <div className="rpt-ic">
                    <span>🌿</span>
                    <span>Crop Disease</span>
                  </div>
                  <div className="rpt-ic">
                    <span>🌊</span>
                    <span>Flood Reports</span>
                  </div>
                  <div className="rpt-ic">
                    <span>☀</span>
                    <span>Drought Stress</span>
                  </div>
                  <div className="rpt-ic">
                    <span>🪣</span>
                    <span>Fertilizer Shortage</span>
                  </div>
                </div>
              </div>
              <button className="btn-green" onClick={() => goTo('reports')}>
                Submit Report →
              </button>
            </div>
          </div>

          {/* PARTNERS */}
          <div className="partners-sec">
            <p>Partners working together for Rwanda agriculture development</p>
            <div className="plogos">
              <div className="plogo">RAB</div>
              <div className="plogo">RCA</div>
              <div className="plogo">MINAGRI</div>
              <div className="plogo">USAID</div>
              <div className="plogo">World Bank</div>
              <div className="plogo">FAO</div>
              <div className="plogo">GIZ</div>
            </div>
          </div>

          {/* TESTIMONIALS */}
          <div className="testi-sec">
            <div className="sec-badge">Testimonials</div>
            <div className="sec-title">What Our Users Are Saying</div>
            <div className="testi-grid">
              <div className="tc">
                <div className="tc-stars">★★★★★</div>
                <div className="tc-text">
                  "Helps me find crop info easily without depending on anyone. I can now plan my harvest better."
                </div>
                <div className="tc-author">
                  <div className="tc-av" style={{ background: '#dcfce7', color: '#15803d' }}>
                    JG
                  </div>
                  <div>
                    <div className="tc-name">Jean Clode</div>
                    <div className="tc-role">Maize Farmer, Musanze</div>
                  </div>
                </div>
              </div>
              <div className="tc">
                <div className="tc-stars">★★★★★</div>
                <div className="tc-text">
                  "Improved our cooperative procurement and sales tracking by 60%. An incredible tool for us."
                </div>
                <div className="tc-author">
                  <div className="tc-av" style={{ background: '#dbeafe', color: '#1d4ed8' }}>
                    UN
                  </div>
                  <div>
                    <div className="tc-name">Uwase Neza</div>
                    <div className="tc-role">Coop Manager, Rwamagana</div>
                  </div>
                </div>
              </div>
              <div className="tc">
                <div className="tc-stars">★★★★★</div>
                <div className="tc-text">
                  "Reporting crop disease through the platform helped us get intervention before the whole harvest was lost."
                </div>
                <div className="tc-author">
                  <div className="tc-av" style={{ background: '#ede9fe', color: '#5b21b6' }}>
                    ME
                  </div>
                  <div>
                    <div className="tc-name">Mukazitoni Eric</div>
                    <div className="tc-role">Farmer, Bugesera</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* APP BANNER */}
          <div className="app-banner">
            <div>
              <p>Download the AgriConnect App</p>
              <small>Get all features on your mobile phone</small>
            </div>
            <div className="app-btns">
              <span>App Store</span>
              <span>Google Play</span>
            </div>
          </div>

          {/* FOOTER */}
          <Footer />
        </div>
      )}

      {/* OTHER PAGES - Placeholder */}
      {currentPage !== 'home' && <OtherPages page={currentPage} goTo={goTo} />}
    </div>
  )
}

const Footer = () => (
  <div>
    <div className="footer">
      <div>
        <div className="footer-brand-row">
          <span>🌿</span>
          <span>AgriConnect Rwanda</span>
        </div>
        <p>Bridging Rwanda's farmers, agronomists, cooperatives, and markets through smart digital agriculture technology.</p>
      </div>
      <div>
        <h5>Quick Links</h5>
        <a>Home</a>
        <a>Marketplace</a>
        <a>Farmer Services</a>
        <a>Cooperatives</a>
        <a>Reports & Alerts</a>
        <a>About Us</a>
      </div>
      <div>
        <h5>Services</h5>
        <a>Agronomist Connect</a>
        <a>Crop Alerts</a>
        <a>Market Prices</a>
        <a>Knowledge Base</a>
        <a>Training</a>
        <a>Cooperative Mgmt</a>
      </div>
      <div>
        <h5>Contact Us</h5>
        <a>📍 KG 7 Ave, Kigali</a>
        <a>📞 +250 788 000 000</a>
        <a>✉ info@agriconnect.rw</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 AgriConnect Rwanda. All rights reserved.</p>
      <p>Privacy Policy · Terms of Service · Cookies</p>
    </div>
  </div>
)

const OtherPages = ({ page, goTo }) => {
  return (
    <div className="page on">
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>{page.charAt(0).toUpperCase() + page.slice(1)} Page</h2>
        <p>Coming soon...</p>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
