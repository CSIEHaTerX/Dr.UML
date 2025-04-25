import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../types';
import './SidePalette.css';

const PaletteItem: React.FC = () => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.RECT,
    item: { type: ItemTypes.RECT },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="palette-item"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      Rect
    </div>
  );
};

interface SidePaletteProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const SidePalette: React.FC<SidePaletteProps> = ({ isOpen, toggleOpen }) => {
  return (
    <div className={`side-palette-wrapper ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="toggle-button" onClick={toggleOpen}>
        {isOpen ? '⮜' : '⮞'}
      </div>
      {isOpen && (
        <div className="side-palette-content">
          <h3 className="palette-title">Shapes</h3>
          <PaletteItem />
        </div>
      )}
    </div>
  );
};

export default SidePalette;
