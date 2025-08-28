import React, { useEffect, useState } from 'react';
import './App.css';

const KeyTracker: React.FC = () => {
  const [key, setKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKey(e.key.toUpperCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="key-tracker-container">
      <h4>🖱️ Phím bạn vừa nhấn:</h4>
      {key && <div className="key-display">[{key}]</div>}
    </div>
  );
};

export default KeyTracker;
