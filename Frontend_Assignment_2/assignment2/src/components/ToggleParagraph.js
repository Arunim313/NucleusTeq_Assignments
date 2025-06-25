import React, { useState } from 'react';

function ToggleParagraph() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2>Toggle Paragraph</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>
      {isVisible && <p>This is a toggleable paragraph. Click the button to hide/show me.</p>}
    </div>
  );
}

export default ToggleParagraph;
