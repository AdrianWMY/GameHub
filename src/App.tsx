import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
