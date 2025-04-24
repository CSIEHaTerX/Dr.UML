// Canvas.tsx
import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";  // 來自 konva 進行畫布渲染
import { useDrag } from "react-dnd";  // 來自 react-dnd 進行拖曳

const Canvas = () => {
  const [shapes, setShapes] = useState([
    { id: "1", x: 50, y: 50, width: 100, height: 100, color: "red" },
    { id: "2", x: 200, y: 150, width: 100, height: 100, color: "green" },
  ]);

  const moveShape = (id: string, newX: number, newY: number) => {
    setShapes(prevShapes =>
      prevShapes.map(shape =>
        shape.id === id ? { ...shape, x: newX, y: newY } : shape
      )
    );
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {shapes.map(shape => (
          <Rect
            key={shape.id}
            x={shape.x}
            y={shape.y}
            width={shape.width}
            height={shape.height}
            fill={shape.color}
            draggable
            onDragEnd={(e) => moveShape(shape.id, e.target.x(), e.target.y())}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
