import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../types';

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

const SidePalette: React.FC = () => {
  return (
    <div className="side-palette">
      <h3 style={{ fontSize: '14px', margin: '10px 0' }}>Shapes</h3>
      <PaletteItem />
    </div>
  );
};

export default SidePalette;