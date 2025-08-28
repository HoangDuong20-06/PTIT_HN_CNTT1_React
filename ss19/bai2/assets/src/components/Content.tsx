import React from 'react';
import { useTheme } from '../ThemeContext';

const Content: React.FC = () => {
  const { theme } = useTheme();
  const { toggleTheme } = useTheme();
  const styles: React.CSSProperties = {
    backgroundColor: theme === 'dark' ? '#222' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '20px',
    borderRadius: '5px',
    marginTop: '20px'
  };

  return (
    <div style={styles}>
       <h1>My Themed App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>Theme hiện tại: <strong>{theme.toUpperCase()}</strong></p>
    </div>
  );
};

export default Content;
