<div align="center">
  <h1>Simate - (Sim)ple st(ate)</h1>
  <p>🤖 A very simple state management tool for your JavaScript applications</p>
</div>

> Currently `simate` is not production ready. We can assume it's in beta stage. I would love for you to use `simate` just for play projects( such as Todos, Counter, Weather, Dashboard, etc ) to help improve it.

# Demo

- [Vanilla counter app](examples/vanilla-counter/index.html) without any front-end framework. Just plain old good vanilla Javascript.
- [React counter app](examples/react-counter/src/App.tsx) to see how simple it is to bind your `simate` to a functional React component using `useSimate` hook.
- [React todo app](examples/react-todo/src/App.tsx) to see how simple it is to manage your state logic of the application entirely separated from the UI framework.

#### **TODO: the example links should take you to deployed version( or CodeSandbox ) to see the demo and the source code**

# Why choose Simate?

- Simple and easy API
- Zero dependencies
- Small - minified bundle size < 1KB ~863 bytes
- Plug and play directly into any UI framework
- Written in Typescript to make everyone's live easier
- Currently supports `React` integration via `useSimate` hook provided by [react-simate](https://github.com/ceoshikhar/simate/blob/dev/packages/simate-react/README.md) package
- Other UI framework integration support coming soon

# How to use Simate? [API Docs](https://github.com/ceoshikhar/simate/blob/dev/packages/simate-core/README.md)

## The classic counter example.

```ts
// The only thing you need to create and use a `simate`
import { createSimate } from 'simate';

// Create simate with initial value of `69` for counter
const countSimate = createSimate(69);

// Manipulate simate. In this case, we increment by 1.
function increment() {
  // Get simate's current value by calling simate.get()
  const currentValue = countSimate.get();
  // Set simate's new value by calling simate.set(newValue)
  countSimate.set(currentValue + 1);
}

// Manipulate simate. In this case, we decrement by 1.
function decrement() {
  // You can also set simate's next value by passing a function. For more info,
  // check the API documentation.
  countSimate.set((prev) => prev - 1);
}

// With our counter example, let's assume we have two buttons. One called
// `increment` other one called `decrement`. When button is clicked we want to
// increment or decrement the count.

// On click event listener to increment the count (simate's value) by 1
document.getElementById('increment').addEventListener('click', increment);

// On click event listener to decrement the count (simate's value) by 1
document.getElementById('decrement').addEventListener('click', decrement);

function doSomethingWhenSimateValueChanges() {
  // Your logic to be exectued whenever `countSimate` value changes, that is
  // whenever countSimate.set() is called.
  //
  // With our counter example, let's assume we want to show the latest value
  // of `countSimate` in a `<h1>` tag with id=`count`
  document.getElementById('count').innerHTML = countSimate.get();
}

// Attach a function( listener/callback ) that you want to be called every time
// the simate's value changes. In context to our example,
// `doSomethingWhenSimateValueChanges` will be called whenever `increment` or
// `decrement` functions are called because they manipulate the simate's value.
// You can `attach` as many callback functions as you want.
const listener = countSimate.attach(doSomethingWhenSimateValueChanges);

function detach() {
  // You can detach a listener from a simate as well by calling `detach` on the
  // object returned by `simate.attach(function)`.
  // This can be handy to improve performance or for some specific use case.
  listener.detach();
}

// Another use-case can be to detach listener whenever your react component is
// unmounted and attach the listener when it's mounted. This is the
// implementation of `useSimate` react hook.
document.addEventListener('beforeunload', detach);
```

# Why I created Simate ?

- This is my first front-end javascript library. I wanted to contribute something back to the amazing community of developers, especially web developers.
- This project was inspired by [Redux](https://redux.js.org/) library. I am aware there are many advance and fast libraries out there like [MobX](https://mobx.js.org/README.html), [Recoil](https://recoiljs.org/) & etc, but I wanted to build something of my own.
- My main motivations were to build something :
  - without any external dependencies
  - it should be simple
  - it should be small ( least boiler-plate code ) **and**
  - it should be customizable - so that I can design and architect global state for my app as per my liking without being forced to follow an opinionated way of doing it. So that I can create a seperate `global-state` library without tightly coupling it with any front-end framework. Example, for react, just have to do use `useSimate` to bind your `simate` to a component. No extra react integration boiler plate, just a simple hook which returns latest simate's value. Your logic of how state changes is not coupled with any framework or opinions. Do it just the way you want it. It helps you to re-use `global-state` library for different platforms like react-native, electron, etc.

# Installation

```bash
npm install simate
```

**OR**

```bash
yarn add simate
```
