 /*import { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const { addTable } = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTable(form);
    setForm({ name: '', email: '' }); // clear form
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Navigation Buttons */
      /*<div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/tables')}>Tables</button>
      </div>
    </div>
  );
};

export default FormPage;*/
/*
import { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    education: '',
    job: '',
  });

  const { addTable } = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTable(form);
    setForm({
      name: '',
      email: '',
      age: '',
      education: '',
      job: '',
    }); // clear form
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
        }}
      >
        {[
          { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
          { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
          { label: 'Age', name: 'age', type: 'number', placeholder: 'Enter your age' },
          { label: 'Education Qualification', name: 'education', type: 'text', placeholder: 'Enter your qualification' },
          { label: 'Job', name: 'job', type: 'text', placeholder: 'Enter your job' },
        ].map((field) => (
          <div
            key={field.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <label style={{ width: '160px' }}>
              {field.label}:
            </label>
            <input
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              style={{ flex: 1, padding: '5px' }}
            />
          </div>
        ))}

        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>

      {/* Navigation Buttons *//*
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/tables')}>Tables</button>
      </div>
    </div>
  );
};

export default FormPage;*/

/*import { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    education: '',
    job: '',
  });

  const { addTable } = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(form.age) < 0) {
      alert('Age cannot be negative.');
      return;
    }

    addTable(form);
    setForm({
      name: '',
      email: '',
      age: '',
      education: '',
      job: '',
    }); // clear form
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
        }}
      >
        {[
          { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
          { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
          { label: 'Age', name: 'age', type: 'number', placeholder: 'Enter your age', min: 0 },
          { label: 'Education Qualification', name: 'education', type: 'text', placeholder: 'Enter your qualification' },
          { label: 'Job', name: 'job', type: 'text', placeholder: 'Enter your job' },
        ].map((field) => (
          <div
            key={field.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <label style={{ width: '160px' }}>
              {field.label}:
            </label>
            <input
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              min={field.min}
              style={{ flex: 1, padding: '5px' }}
            />
          </div>
        ))}

        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>

      {/* Navigation Buttons */
      /*<div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/tables')}>Tables</button>
      </div>
    </div>
  );
};

export default FormPage;*/

import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    education: '',
    job: '',
  });

  const { addTable } = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(form.age) < 0) {
      alert('Age cannot be negative.');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert('Invalid email address.');
      return;
    }

    addTable(form);
    setForm({
      name: '',
      email: '',
      age: '',
      education: '',
      job: '',
    }); // clear form
  };

  // Email validation on email change using useEffect
  useEffect(() => {
    if (form.email !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        alert('Please enter a valid email address.');
      }
    }
  }, [form.email]);

  return (
    <div>
      <h2>Form Page</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
        }}
      >
        {[
          { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
          { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
          { label: 'Age', name: 'age', type: 'number', placeholder: 'Enter your age', min: 0 },
          { label: 'Education Qualification', name: 'education', type: 'text', placeholder: 'Enter your qualification' },
          { label: 'Job', name: 'job', type: 'text', placeholder: 'Enter your job' },
        ].map((field) => (
          <div
            key={field.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <label style={{ width: '160px' }}>
              {field.label}:
            </label>
            <input
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              min={field.min}
              style={{ flex: 1, padding: '5px' }}
            />
          </div>
        ))}

        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>

      {/* Navigation Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/tables')}>Tables</button>
      </div>
    </div>
  );
};

export default FormPage;



