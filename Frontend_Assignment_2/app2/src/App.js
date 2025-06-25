import React from 'react';
import Counter from './components/Counter';
import LiveInput from './components/LiveInput';
import ToggleParagraph from './components/ToggleParagraph';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React State and Event Handling</h1>
      <Counter />
      <hr />
      <LiveInput />
      <hr />
      <ToggleParagraph />
    </div>
  );
}

export default App;
