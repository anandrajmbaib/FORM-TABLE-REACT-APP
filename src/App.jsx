 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FormPage from './components/FormPage';
import TablesPage from './components/TablesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/tables" element={<TablesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
