import { useNavigate } from 'react-router-dom';

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

export default Home;
