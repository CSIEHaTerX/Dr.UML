import React, { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../types';
import { dia, shapes } from '@joint/core';
import ShapeEditor from './ShapeEditor';

const Canvas: React.FC<{ graph: dia.Graph }> = ({ graph }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<dia.Paper | null>(null);
  const [selectedShape, setSelectedShape] = useState<dia.Element | null>(null);

  useEffect(() => {
    if (canvasRef.current && !paperRef.current) {
      paperRef.current = new dia.Paper({
        el: canvasRef.current,
        model: graph,
        width: canvasRef.current.offsetWidth,
        height: canvasRef.current.offsetHeight,
        background: { color: '#F5F5F5' },
        cellViewNamespace: shapes,
      });

      paperRef.current.on('element:pointerdown', (elementView) => {
        setSelectedShape(elementView.model); // Set the clicked shape as selected
      });
    }
  }, [graph]);

  const [, drop] = useDrop({
    accept: ItemTypes.SHAPE,
    drop: (item: { type: string }, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset && paperRef.current) {
        const { x, y } = offset;
        const localPoint = paperRef.current.clientToLocalPoint({ x, y });

        let element;
        if (item.type === 'Rectangle') {
          element = new shapes.standard.Rectangle();
          element.attr({
            body: { fill: '#3498db' },
          });
        } else if (item.type === 'Circle') {
          element = new shapes.standard.Circle();
          element.attr({
            body: { fill: '#e74c3c' },
          });
        }

        if (element) {
          element.position(localPoint.x, localPoint.y);
          element.resize(100, 40);
          element.addTo(graph);
        }
      }
    },
  });

  return (
    <div
      ref={(node) => {
        drop(node);
        canvasRef.current = node;
      }}
      id="paper"
      style={{
        flex: 1,
        height: '100vh',
        backgroundColor: '#ffffff', // White background for better contrast
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        border: '1px solid #ddd', // Add a subtle border
      }}
    >
      {selectedShape && (
        <ShapeEditor
          shape={selectedShape}
          onClose={() => setSelectedShape(null)} // Close the editor
        />
      )}
    </div>
  );
};

export default Canvas;
