<div align="center">
  <h1>Documentation</h1>
  <p>API documentation for <a href="https://github.com/ceoshikhar/simate">Simate</a></p>
</div>

# `simate`

A `simate` is the core of our state management. Create a `simate` instance via `createSimate`. This instance is where the magic happens. All the methods are on the simate instance.

### `createSimate`

Create a simate instance

```ts
import { createSimate } from 'simate';

const count = createSimate(69);
// 69 is initial value for `count`. It is optional.

// You can also set initial value by calling a function as the argument.
function initVal() {
  return 420;
}
const count = createSimate(initVal()); // count = 420;

// You can explicitly provide type for your simate as generic.
const mySimate = createSimate<string | number>('Hello World!');
// mySimate can be a string or a number.
```

# Simate instance's methods

### `.get()`

Provides the current value

```ts
const value = count.get(); // Simate's value is 69
```

### `.set()`

Allows you to mutate the value

```ts
count.set(420); // Simate's value is now 420
// ----OR----
// You can also pass a function which takes the `prev`(current value of simate)
// as the argument.
// The return value of the function will be the next value of the simate.
count.set((prev) => prev + 1);
```

### `.attach()`

Attach a change listener to a simate so that it is triggered everytime the simate's value is mutated via `.set()` method. You can attach as many callback functions you want. This helps us achieve the "reactivity".

**NOTE:** Do not use this method inside the function that you are attaching.

```ts
function doSomethingWhenSimateValueChanges() {
  // ...
}
count.attach(doSomethingWhenSimateValueChanges);
```

# Detach a callback function from a `simate`

### `detach()`

An object is returned by `simate.attach()` which has `detach()` method on it. You can call `detach()` to stop it from being triggered when the simate's value changes.

```ts
function doSomethingWhenSimateValueChanges() {
  // ...
}

const listener = count.attach(doSomethingWhenSimateValueChanges);

listener.detach();
// `doSomethingWhenSimateValueChanges` will no longer be triggered.
```
