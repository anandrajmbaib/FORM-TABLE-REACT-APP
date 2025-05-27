/*import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/form')}>Form</button>
      <button onClick={() => navigate('/tables')}>Tables</button>
    </div>
  );
};

export default Home;*/
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const getInitialView = () => {
    const savedView = localStorage.getItem('isMobileView');
    if (savedView !== null) return JSON.parse(savedView);
    return window.innerWidth < 768;
  };

  const [isMobileView, setIsMobileView] = useState(getInitialView);

  const toggleView = () => {
    const newView = !isMobileView;
    setIsMobileView(newView);
    localStorage.setItem('isMobileView', JSON.stringify(newView));
  };

  useEffect(() => {
    const handleResize = () => {
      const screenMobile = window.innerWidth < 768;
      setIsMobileView(screenMobile);
      localStorage.setItem('isMobileView', JSON.stringify(screenMobile));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = (
    <div className="container-fluid px-3 py-4">
      {/* Title */}
      <div className="text-center mb-4">
        <h1 className="fw-bold fs-3 text-truncate">Form and Table App</h1>
        {!isMobileView && (
          <p className="lead text-muted">A central place to manage essential forms and data tables</p>
        )}
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand bg-primary rounded shadow-sm mb-4 px-3">
        <div className="container-fluid justify-content-center flex-wrap">
          <div className="d-flex flex-row gap-2">
            <button className="btn btn-outline-light" onClick={() => navigate('/')}>Home</button>
            <button className="btn btn-outline-light" onClick={() => navigate('/form')}>Form</button>
            <button className="btn btn-outline-light" onClick={() => navigate('/tables')}>Tables</button>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className={`row g-4 ${isMobileView ? '' : 'row-cols-2'}`}>
        {/* Forms Info */}
        <div className="col">
          <div className="card h-100 border-primary shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-primary">Importance of Forms</h4>
              <p className="card-text">
                Forms are essential tools for structured data collection and safety documentation.
              </p>
              <ul>
                <li><strong>Management of Change (MOC):</strong> Tracks operational or personnel changes.</li>
                <li><strong>Permit to Work (PTW):</strong> Manages safety for high-risk tasks.</li>
                <li>Includes audits, inspections, feedback, and incident logs.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tables Info */}
        <div className="col">
          <div className="card h-100 border-success shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-success">Importance of Tables</h4>
              <p className="card-text">
                Tables organize data for clarity and accessibility.
              </p>
              <ul>
                <li>Sort, filter, and analyze information quickly</li>
                <li>Track KPIs, logs, and inventories</li>
                <li>Used in dashboards, forms, reports, and more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-body-secondary p-3">
      {/* Toggle View Button */}
      <button
        className="btn btn-warning text-dark mb-3"
        onClick={toggleView}
      >
        {isMobileView ? '🖥️ Switch to Computer View' : '📱 Switch to Mobile View'}
      </button>

      {/* Device Display */}
      {isMobileView ? (
        <div className="mobile-frame shadow-lg">
          {content}
        </div>
      ) : (
        <div className="w-100">{content}</div>
      )}
    </div>
  );
};

export default Home;




