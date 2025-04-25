import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './components/Canvas';
import SidePalette from './components/SidePalette';
import './App.css';

const App: React.FC = () => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);

  const togglePalette = () => {
    setIsPaletteOpen((prev) => !prev);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container" style={{ display: 'flex' }}>
        <SidePalette isOpen={isPaletteOpen} toggleOpen={togglePalette} />
        <Canvas />
      </div>
    </DndProvider>
  );
};

export default App;
