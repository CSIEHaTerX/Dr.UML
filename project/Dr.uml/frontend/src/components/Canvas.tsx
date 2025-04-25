import React, { useRef, useEffect } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect } from 'react-konva';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../types';

interface RectShape {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}

const Canvas: React.FC = () => {
  const [shapes, setShapes] = React.useState<RectShape[]>([]);
  const stageRef = useRef<Konva.Stage>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.RECT,
    drop: (item, monitor) => {
      const stage = stageRef.current;
      if (!stage) return;

      const pointerPos = stage.getPointerPosition();
      if (!pointerPos) return;

      const newRect: RectShape = {
        id: `rect-${Date.now()}`,
        x: pointerPos.x,
        y: pointerPos.y,
        width: 100,
        height: 50,
        fill: '#ff0000',
      };

      setShapes((prev) => [...prev, newRect]);
    },
  });

  return (
    <div ref={drop} className="canvas-container">
      <Stage
        width={window.innerWidth - 80} /* Adjusted for narrower sidebar */
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer>
          {shapes.map((shape) => (
            <Rect
              key={shape.id}
              x={shape.x}
              y={shape.y}
              width={shape.width}
              height={shape.height}
              fill={shape.fill}
              draggable
              onDragEnd={(e) => {
                const node = e.target;
                setShapes((prev) =>
                  prev.map((s) =>
                    s.id === shape.id
                      ? { ...s, x: node.x(), y: node.y() }
                      : s
                  )
                );
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;