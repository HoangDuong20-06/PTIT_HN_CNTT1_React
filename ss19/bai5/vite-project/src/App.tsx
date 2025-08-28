import React, { useState } from 'react';
import "./App.css"
const quotes: string[] = [
  "Học, học nữa, học mãi.",
  "Thất bại là mẹ thành công.",
  "Không gì là không thể.",
  "Kiến tha lâu đầy tổ.",
  "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
];

const getRandomQuote = (exclude: string): string => {
  let newQuote = exclude;
  while (newQuote === exclude) {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  return newQuote;
};

const RandomQuote: React.FC = () => {
  const [quote, setQuote] = useState<string>(quotes[0]);

  const handleClick = () => {
    const newQuote = getRandomQuote(quote);
    setQuote(newQuote);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      width: '350px',
      textAlign: 'center',
      borderRadius: '8px',
      fontFamily: 'sans-serif'
    }}>
      <h4>🌸 Câu nói truyền cảm hứng hôm nay:</h4>
      <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>"{quote}"</p>
      <button
        onClick={handleClick}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
};

export default RandomQuote;
