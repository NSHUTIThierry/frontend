import React, { useState } from 'react';

const DEMO_USERS = {
  'jean@agri.rw': { pass: 'pass123', role: 'agronomist', name: 'Jean de Dieu Hakizimana', initials: 'JD' },
  'marie@agri.rw': { pass: 'pass123', role: 'farmer', name: 'Marie Uwimana', initials: 'MU' },
  'pierre@agri.rw': { pass: 'pass123', role: 'coop', name: 'Pierre Nkurunziza', initials: 'PN' },
  'alice@agri.rw': { pass: 'pass123', role: 'buyer', name: 'Alice Ingabire', initials: 'AI' },
  'admin@agri.rw': { pass: 'pass123', role: 'admin', name: 'System Admin', initials: 'AD' }
};

export default function LoginPage({ onGoTo, onLogin }) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    const user = DEMO_USERS[email.toLowerCase()];
    if (!user || user.pass !== password) {
      setError('Invalid email or password. Check demo credentials below.');
      return;
    }
    setSuccess('Login successful! Redirecting to your dashboard...');
    setError('');
    setTimeout(() => {
      onLogin({ ...user, email });
    }, 900);
  };

  return (
    <div className="page on" id="pg-login">
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo-row">
            <div className="auth-logo-icon">🌿</div>
            <div>
              <div className="auth-brand">AgriConnect</div>
              <div className="auth-brand-sub">Rwanda</div>
            </div>
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to your AgriConnect account</p>
          {error && <div className="auth-err">{error}</div>}
          {success && <div className="auth-success">{success}</div>}
          <form onSubmit={handleSubmit}>
            <div className="fg">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="you@example.com" />
            </div>
            <div className="fg">
              <label>Password</label>
              <input type="password" name="password" placeholder="••••••••" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontSize: '8px', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <input type="checkbox" style={{ width: '9px', height: '9px' }} /> Remember me
              </label>
              <a style={{ fontSize: '8px', color: '#15803d', cursor: 'pointer' }}>Forgot password?</a>
            </div>
            <button className="auth-submit" type="submit">Sign In</button>
          </form>
          <div className="auth-link">Don't have an account? <a onClick={() => onGoTo('register')}>Register here</a></div>
          <div className="demo-hint">
            <strong style={{ display: 'block', marginBottom: '2px' }}>Demo credentials:</strong>
            Agronomist: jean@agri.rw / pass123<br />
            Farmer: marie@agri.rw / pass123<br />
            Coop Manager: pierre@agri.rw / pass123<br />
            Buyer: alice@agri.rw / pass123<br />
            Admin: admin@agri.rw / pass123
          </div>
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <a style={{ fontSize: '8px', color: 'var(--color-text-secondary)', cursor: 'pointer' }} onClick={() => onGoTo('home')}>← Back to homepage</a>
          </div>
        </div>
      </div>
    </div>
  );
}
