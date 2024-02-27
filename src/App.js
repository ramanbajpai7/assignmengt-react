// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', paddingTop: '20px' }}>
        <h1 style={{ color: '#007bff', marginBottom: '30px' }}>Welcome to the Contest!</h1>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/page2" element={<Page2 timeLeft={timeLeft} setTimeLeft={setTimeLeft} />} />
          <Route path="/page3" element={<Page3 timeLeft={timeLeft} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
