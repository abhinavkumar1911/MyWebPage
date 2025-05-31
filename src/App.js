import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import PageNotFound from './pages/PageNotFound';

// Optional: If you're deploying to a subdirectory
 const basename = process.env.NODE_ENV === 'production' ? '/MyWebPage' : '/';

function App() {
  return (
    <Router basename={basename} >
      <div>
        <Navbar />
        <Routes>
           <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
