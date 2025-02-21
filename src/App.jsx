import { useState, useEffect } from 'react';
import Click from './click';
import ImageSlider from './imageSlider';
import SearchFilter from './searchFilter';
import Login from './login';
import Accordian from './accordian';
import Checklist from './checklist';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const programs = [
    { name: '1. Search-filter', component: <SearchFilter /> },
    { name: '2. Click-counter', component: <Click /> },
    { name: '3. Image-slider', component: <ImageSlider /> },
    { name: '4. Accordian', component: <Accordian /> },
    { name: '5. Checklist', component: <Checklist /> },
    { name: '6. Login', component: <Login /> }
  ];

  const changeProgram = (step) => {
    setSelectedIndex((prev) => (prev + step + programs.length) % programs.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') changeProgram(1);
      if (event.key === 'ArrowLeft') changeProgram(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <div className='nav'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='menu-button'>Programs</button>
        <h2>ARJS Lab</h2>
        <hr />  
      </div>
      {menuOpen && (
        <div className='dropdown-menu'>
          {programs.map((program, index) => (
            <div key={index} className='dropdown-item' onClick={() => { setSelectedIndex(index); setMenuOpen(false); }}>
              {program.name}
            </div>
          ))}
        </div>
      )}
      <div className='program-switch-left'>
        <button className='switch-buttons' onClick={() => changeProgram(-1)}>◀ Prev</button>
      </div>
      <div className='content'>{programs[selectedIndex].component}</div>
      <div className='program-switch-right'>
        <button className='switch-buttons' onClick={() => changeProgram(1)}>Next ▶</button>
      </div>
    </div>
  );
}

export default App;
