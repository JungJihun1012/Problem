import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter([...counter, 0]);
  };

  const updateCouner = (idx, delta) => {
    const newCounter = counter.map((count, i) =>
      i === idx ? count + delta : count
    );
    setCounter(newCounter);
  };

  const deleteCounter = (idx) => {
    const newCounters = counter.filter((_, i) => i !== idx);
    setCounter[newCounters];
  };
  return (
    <div>
      <button onClick={addCounter}>Add Counter</button>
      {counter.map((count, index) => (
        <div key={index}>
          <span>{count}</span>
          <button onClick={() => updateCounter(index, 1)}>+</button>
          <button onClick={() => updateCounter(index, -1)}>-</button>
          <button onClick={() => deleteCounter(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;