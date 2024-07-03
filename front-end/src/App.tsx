import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './Layout';
import About from './pages/About';
import SingeGame from './pages/SingeGame';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games/:gameId" element={<SingeGame />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
