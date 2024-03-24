import { useState } from 'react';

const useCanvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  return {
    isDrawing,
    startDrawing,
    finishDrawing,
    // Add more canvas handling functions as needed
  };
};

export default useCanvas;
