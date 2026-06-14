import React, { useState } from 'react';

export default function RegisterPage({ onGoTo, onLogin }) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const role = e.target.role.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const terms = e.target.terms.checked;

    if (!name || !email || !phone || !role || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (!terms) {
      setError('Please accept the Terms of Service.');
      return;
    }

    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const roleMap = { farmer: 'farmer', agronomist: 'agronomist', coop: 'coop', buyer: 'buyer', admin: 'admin' };

    setSuccess('Account created! Welcome to AgriConnect Rwanda!');
    setError('');
    setTimeout(() => {
      onLogin({ ...{ email, name, role: roleMap[role] || 'farmer', initials } });
    }, 1000);
  };

  return (
    <div className="page on" id="pg-register">
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo-row">
            <div className="auth-logo-icon">🌿</div>
            <div>
              <div className="auth-brand">AgriConnect</div>
              <div className="auth-brand-sub">Rwanda</div>
            </div>
          </div>
          <h2>Create an Account</h2>
          <p>Join Rwanda's agricultural community</p>
          {error && <div className="auth-err">{error}</div>}
          {success && <div className="auth-success">{success}</div>}
          <form onSubmit={handleSubmit}>
            <div className="fg">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Jean de Dieu Hakizimana" />
            </div>
            <div className="fg">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="you@example.com" />
            </div>
            <div className="fg">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+250 788 000 000" />
            </div>
            <div className="fg">
              <label>Role</label>
              <select name="role">
                <option value="">Select your role</option>
                <option value="farmer">Farmer</option>
                <option value="agronomist">Agronomist</option>
                <option value="coop">Cooperative Manager</option>
                <option value="buyer">Buyer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="fg">
              <label>Password</label>
              <input type="password" name="password" placeholder="Min. 6 characters" />
            </div>
            <div className="fg">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Re-enter password" />
            </div>
            <div style={{ fontSize: '8px', color: 'var(--color-text-secondary)', marginBottom: '8px', display: 'flex', gap: '3px', alignItems: 'flex-start' }}>
              <input type="checkbox" name="terms" style={{ width: '9px', height: '9px', marginTop: '1px' }} />
              <span>I agree to the <a style={{ color: '#15803d' }}>Terms of Service</a> and <a style={{ color: '#15803d' }}>Privacy Policy</a></span>
            </div>
            <button className="auth-submit" type="submit">Create Account</button>
          </form>
          <div className="auth-link">Already have an account? <a onClick={() => onGoTo('login')}>Sign in</a></div>
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <a style={{ fontSize: '8px', color: 'var(--color-text-secondary)', cursor: 'pointer' }} onClick={() => onGoTo('home')}>← Back to homepage</a>
          </div>
        </div>
      </div>
    </div>
  );
}
