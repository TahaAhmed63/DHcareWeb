import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseClick = () => {
      setIsExpanded(true);
      setTimeout(() => {
        setIsExpanded(false);
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div
      className={`cursor ${isExpanded ? 'expand' : ''}`}
      style={{
        top: `${cursorPosition.y - 10}px`,
        left: `${cursorPosition.x - 10}px`,
      }}
    />
  );
};

export default Cursor;