<div align="center">
  <h1>react-simate</h1>
  <p>React integration for <a href="https://github.com/ceoshikhar/simate">Simate</a></p>
</div>

# Installation

```bash
npm install react-simate
```

**OR**

```bash
yarn add react-simate
```

# Usage

**Note:** `simate` package must be installed to use this package. `react-simate` is an extension to `simate`. It provides React integration feature via `useSimate` hook.

```ts
// App.tsx
import React from 'react';
import { createSimate } from 'simate';
import { useSimate } from 'react-simate';

// Create count simate
const countSimate = createSimate(69);

// Mutate count's value by incrementing current value by 1
function increment() {
  countSimate.set((prev) => prev + 1);
}

// Mutate count's value by decrementing current value by 1
function decrement() {
  countSimate.set((prev) => prev - 1);
}

const App: React.FC = () => {
  // Hook your functional react component to the `countSimate`. Now whenever
  // the countSimate value is mutated, your component will re-render and `count`
  // will be the latest value.
  const count = useSimate(countSimate);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
```
