import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Content from './components/Content';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div style={{ textAlign: 'center' }}>
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
