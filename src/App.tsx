import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Scorm from './scorm/Scorm';
import Button from './components/Button';

function App() {
  const [learnerName, setLearnerName] = useState('');

  // SCORM
  useEffect(() => {
    Scorm.init();
    // to check if scorm works
    setLearnerName(Scorm.getLearnerName());
    return () => {
        Scorm.finish();
    };
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {/* Checks whether React app can extract data from LMS */}
          <h2>Welcome, {learnerName}!</h2>
        </div>
        {/* Button to send 100% score, check whether React app can send data to LMS */}
        <Button />
      </header>
    </div>
  );
}

export default App;
