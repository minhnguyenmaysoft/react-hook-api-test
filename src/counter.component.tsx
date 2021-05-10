import * as React from "react";

const CounterComponent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div>A page which has a counter with 2 buttons:</div>
      <div>1. To increase the counter +1 on click</div>
      <div>2. To reset the counter to 0</div>

      <h3>
        Count: {count}{" "}
        <button onClick={() => setCount(count + 1)}>Count</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </h3>
    </>
  );
};

export default CounterComponent;
