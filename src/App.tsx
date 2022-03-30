import React, { useEffect, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';

enum DarkModeController {
  USER,
  SYSTEM,
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(checkSystemDarkPreference());

  function checkSystemDarkPreference() {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return darkQuery.matches ? true : false;
  }

  function toggleDarkMode(controlledBy: DarkModeController) {
    switch (controlledBy) {
      case DarkModeController.SYSTEM:
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkQuery.matches ? onDarkMode() : onLightMode();
        break;
      case DarkModeController.USER:
        isDarkMode ? onLightMode() : onDarkMode();
    }
  }

  function onLightMode() {
    document.body.classList.remove('dark-mode');
    setIsDarkMode(false);
  }

  function onDarkMode() {
    document.body.classList.add('dark-mode');
    setIsDarkMode(true);
  }

  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    toggleDarkMode(DarkModeController.SYSTEM);
    const toggleDarkModeHandler = () =>
      toggleDarkMode(DarkModeController.SYSTEM);

    darkQuery.addEventListener('change', toggleDarkModeHandler);

    return () => {
      document.removeEventListener('change', toggleDarkModeHandler);
    };
  }, []);

  return (
    <div>
      <section className="menu">
        <DarkModeToggle
          onChange={() => toggleDarkMode(DarkModeController.USER)}
          checked={isDarkMode}
          size={40}
          className="darkModeToggle"
        />
        <div className="header">
          <h1>Regina Liu</h1>
          <Navbar />
        </div>
      </section>

      <Content />
    </div>
  );
}

export default App;
