export default function Navigation({ currentPage, currentUser, onGoTo, onLogout }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'services', label: 'Farmer Services' },
    { id: 'cooperative', label: 'Cooperatives' },
    { id: 'reports', label: 'Reports & Alerts' },
    { id: 'about', label: 'About Us' }
  ];

  return (
    <nav className="nav">
      <div className="nav-brand" onClick={() => onGoTo('home')}>
        <div className="nav-leaf">🌿</div>
        <div>
          <div className="nav-b1">AgriConnect</div>
          <div className="nav-b2">Rwanda</div>
        </div>
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nl ${currentPage === item.id ? 'act' : ''}`}
            onClick={() => onGoTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="nav-auth" id="nav-auth">
        {currentUser ? (
          <>
            <button
              className="btn-ln"
              style={{ background: '#4ade80', color: '#14532d', borderColor: '#4ade80' }}
              onClick={() => {
                const dashboardMap = {
                  agronomist: 'dash-agro',
                  farmer: 'dash-farmer',
                  coop: 'dash-coop',
                  buyer: 'dash-buyer',
                  admin: 'dash-admin'
                };
                onGoTo(dashboardMap[currentUser.role]);
              }}
            >
              My Dashboard
            </button>
            <button className="btn-logout" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="btn-ln" onClick={() => onGoTo('login')}>Login</button>
            <button className="btn-rg" onClick={() => onGoTo('register')}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
}
