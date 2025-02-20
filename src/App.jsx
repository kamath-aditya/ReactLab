import { useState,useEffect } from 'react'
import Click from './click'
import ImageSlider from './imageSlider'
import SearchFilter from './searchFilter'
import Login from './login'
import Accordian from './accordian'
import Checklist from './checklist'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const programs = [
    { name: 'Program 1', prg: <SearchFilter /> },
    { name:'Program 2', prg: <Click /> },
    { name:'Program 3', prg: <ImageSlider /> },
    { name:'Program 4', prg: <Accordian /> },
    { name:'Program 5', prg: <Checklist /> },
    { name:'Program 6', prg: <Login /> }
  ]

  // Function to go to the next program
  const nextProgram = () => {
    if (selectedIndex === null) {
      setSelectedIndex(0); // Start with the first program if none is selected
    } else {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % programs.length);
    }
  };

  // Function to go to the previous program
  const prevProgram = () => {
    if (selectedIndex === null) {
      setSelectedIndex(0); // Start with the first program if none is selected
    } else {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? programs.length - 1 : prevIndex - 1
      );
    }
  };

  // Handle keydown events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextProgram();
      } else if (event.key === 'ArrowLeft') {
        prevProgram();
      }
    };

    // Add event listener when component mounts
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]); // Runs effect whenever selectedIndex changes

  return (
    <div>
      <div className='nav'>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className='menu-button'
        >
          Programs
        </button>
        <h2>ARJS Lab</h2>
        <hr />  
      </div>
      <div>
        {
          open && <div className='dropdown-menu'>
            {programs.map((program,index)=> (
              <div key={index}>
                <div className='dropdown-item' onClick={()=>{setSelectedIndex(index); setOpen(false);}}>
                  {program.name}
                </div>
              </div>
            ))}
          </div>
        }
      </div>
      <div style={{top:350, left:0, position:'absolute'}}>
        <button style={{height:100, left:0}} onClick={prevProgram}>◀ Prev</button>
      </div>
      <div className='content'>{selectedIndex !== null && programs[selectedIndex].prg}</div>
      <div style={{top:350, right:0, position:'absolute'}}>
        <button style={{height:100, left:0}} onClick={nextProgram}>Next ▶</button>
      </div>
    </div>
  )
}

export default App
