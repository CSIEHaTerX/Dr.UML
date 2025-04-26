import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import { dia, shapes } from '@joint/core';
import SidePalette from './components/SidePalette';
import Canvas from './components/Canvas';

const namespace = shapes;

const graph = new dia.Graph({}, { cellNamespace: namespace });

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container" style={{ display: 'flex' }}>
        <SidePalette graph={graph} />
        <Canvas graph={graph} />
      </div>
    </DndProvider>
  );
};

export default App;