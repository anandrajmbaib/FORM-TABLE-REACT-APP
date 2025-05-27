 /*import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import TableView from './TableView';
import { useNavigate } from 'react-router-dom';

const TablesPage = () => {
  const { tables } = useContext(DataContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Tables Page</h2>

      {tables.length === 0 && <p>No tables available. Submit a form first.</p>}

      {tables.map((_, idx) => (
        <button key={idx} onClick={() => setActiveIndex(idx)}>
          Table {idx + 1}
        </button>
      ))}

      {activeIndex !== null && (
        <>
          <h3>Table {activeIndex + 1}</h3>
          <TableView data={tables[activeIndex]} />
        </>
      )}*/

     /* {/* Navigation Buttons */
      /*<div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/form')}>Form</button>
      </div>
    </div>
  );
};

export default TablesPage;*/

// components/TablesPage.js
/*
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import TableView from './TableView';
import { useNavigate } from 'react-router-dom';

const TablesPage = () => {
  const { tables, deleteTable } = useContext(DataContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    deleteTable(index);
    if (activeIndex === index) {
      setActiveIndex(null);
    } else if (activeIndex > index) {
      setActiveIndex(prev => prev - 1);
    }
  };

  return (
    <div>
      <h2>Tables Page</h2>

      {tables.length === 0 && <p>No tables available. Submit a form first.</p>}

      {tables.map((_, idx) => (
        <div key={idx} style={{ marginBottom: '10px' }}>
          <button onClick={() => setActiveIndex(idx)}>
            Table {idx + 1}
          </button>{' '}
          <button onClick={() => handleDelete(idx)} style={{ color: 'red' }}>
            Delete
          </button>
        </div>
      ))}

      {activeIndex !== null && activeIndex < tables.length && (
        <>
          <h3>Table {activeIndex + 1}</h3>
          <TableView data={tables[activeIndex]} />
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/form')}>Form</button>
      </div>
    </div>
  );
};

export default TablesPage;*/
/*const TablesPage = () => {
  const { tables, deleteTable } = useContext(DataContext);
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteTable(id);
    if (activeId === id) {
      setActiveId(null);
    }
  };

  const activeTable = tables.find(table => table.id === activeId);

  return (
    <div>
      <h2>Tables Page</h2>

      {tables.length === 0 && <p>No tables available. Submit a form first.</p>}

      {tables.map((table) => (
        <div key={table.id} style={{ marginBottom: '10px' }}>
          <button onClick={() => setActiveId(table.id)}>
            Table {table.id}
          </button>{' '}
          <button onClick={() => handleDelete(table.id)} style={{ color: 'red' }}>
            Delete
          </button>
        </div>
      ))}

      {activeTable && (
        <>
          <h3>Table {activeTable.id}</h3>
          <TableView data={activeTable} />
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/form')}>Form</button>
      </div>
    </div>
  );
};
*/
/*
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import TableView from './TableView';
import { useNavigate } from 'react-router-dom';

const TablesPage = () => {
  const { tables, deleteTable } = useContext(DataContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    deleteTable(index);
    if (activeIndex === index) {
      setActiveIndex(null);
    } else if (activeIndex > index) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2>Tables Page</h2>

      {tables.length === 0 && <p>No tables available. Submit a form first.</p>}

      {tables.map((entry, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '15px' }}>
          <strong>Table {idx + 1}</strong>
          <div>Name: {entry.name}</div>
          <div>Email: {entry.email}</div>
          <div>Age: {entry.age}</div>
          <div>Education: {entry.education}</div>
          <div>Job: {entry.job}</div>

          <div style={{ marginTop: '10px' }}>
            <button onClick={() => setActiveIndex(idx)}>View</button>{' '}
            <button onClick={() => handleDelete(idx)} style={{ color: 'red' }}>
              Delete
            </button>
          </div>
        </div>
      ))}

      {activeIndex !== null && activeIndex < tables.length && (
        <>
          <h3>Detailed View - Table {activeIndex + 1}</h3>
          <TableView data={tables[activeIndex]} />
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/form')}>Form</button>
      </div>
    </div>
  );
};

export default TablesPage;*/
/*import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const TablesPage = () => {
  const { tables, deleteTable } = useContext(DataContext);
  const [selectedIndex, setSelectedIndex] = useState(null); // for desktop
  const [visibleTables, setVisibleTables] = useState({});   // for mobile
  const [isMobileView, setIsMobileView] = useState(getInitialView);
  const navigate = useNavigate();

  function getInitialView() {
    const saved = localStorage.getItem('tablesMobileView');
    return saved !== null ? JSON.parse(saved) : window.innerWidth < 768;
  }

  const toggleView = () => {
    const newView = !isMobileView;
    setIsMobileView(newView);
    localStorage.setItem('tablesMobileView', JSON.stringify(newView));
  };

  useEffect(() => {
    const handleResize = () => {
      const screenMobile = window.innerWidth < 768;
      setIsMobileView(screenMobile);
      localStorage.setItem('tablesMobileView', JSON.stringify(screenMobile));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileTable = (index) => {
    setVisibleTables(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleDelete = (index) => {
    deleteTable(index);

    if (!isMobileView && selectedIndex === index) {
      setSelectedIndex(null);
    }
    setVisibleTables(prev => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  };

  const renderTable = (entry) => {
    if (!entry) return null;
    const jobType = entry.job?.toLowerCase();

    return (
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-striped">
          <tbody>
            <tr><th>Name</th><td>{entry.name}</td></tr>
            <tr><th>Email</th><td>{entry.email || '—'}</td></tr>
            <tr><th>Age</th><td>{entry.age || '—'}</td></tr>
            <tr><th>Education</th><td>{entry.education || '—'}</td></tr>
            <tr><th>Job</th><td>{entry.job || '—'}</td></tr>

            {(jobType === 'engineer' || jobType === 'technician') && (
              <tr><th>Specialty</th><td>{entry.specialty || '—'}</td></tr>
            )}
            {jobType === 'clerk' && (
              <tr><th>Department</th><td>{entry.department || '—'}</td></tr>
            )}
            {jobType === 'teamleader' && (
              <tr><th>Team Size</th><td>{entry.teamSize || '—'}</td></tr>
            )}
            <tr><th>Notes</th><td>{entry.notes || '—'}</td></tr>
          </tbody>
        </table>
      </div>
    );
  };

  const content = (
    <div className={`row ${isMobileView ? '' : 'min-vh-100'}`}>
      {/* Sidebar / Buttons *//*
      <div className={isMobileView ? 'col-12 mb-3' : 'col-md-3 mb-4'}>
        <div className="card h-100 shadow-sm border-primary d-flex flex-column">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-primary text-center">Tables</h5>

            {tables.length === 0 && (
              <p className="text-muted text-center">No tables available. Submit a form first.</p>
            )}

            <div className="flex-grow-1 overflow-auto" style={{ maxHeight: isMobileView ? '300px' : '500px' }}>
              {tables.map((entry, idx) => (
                <div key={idx} className="mb-3">
                  <button
                    className={`btn w-100 ${(!isMobileView && selectedIndex === idx) || (isMobileView && visibleTables[idx]) ? 'btn-primary' : 'btn-outline-primary'} mb-1`}
                    onClick={() => isMobileView ? toggleMobileTable(idx) : setSelectedIndex(idx)}
                  >
                    Table {idx + 1}
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger w-100"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </button>

                  {/* Mobile: show table below button if toggled *//*
                  {isMobileView && visibleTables[idx] && renderTable(entry)}
                </div>
              ))}
            </div>

            <div className="mt-3 d-grid gap-2">
              <button className="btn btn-outline-secondary" onClick={() => navigate('/')}>🏠 Home</button>
              <button className="btn btn-outline-success" onClick={() => navigate('/form')}>📝 Form</button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table Display Area *//*
      {!isMobileView && (
        <div className="col-md-9 mb-4">
          <div className="card h-100 shadow-sm border-secondary d-flex flex-column">
            <div className="card-body">
              <h3 className="card-title text-center text-secondary mb-4">Tables Page</h3>
              {selectedIndex === null ? (
                <p className="text-center text-muted">Select a table to view details.</p>
              ) : (
                <>
                  <h5 className="text-success">Details of Table {selectedIndex + 1}</h5>
                  {renderTable(tables[selectedIndex])}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-body-secondary p-3 min-vh-100">
      {isMobileView ? (
        <div className="mobile-frame shadow-lg mb-3">{content}</div>
      ) : (
        <div className="w-100">{content}</div>
      )}

      {/* Toggle View Button *//*
      <button className="btn btn-warning text-dark mt-3" onClick={toggleView}>
        {isMobileView ? '🖥️ Switch to Desktop View' : '📱 Switch to Mobile View'}
      </button>
    </div>
  );
};

export default TablesPage;*/

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const TablesPage = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null); // for desktop
  const [visibleTables, setVisibleTables] = useState({});   // for mobile
  const [isMobileView, setIsMobileView] = useState(getInitialView);
  const navigate = useNavigate();

  function getInitialView() {
    const saved = localStorage.getItem('tablesMobileView');
    return saved !== null ? JSON.parse(saved) : window.innerWidth < 768;
  }

  const toggleView = () => {
    const newView = !isMobileView;
    setIsMobileView(newView);
    localStorage.setItem('tablesMobileView', JSON.stringify(newView));
  };

  useEffect(() => {
    const handleResize = () => {
      const screenMobile = window.innerWidth < 768;
      setIsMobileView(screenMobile);
      localStorage.setItem('tablesMobileView', JSON.stringify(screenMobile));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchTables = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'userForms'));
      const tableData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTables(tableData);
    } catch (error) {
      console.error('Error fetching tables:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const toggleMobileTable = (index) => {
    setVisibleTables(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleDelete = async (index) => {
    const entry = tables[index];
    if (!entry?.id) return;

    try {
      await deleteDoc(doc(db, 'userForms', entry.id));
      setTables(prev => prev.filter((_, i) => i !== index));
      if (!isMobileView && selectedIndex === index) {
        setSelectedIndex(null);
      }
      setVisibleTables(prev => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
    } catch (error) {
      console.error('Failed to delete:', error);
      alert('Error deleting entry.');
    }
  };

  const renderTable = (entry) => {
    if (!entry) return null;
    const jobType = entry.job?.toLowerCase();

    return (
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-striped">
          <tbody>
            <tr><th>Name</th><td>{entry.name}</td></tr>
            <tr><th>Email</th><td>{entry.email || '—'}</td></tr>
            <tr><th>Age</th><td>{entry.age || '—'}</td></tr>
            <tr><th>Education</th><td>{entry.education || '—'}</td></tr>
            <tr><th>Job</th><td>{entry.job || '—'}</td></tr>

            {(jobType === 'engineer' || jobType === 'technician') && (
              <tr><th>Specialty</th><td>{entry.specialty || '—'}</td></tr>
            )}
            {jobType === 'clerk' && (
              <tr><th>Department</th><td>{entry.department || '—'}</td></tr>
            )}
            {jobType === 'teamleader' && (
              <tr><th>Team Size</th><td>{entry.teamSize || '—'}</td></tr>
            )}
            <tr><th>Notes</th><td>{entry.notes || '—'}</td></tr>
          </tbody>
        </table>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <h4>Loading data...</h4>
      </div>
    );
  }

  const content = (
    <div className={`row ${isMobileView ? '' : 'min-vh-100'}`}>
      {/* Sidebar / Buttons */}
      <div className={isMobileView ? 'col-12 mb-3' : 'col-md-3 mb-4'}>
        <div className="card h-100 shadow-sm border-primary d-flex flex-column">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-primary text-center">Tables</h5>

            {tables.length === 0 && (
              <p className="text-muted text-center">No tables available. Submit a form first.</p>
            )}

            <div className="flex-grow-1 overflow-auto" style={{ maxHeight: isMobileView ? '300px' : '500px' }}>
              {tables.map((entry, idx) => (
                <div key={entry.id} className="mb-3">
                  <button
                    className={`btn w-100 ${(!isMobileView && selectedIndex === idx) || (isMobileView && visibleTables[idx]) ? 'btn-primary' : 'btn-outline-primary'} mb-1`}
                    onClick={() => isMobileView ? toggleMobileTable(idx) : setSelectedIndex(idx)}
                  >
                    Table {idx + 1}
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger w-100"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </button>

                  {/* Mobile: show table below button if toggled */}
                  {isMobileView && visibleTables[idx] && renderTable(entry)}
                </div>
              ))}
            </div>

            <div className="mt-3 d-grid gap-2">
              <button className="btn btn-outline-secondary" onClick={() => navigate('/')}>🏠 Home</button>
              <button className="btn btn-outline-success" onClick={() => navigate('/form')}>📝 Form</button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table Display Area */}
      {!isMobileView && (
        <div className="col-md-9 mb-4">
          <div className="card h-100 shadow-sm border-secondary d-flex flex-column">
            <div className="card-body">
              <h3 className="card-title text-center text-secondary mb-4">Tables Page</h3>
              {selectedIndex === null ? (
                <p className="text-center text-muted">Select a table to view details.</p>
              ) : (
                <>
                  <h5 className="text-success">Details of Table {selectedIndex + 1}</h5>
                  {renderTable(tables[selectedIndex])}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-body-secondary p-3 min-vh-100">
      {isMobileView ? (
        <div className="mobile-frame shadow-lg mb-3">{content}</div>
      ) : (
        <div className="w-100">{content}</div>
      )}

      {/* Toggle View Button */}
      <button className="btn btn-warning text-dark mt-3" onClick={toggleView}>
        {isMobileView ? '🖥️ Switch to Desktop View' : '📱 Switch to Mobile View'}
      </button>
    </div>
  );
};

export default TablesPage;
