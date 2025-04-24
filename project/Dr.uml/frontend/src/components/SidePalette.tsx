// SidePalette.tsx
import React from "react";
import { useDrag } from "react-dnd";

const SidePalette = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "GADGET",
    item: { type: "rectangle" }, // 可以加更多元件類型
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ padding: 10, borderRight: "1px solid gray" }}>
      <div
        style={{
          opacity: isDragging ? 0.5 : 1,
          padding: 8,
          background: "lightblue",
          cursor: "grab",
        }}
      >
        拖我：矩形
      </div>
    </div>
  );
};

export default SidePalette;
