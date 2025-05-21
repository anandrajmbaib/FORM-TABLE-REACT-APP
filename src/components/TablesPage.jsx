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

 import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const TablesPage = () => {
  const { tables, deleteTable } = useContext(DataContext);
  const [visibleTables, setVisibleTables] = useState({});
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setVisibleTables((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle visibility
    }));
  };

  const handleDelete = (index) => {
    deleteTable(index);

    // Remove visibility tracking for deleted table
    setVisibleTables((prev) => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  };

  return (
    <div>
      <h2>Tables Page</h2>

      {tables.length === 0 && <p>No tables available. Submit a form first.</p>}

      {tables.map((entry, idx) => (
        <div key={idx} style={{ marginBottom: '15px' }}>
          <button onClick={() => handleToggle(idx)}>Table {idx + 1}</button>{' '}
          <button onClick={() => handleDelete(idx)} style={{ color: 'red' }}>
            Delete
          </button>

          {visibleTables[idx] && (
            <div style={{ marginTop: '10px' }}>
              <table border="1" cellPadding="8" cellSpacing="0">
                <tbody>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td>{entry.name}</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td>{entry.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Age</strong></td>
                    <td>{entry.age}</td>
                  </tr>
                  <tr>
                    <td><strong>Education</strong></td>
                    <td>{entry.education}</td>
                  </tr>
                  <tr>
                    <td><strong>Job</strong></td>
                    <td>{entry.job}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/form')}>Form</button>
      </div>
    </div>
  );
};

export default TablesPage;
