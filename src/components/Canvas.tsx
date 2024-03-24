import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true
    });
    // Additional setup will be added here
  }, []);

  return <canvas ref={canvasRef} id="canvas" width={800} height={600} />;
};

export default Canvas;