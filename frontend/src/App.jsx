import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StateProvider } from './context/StateContext';
import { Navbar } from './components/Navbar/Navbar';
import { GiveawayHomePage } from './pages/GiveawayHome/GiveawayHomePage';
import { GiveawayDetailsPage } from './pages/GiveawayDetails/GiveawayDetailsPage';
import { CustomLoader } from './components/CustomLoader/CustomLoader';
import './App.css';

export function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <CustomLoader fullScreen={true} />;
  }

  return (
    <StateProvider>
      <Router>
        <div className="appWrapper">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<GiveawayHomePage />} />
              <Route path="/giveaway/:slug" element={<GiveawayDetailsPage />} />
            </Routes>
          </main>
          <footer className="py-4 text-center text-muted small border-top border-secondary mt-5">
            <div className="container">
              <div>© 2026 VELOOP Rewards Inc. All rights reserved.</div>
              <div className="mt-1 text-secondary">
                100% Transparent, Secure & Fair Giveaway Platform • Powered by Antigravity AI
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
