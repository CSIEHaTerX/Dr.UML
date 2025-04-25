import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './components/Canvas';
import SidePalette from './components/SidePalette';
import './App.css';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <SidePalette />
        <Canvas />
      </div>
    </DndProvider>
  );
};

export default App;