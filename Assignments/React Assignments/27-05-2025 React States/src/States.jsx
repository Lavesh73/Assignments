import React, { useState } from 'react';

function States() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState('');

  const handleChange = (event) => setText(event.target.value);

  const increase = () => setCount(count + Number(text));
  const decrease = () => setCount(count - Number(text));

  return (
    <div style={{ marginTop: '20px' }}>
      <p>Current Count: {count}</p>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter a number"
        style={{ padding: '8px', fontSize: '14px', marginRight: '10px' }}
      />
      <button onClick={increase} style={{ marginRight: '10px' }}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
export default States;
