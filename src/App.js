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
 
        
        <input id="point" type="range" min="1" max="10" value={step}
          onChange={e => setStep(Number(e.target.value))}
        ></input>
        <span>Step: { step }</span>
      
      </div>
      <br />
      <div>
        <button
          onClick={() => setCount(c => c - step)}
        >-</button>
          <input type="text" value={ count } onChange={e => setCount(Number(e.target.value))}></input>
        
        <button
          onClick={() => setCount(c => c + step)}
        >+
        </button>
      </div>
      <h3>
        <span>{ count === 0 ? 'Today is ' : ''}</span>
        <span>{ count > 0 ? `${count} ${count > 1 ? 'days' : 'day'} from today is ` : ''}</span>
        <span>{ count < 0 ? `${Math.abs(count)} ${Math.abs(count) > 1 ? 'days': 'day' } ago was `: ''}</span>
        
        <span>{ date.toDateString() }</span>

      </h3>
      
        {count !== 0 || step !== 1 ? (
          <div>
            <button
              onClick={() => {
              setCount(0);
              setStep(1);
              }}
            >Reset</button>
          </div>
        ) : null}
        
      
    </div>
  );
}

export default App;
