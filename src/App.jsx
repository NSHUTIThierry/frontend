import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Topbar from './components/Topbar';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import ServicesPage from './pages/ServicesPage';
import CooperativesPage from './pages/CooperativesPage';
import ReportsPage from './pages/ReportsPage';
import AboutPage from './pages/AboutPage';
import AgriConnectAuth from './pages/AgriConnectAuth';
import AgronomistDashboard from './pages/dashboards/AgronomistDashboard';
import FarmerDashboard from './pages/dashboards/FarmerDashboard';
import CooperativeDashboard from './pages/dashboards/CooperativeDashboard';
import BuyerDashboard from './pages/dashboards/BuyerDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);

  const handleGoTo = (pageName) => {
    setCurrentPage(pageName);
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    const dashboardMap = {
      agronomist: 'dash-agro',
      farmer: 'dash-farmer',
      coop: 'dash-coop',
      buyer: 'dash-buyer',
      admin: 'dash-admin'
    };
    setCurrentPage(dashboardMap[user.role]);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onGoTo={handleGoTo} />;
      case 'marketplace':
        return <MarketplacePage onGoTo={handleGoTo} />;
      case 'services':
        return <ServicesPage onGoTo={handleGoTo} />;
      case 'cooperative':
        return <CooperativesPage onGoTo={handleGoTo} />;
      case 'reports':
        return <ReportsPage onGoTo={handleGoTo} />;
      case 'about':
        return <AboutPage onGoTo={handleGoTo} />;
      case 'login':
        return <LoginPage onGoTo={handleGoTo} onLogin={handleLogin} />;
      case 'register':
        return <RegisterPage onGoTo={handleGoTo} onLogin={handleLogin} />;
      case 'dash-agro':
        return <AgronomistDashboard user={currentUser} onLogout={handleLogout} />;
      case 'dash-farmer':
        return <FarmerDashboard user={currentUser} onLogout={handleLogout} />;
      case 'dash-coop':
        return <CooperativeDashboard user={currentUser} onLogout={handleLogout} />;
      case 'dash-buyer':
        return <BuyerDashboard user={currentUser} onLogout={handleLogout} />;
      case 'dash-admin':
        return <AdminDashboard user={currentUser} onLogout={handleLogout} />;
      default:
        return <HomePage onGoTo={handleGoTo} />;
    }
  };

  return (
    <div className="site-wrap">
      <Topbar />
      <Navigation 
        currentPage={currentPage}
        currentUser={currentUser}
        onGoTo={handleGoTo}
        onLogout={handleLogout}
      />
      <div className="page-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
