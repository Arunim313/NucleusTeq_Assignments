import React, { useState } from 'react';

function LiveInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Live Input</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default LiveInput;
