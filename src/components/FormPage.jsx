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

/*import { useState, useContext, useEffect } from 'react';
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
import { useForm } from 'react-hook-form';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const FormPage = () => {
  const { addTable } = useContext(DataContext);
  const navigate = useNavigate();
  const [captchaText, setCaptchaText] = useState('');

  useEffect(() => {
    setCaptchaText(generateCaptcha());
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      age: '',
      education: '',
      job: '',
      otherJob: '',
      specialty: '',
      department: '',
      teamSize: '',
      notes: '',
      captchaInput: ''
    }
  });

  const job = watch('job');
  const otherJob = watch('otherJob');

  const onFormSubmit = (data) => {
    const finalForm = {
      ...data,
      job: data.job === 'others' ? data.otherJob : data.job
    };

    addTable(finalForm);
    navigate('/tables');
  };

  const renderJobSpecificFields = () => {
    const selectedJob = job === 'others' ? otherJob?.toLowerCase() : job?.toLowerCase();

    switch (selectedJob) {
      case 'engineer':
      case 'technician':
        return (
          <div style={{ marginBottom: '15px' }}>
            <label style={{ width: '160px' }}>Specialty:</label>
            <input
              {...register('specialty')}
              placeholder="Enter specialty"
              style={{ flex: 1, padding: '5px' }}
            />
          </div>
        );
      case 'clerk':
        return (
          <div style={{ marginBottom: '15px' }}>
            <label style={{ width: '160px' }}>Department:</label>
            <input
              {...register('department')}
              placeholder="Enter department"
              style={{ flex: 1, padding: '5px' }}
            />
          </div>
        );
      case 'teamleader':
        return (
          <div style={{ marginBottom: '15px' }}>
            <label style={{ width: '160px' }}>Team Size:</label>
            <input
              type="number"
              min={1}
              {...register('teamSize')}
              placeholder="Enter team size"
              style={{ flex: 1, padding: '5px' }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px'
        }}
      >
        {/* Name */ /*
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label style={{ width: '160px' }}>Name:</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter your name"
            style={{ flex: 1, padding: '5px' }}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
        </div>

        {/* Email */ /*
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label style={{ width: '160px' }}>Email:</label>
          <input
            {...register('email', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format'
              }
            })}
            placeholder="Enter your email"
            style={{ flex: 1, padding: '5px' }}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
        </div>

        {/* Age *//*
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label style={{ width: '160px' }}>Age:</label>
          <input
            type="number"
            {...register('age', {
              validate: (value) => {
                if (!value) return true;
                const age = parseInt(value, 10);
                if (age < 18) return 'Age must be at least 18';
                if (age > 60) return 'Age must be 60 or below';
                return true;
              }
            })}
            placeholder="Enter your age"
            style={{ flex: 1, padding: '5px' }}
          />
          {errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}
        </div>

        {/* Education *//*
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label style={{ width: '160px' }}>Education:</label>
          <input
            {...register('education')}
            placeholder="Enter qualification"
            style={{ flex: 1, padding: '5px' }}
          />
        </div>

        {/* Job *//*
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label style={{ width: '160px' }}>Job:</label>
          <select
            {...register('job')}
            style={{ flex: 1, padding: '5px' }}
            onChange={(e) => {
              setValue('job', e.target.value);
              if (e.target.value !== 'others') {
                setValue('otherJob', '');
              }
            }}
          >
            <option value="">Select a job</option>
            <option value="engineer">Engineer</option>
            <option value="technician">Technician</option>
            <option value="clerk">Clerk</option>
            <option value="teamleader">Team Leader</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Other Job *//*
        {job === 'others' && (
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <label style={{ width: '160px' }}>Other Job Title:</label>
            <input
              {...register('otherJob')}
              placeholder="Enter custom job title"
              style={{ flex: 1, padding: '5px' }}
            />
          </div>
        )}

        {/* Conditional Job Fields *//*
        {renderJobSpecificFields()}

        {/* Notes *//*
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Notes:</label>
          <textarea
            {...register('notes', {
              validate: (value) => {
                if (!value.trim()) return true;
                const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
                if (wordCount < 10) return 'At least 10 words required';
                if (wordCount > 20) return 'Maximum 20 words allowed';
                return true;
              }
            })}
            placeholder="Type any additional notes here..."
            rows={4}
            style={{ padding: '5px', resize: 'vertical' }}
          />
          {errors.notes && <span style={{ color: 'red' }}>{errors.notes.message}</span>}
        </div>

        {/* CAPTCHA Display *//*
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label style={{ width: '160px' }}>Captcha:</label>
          <div
            style={{
              background: '#eee',
              padding: '10px',
              fontFamily: 'monospace',
              letterSpacing: '5px',
              filter: 'blur(1px)',
              fontWeight: 'bold',
              fontSize: '20px',
              userSelect: 'none'
            }}
          >
            {captchaText}
          </div>
        </div>

        {/* CAPTCHA Reload *//*
        <button
          type="button"
          onClick={() => setCaptchaText(generateCaptcha())}
          style={{ width: '150px', marginBottom: '15px' }}
        >
          Reload Captcha
        </button>

        {/* CAPTCHA Input *//*
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <label style={{ width: '160px' }}>Enter Captcha:</label>
          <input
            {...register('captchaInput', {
              required: 'Captcha is required',
              validate: (value) => value === captchaText || 'Captcha does not match'
            })}
            placeholder="Type the text above"
            style={{ flex: 1, padding: '5px' }}
          />
          {errors.captchaInput && (
            <span style={{ color: 'red' }}>{errors.captchaInput.message}</span>
          )}
        </div>

        {/* Submit *//*
        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Home</button>{' '}
        <button onClick={() => navigate('/tables')}>Tables</button>
      </div>
    </div>
  );
};

export default FormPage; */
import { useForm } from 'react-hook-form';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Navbar, Nav } from 'react-bootstrap';
import './Home.css'; // Import for mobile-frame styling
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';


const generateCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const FormPage = () => {
  //const { addTable } = useContext(DataContext);
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

  const [captchaText, setCaptchaText] = useState('');

  useEffect(() => {
    setCaptchaText(generateCaptcha());
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm();

  const job = watch('job');
  const otherJob = watch('otherJob');

  const onFormSubmit = async (data) => {
  const finalForm = {
    ...data,
    job: data.job === 'others' ? data.otherJob : data.job
  };

  try {
    await addDoc(collection(db, 'userForms'), finalForm);
    navigate('/tables');
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to submit. Please try again.");
  }
};


  const renderJobSpecificFields = () => {
    const selected = job === 'others' ? otherJob?.toLowerCase() : job?.toLowerCase();
    switch (selected) {
      case 'engineer':
      case 'technician':
        return (
          <Form.Group className="mb-3">
            <Form.Label>Specialty</Form.Label>
            <Form.Control {...register('specialty')} placeholder="Enter specialty" />
          </Form.Group>
        );
      case 'clerk':
        return (
          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Control {...register('department')} placeholder="Enter department" />
          </Form.Group>
        );
      case 'teamleader':
        return (
          <Form.Group className="mb-3">
            <Form.Label>Team Size</Form.Label>
            <Form.Control type="number" {...register('teamSize')} placeholder="Enter team size" />
          </Form.Group>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center p-3">
      <button
        className="btn btn-warning text-dark mb-3"
        onClick={toggleView}
      >
        {isMobileView ? '🖥️ Switch to Computer View' : '📱 Switch to Mobile View'}
      </button>

      <div className={isMobileView ? 'mobile-frame1 shadow-lg mx-auto' : 'w-100'}>
         <Navbar bg="primary" variant="dark" expand="lg" className="w-100">
  <Container fluid className="p-0">
    <Navbar.Brand href="/" className="ms-3">F&T App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ms-auto me-3">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/form">Form</Nav.Link>
        <Nav.Link as={Link} to="/tables">Tables</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        <Container className="mt-4 p-4 bg-white shadow rounded" style={{ maxWidth: '600px' }}>
          <h3 className="text-center mb-4">User Form</h3>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control {...register('name', { required: 'Name is required' })} />
              {errors.name && <div className="text-danger">{errors.name.message}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register('email', {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format'
                  }
                })}
              />
              {errors.email && <div className="text-danger">{errors.email.message}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                {...register('age', {
                  validate: value => {
                    if (!value) return true;
                    if (value < 18) return 'Age must be at least 18';
                    if (value > 60) return 'Age must be 60 or below';
                    return true;
                  }
                })}
              />
              {errors.age && <div className="text-danger">{errors.age.message}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Control {...register('education')} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job</Form.Label>
              <Form.Select
                {...register('job')}
                onChange={e => {
                  setValue('job', e.target.value);
                  if (e.target.value !== 'others') setValue('otherJob', '');
                }}
              >
                <option value="">Select</option>
                <option value="engineer">Engineer</option>
                <option value="technician">Technician</option>
                <option value="clerk">Clerk</option>
                <option value="teamleader">Team Leader</option>
                <option value="others">Others</option>
              </Form.Select>
            </Form.Group>

            {job === 'others' && (
              <Form.Group className="mb-3">
                <Form.Label>Other Job Title</Form.Label>
                <Form.Control {...register('otherJob')} />
              </Form.Group>
            )}

            {renderJobSpecificFields()}

            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register('notes', {
                  validate: (value) => {
                    const wordCount = value.trim().split(/\s+/).length;
                    if (wordCount < 10) return 'At least 10 words required';
                    if (wordCount > 20) return 'Maximum 20 words allowed';
                    return true;
                  }
                })}
              />
              {errors.notes && <div className="text-danger">{errors.notes.message}</div>}
            </Form.Group>

            <div className="mb-3">
              <Form.Label>Captcha</Form.Label>
              <div className="p-2 border text-center bg-light" style={{ letterSpacing: '5px', fontFamily: 'monospace' }}>
                {captchaText}
              </div>
              <Button variant="link" onClick={() => setCaptchaText(generateCaptcha())}>Reload Captcha</Button>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Enter Captcha</Form.Label>
              <Form.Control
                {...register('captchaInput', {
                  required: 'Captcha is required',
                  validate: value => value === captchaText || 'Captcha does not match'
                })}
              />
              {errors.captchaInput && <div className="text-danger">{errors.captchaInput.message}</div>}
            </Form.Group>

            <div className="text-center">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default FormPage;







 



