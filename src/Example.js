import { useState } from 'react';

export function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  console.log("rerendered!")

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={increment}>
       Increase by 1
      </button>
      <button onClick={decrement}>
      Decrease by 1
      </button>
    </div>
  );
} 