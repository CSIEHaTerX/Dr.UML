// App.tsx
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SidePalette from "./components/SidePalette";
import Canvas from "./components/Canvas";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex" }}>
        <SidePalette />
        <Canvas />
      </div>
    </DndProvider>
  );
}

export default App;
