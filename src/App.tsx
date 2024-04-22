import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import SingleGamePage from './pages/SingleGamePage';
import './App.css';
import './css/basic.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games/gameName" element={<SingleGamePage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
