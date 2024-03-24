import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState('black');
  const [brushSize, setBrushSize] = useState(2);

  useEffect(() => {
    const canvasInstance = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
    });
    canvasInstance.freeDrawingBrush.color = color;
    canvasInstance.freeDrawingBrush.width = brushSize;

    return () => {
      canvasInstance.dispose();
    };
  }, [color, brushSize]);

  const handleColorChange = (selectedColor: string) => {
    setColor(selectedColor);
  };

  const handleBrushSizeChange = (selectedSize: number) => {
    setBrushSize(selectedSize);
  };

  // Include the controls for changing color and brush size in your component render.
  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleColorChange('black')}>Black</button>
        <button onClick={() => handleColorChange('red')}>Red</button>
        {/* ... other color buttons ... */}
        <input
          type="range"
          min="1"
          max="10"
          value={brushSize}
          onChange={(e) => handleBrushSizeChange(parseInt(e.target.value))}
        />
      </div>
      <canvas ref={canvasRef} id="canvas" width={800} height={600} />
    </>
  );
};

export default Canvas;
