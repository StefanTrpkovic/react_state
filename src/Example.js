import React, { useEffect, useState } from 'react';

export function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  console.log("rerendered!")
  
  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>
       Increase by 1
      </button>
      <button onClick={() => setCount(count - 1)}>
      Decrease by 1
      </button>
    </div>
  );
} 