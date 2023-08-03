import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddition = () => {
    setCount(count+1);
  };

  const handleSubtraction = () => {
    setCount(count-1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
    </div>
  );
};
export default Counter;