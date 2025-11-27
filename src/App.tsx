import { useState } from 'react';
import HomePage from './components/HomePage';
import TrackingResults from './components/TrackingResults';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';

type AppState = 'home' | 'tracking' | 'login' | 'signup' | 'forgot-password' | 'services' | 'pricing' | 'contact';

function App() {
  const [trackingCode, setTrackingCode] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<AppState>('home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleTrack = (code: string) => {
    setTrackingCode(code);
    if (isAuthenticated) {
      setCurrentPage('tracking');
    } else {
      setCurrentPage('login');
    }
  };

  const handleReset = () => {
    setTrackingCode('');
    setCurrentPage('home');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('tracking');
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentPage('tracking');
  };

  // Page de tracking
  if (currentPage === 'tracking') {
    return (
      <TrackingResults 
        trackingCode={trackingCode} 
        onReset={handleReset}
      />
    );
  }

  // Page de login
  if (currentPage === 'login') {
    return (
      <LoginPage
        onLogin={handleLogin}
        onSwitchToSignup={() => setCurrentPage('signup')}
        onForgotPassword={() => setCurrentPage('forgot-password')}
        onBackToHome={() => setCurrentPage('home')}
      />
    );
  }

  // Page d'inscription
  if (currentPage === 'signup') {
    return (
      <SignupPage
        onSignup={handleSignup}
        onSwitchToLogin={() => setCurrentPage('login')}
        onBackToHome={() => setCurrentPage('home')}
      />
    );
  }

  // Page mot de passe oublié
  if (currentPage === 'forgot-password') {
    return (
      <ForgotPasswordPage
        onBackToLogin={() => setCurrentPage('login')}
        onBackToHome={() => setCurrentPage('home')}
      />
    );
  }

  // Page services
  if (currentPage === 'services') {
    return (
      <ServicesPage onBackToHome={() => setCurrentPage('home')} />
    );
  }

  // Page tarifs
  if (currentPage === 'pricing') {
    return (
      <PricingPage onBackToHome={() => setCurrentPage('home')} />
    );
  }

  // Page contact
  if (currentPage === 'contact') {
    return (
      <ContactPage onBackToHome={() => setCurrentPage('home')} />
    );
  }

  // Page d'accueil par défaut
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <HomePage 
        onTrack={handleTrack} 
        onNavigate={(page: AppState) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;