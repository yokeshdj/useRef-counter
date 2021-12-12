import "./styles.css";
import { useState, useRef } from "react";
export default function App() {
  const [state, setState] = useState(0);
  // var id;
  const timerRef = useRef(null);
  const handleStart = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000);
    }
  };
  const handlePause = () => {
    clearInterval(timerRef.current);
  };
  const handleStop = () => {
    handlePause();
    setState(0);
    timerRef.current = null;
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{state}</h2>
      <button disabled={timerRef.current} onClick={handleStart}>
        Start
      </button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
