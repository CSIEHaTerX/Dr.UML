import React, { useState } from 'react';
import { dia } from '@joint/core';

interface ShapeEditorProps {
  shape: dia.Element;
  onClose: () => void;
}

const ShapeEditor: React.FC<ShapeEditorProps> = ({ shape, onClose }) => {
  const [fillColor, setFillColor] = useState(shape.attr('body/fill') || '#ffffff');
  const [label, setLabel] = useState(shape.attr('label/text') || '');

  const handleSave = () => {
    shape.attr({
      body: { fill: fillColor },
      label: { text: label },
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        zIndex: 1000,
      }}
    >
      <h3>Edit Shape</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>Fill Color:</label>
        <input
          type="color"
          value={fillColor}
          onChange={(e) => setFillColor(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Label:</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <button onClick={handleSave} style={{ marginRight: '10px' }}>
        Save
      </button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ShapeEditor;
