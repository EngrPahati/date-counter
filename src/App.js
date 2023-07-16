import { useState } from "react";


function App() {
  return (
    <Counter />
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.toDateString();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button
          onClick={() => setStep(s => s - 1)}
        >-</button>
        <span>Step: {step}</span>
        <button
          onClick={() => setStep(s => s + 1)}
        >+</button>
      </div>
      <br />
      <div>
        <button
          onClick={() => setCount(c => c - step)}
        >-</button>
        <span>Count: {count}</span>
        <button
          onClick={() => setCount(c => c + step)}
        >+</button>
      </div>
      <h3>
        <span>{ count === 0 ? 'Today is ' : ''}</span>
        <span>{ count > 0 ? `${count} ${count > 1 ? 'days' : 'day'} from today is ` : ''}</span>
        <span>{ count < 0 ? `${Math.abs(count)} ${Math.abs(count) > 1 ? 'days': 'day' } ago was `: ''}</span>
        
        <span>{ date.toDateString() }</span>

      </h3>
    </div>
  );
}

export default App;
