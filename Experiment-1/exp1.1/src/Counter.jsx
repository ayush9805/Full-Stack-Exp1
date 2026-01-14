import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>

      <button
        className="counter-btn increment"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        className="counter-btn decrement"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
