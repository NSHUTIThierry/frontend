import React from 'react';
import Footer from '../components/Footer';

export default function ReportsPage({ onGoTo }) {
  return (
    <div className="page on" id="pg-reports">
      <div className="rpt-hero">
        <div>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.15)', color: '#86efac', fontSize: '8px', padding: '2px 8px', borderRadius: '10px', marginBottom: '6px' }}>
            Reports & Alerts
          </div>
          <h2>Report Agricultural Issues Quickly</h2>
          <p>Farmers can instantly submit crop disease reports, pest outbreaks and alerts to district officers.</p>
        </div>
        <button className="btn-green">Submit Report</button>
      </div>
      <div className="rpt-types-row">
        <div className="rtyp"><div className="rtyp-icon" style={{ background: '#fee2e2' }}>🐛</div><span>Pest Outbreaks</span></div>
        <div className="rtyp"><div className="rtyp-icon" style={{ background: '#fef3c7' }}>🌿</div><span>Crop Diseases</span></div>
        <div className="rtyp"><div className="rtyp-icon" style={{ background: '#dbeafe' }}>🌊</div><span>Flood Reports</span></div>
        <div className="rtyp"><div className="rtyp-icon" style={{ background: '#ffedd5' }}>☀</div><span>Drought Stress</span></div>
        <div className="rtyp"><div className="rtyp-icon" style={{ background: '#ede9fe' }}>🪣</div><span>Fertilizer Shortage</span></div>
      </div>
      <div className="rpt-form-box">
        <h3>Submit a New Report</h3>
        <div className="rpt-row">
          <div className="rf"><label>Crop Type</label><select><option>Maize</option><option>Beans</option><option>Irish Potatoes</option><option>Tomatoes</option><option>Cassava</option></select></div>
          <div className="rf"><label>District</label><select><option>Gasabo</option><option>Kicukiro</option><option>Musanze</option><option>Huye</option><option>Bugesera</option></select></div>
        </div>
        <div className="rpt-row">
          <div className="rf"><label>Issue Type</label><select><option>Pest Outbreak</option><option>Crop Disease</option><option>Flooding</option><option>Drought</option></select></div>
          <div className="rf"><label>Severity</label><select><option>High</option><option>Medium</option><option>Low</option></select></div>
        </div>
        <div className="rf" style={{ marginBottom: '8px' }}><label>Description</label><input type="text" placeholder="Describe the issue you are observing..." /></div>
        <button className="btn-green">Submit Report →</button>
      </div>
      <div className="alert-box">
        <p>⚠ Active Alerts in Your Area</p>
        <p>Fall Armyworm in Musanze · Late blight in Rulindo · Drought warning in Bugesera</p>
      </div>
      <Footer />
    </div>
  );
}
