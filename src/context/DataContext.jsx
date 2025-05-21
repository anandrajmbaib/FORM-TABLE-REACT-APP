/*import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tables, setTables] = useState([]);

  const addTable = (formData) => {
    setTables((prev) => [...prev, formData]);
  };

  return (
    <DataContext.Provider value={{ tables, addTable }}>
      {children}
    </DataContext.Provider>
  );
};*/
// context/DataContext.js
/*import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tables, setTables] = useState([]);

  const deleteTable = (index) => {
    setTables(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <DataContext.Provider value={{ tables, setTables, deleteTable }}>
      {children}
    </DataContext.Provider>
  );
};
*/

import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tables, setTables] = useState([]);

  // Add this function
  const addTable = (data) => {
    setTables(prev => [...prev, data]);
  };

  const deleteTable = (index) => {
    setTables(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <DataContext.Provider value={{ tables, setTables, addTable, deleteTable }}>
      {children}
    </DataContext.Provider>
  );
};

/*
export const DataProvider = ({ children }) => {
  const [tables, setTables] = useState([]);
  const [nextId, setNextId] = useState(1); // new state for persistent ID

  const addTable = (data) => {
    const newTable = { id: nextId, ...data };
    setTables(prev => [...prev, newTable]);
    setNextId(prev => prev + 1); // increment for next table
  };

  const deleteTable = (id) => {
    setTables(prev => prev.filter(table => table.id !== id));
  };

  return (
    <DataContext.Provider value={{ tables, addTable, deleteTable }}>
      {children}
    </DataContext.Provider>
  );
};
*/
