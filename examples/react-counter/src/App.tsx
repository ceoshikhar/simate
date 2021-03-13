import * as React from 'react';
import { createSimate } from 'simate';
import { useSimate } from 'react-simate';

// Create simate
const countSimate = createSimate(420);

const initialState = {
  firstKey: 69,
  secondKey: 'Nice!'
};

const objSimate = createSimate(initialState);

// Manipulate simate. In this case, we increment by 1.
function increment() {
  // Get current simate's value by calling simate.get()
  // Set new simate's value by calling simate.set(newValue)
  countSimate.set(countSimate.get() + 1);
  objSimate.set({
    ...objSimate.get(),
    firstKey: objSimate.get().firstKey + 1
  });
}

// Manipulate simate. In this case, we decrement by 1.
function decrement() {
  countSimate.set(countSimate.get() - 1);
  objSimate.set({
    ...objSimate.get(),
    firstKey: objSimate.get().firstKey - 1
  });
}

function App() {
  const [isComponentVisible, setIsComponentVisible] = React.useState(false);

  function toggleComponent() {
    setIsComponentVisible((prev) => !prev);
  }

  return (
    <>
      <div className="box">
        {isComponentVisible ? <Component /> : <Counter />}
        <button onClick={toggleComponent}>{`${
          isComponentVisible ? 'Hide this' : 'Show another'
        } component`}</button>
      </div>
    </>
  );
}

const Counter: React.FC = () => {
  // Bind your component to simate with `useSimate` react hook.
  // `useSimate` returns the latest value of the simate. Your component will
  // re-render whenever simate is manipulated.
  const count = useSimate(countSimate);
  const objectState = useSimate(objSimate);

  return (
    <>
      <h1>React Counter with Simate</h1>
      <h3>Count State: {count}</h3>
      <div>
        <pre>
          <p>Object State:</p>
          <code>{JSON.stringify(objectState, null, 2)}</code>
        </pre>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};

const Component: React.FC = () => {
  return (
    <>
      <h1>I am a different component</h1>
    </>
  );
};

export default App;
