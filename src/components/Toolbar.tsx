import React from 'react';

interface ToolbarProps {
  onColorSelect?: (color: string) => void;
  onBrushSizeChange?: (size: number) => void;
  // Define other prop types as needed
}

const Toolbar: React.FC<ToolbarProps> = ({ onColorSelect, onBrushSizeChange }) => {
  return (
    <div>
      <button onClick={() => onColorSelect && onColorSelect('black')}>Black</button>
      <button onClick={() => onColorSelect && onColorSelect('red')}>Red</button>
      {/* Add more color options */}
      <input
        type="range"
        min="1"
        max="10"
        onChange={(e) => onBrushSizeChange && onBrushSizeChange(parseInt(e.target.value))}
      />
      {/* Add other toolbar options as needed */}
    </div>
  );
};

export default Toolbar;