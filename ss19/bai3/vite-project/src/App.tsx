import React, { useState, useRef, useEffect } from 'react';
import "./App.css"
const RenderCounter: React.FC = () => {
  const [input, setInput] = useState('');
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ padding: '20px', width: '300px' }}>
      <h3>🔄 Component Render Counter</h3>
      <label>
        Input: <input value={input} onChange={(e) => setInput(e.target.value)} />
      </label>
      <p>Component đã render: <strong>{renderCount.current}</strong> lần</p>
    </div>
  );
};

export default RenderCounter;
