import {
  AttachFunction,
  DetachFunction,
  InitValFunction,
  Listener,
  SetFunction
} from './types';
import { genID } from './utils';

export class Simate<TValue = any> {
  // Simate's value
  private value: TValue;
  // Callback functions attached to this Simate's instance
  private listeners: Listener[] = [];

  constructor(initialValue?: TValue | InitValFunction<TValue>) {
    let value: TValue;

    if (typeof initialValue === 'function') {
      value = (initialValue as InitValFunction<TValue>)();
    } else {
      value = initialValue;
    }

    this.value = value;
  }

  /**
   * Get the Simate's current value.
   *
   * @returns Simate's current value.
   */
  get(): TValue {
    return this.value;
  }

  /**
   * Allows you to mutate the Simate's value.
   *
   * @param newValue Mutate Simate's value to this value.
   */
  set(aNewValue: TValue | SetFunction<TValue>) {
    let newValue: TValue;

    if (typeof aNewValue === 'function') {
      newValue = (aNewValue as SetFunction<TValue>)(this.value);
    } else {
      newValue = aNewValue;
    }

    this.value = newValue;

    // Execute all the listeners attached to this Simate.
    this.listeners.forEach((listener) => {
      listener.function();
    });
  }

  /**
   * Attach a change listener to a simate so that it is called everytime
   * the simate's value is mutated via `.set()` method. You can attach as many
   * callback functions you want. This helps us achieve the "reactivity".
   *
   * @param aListener Function to be attached
   * @returns An object with `detach()` function to detach that given listener
   */
  attach(aListener: AttachFunction): { detach: DetachFunction } {
    if (typeof aListener !== 'function') {
      throw new Error(
        `You didn't provide a callback function to simate.attach(), instead` +
          ` provided: ${typeof aListener}`
      );
    }

    const thisListener: Listener = {
      ID: genID(),
      function: aListener
    };

    this.listeners.push(thisListener);

    return { detach: () => this.detach(thisListener) };
  }

  /**
   * Detach a listener from the Simate so that it's no longer execute when the
   * Simate's value is mutated. This helps us prevent unexpected side-effects.
   *
   * @param aListener Listener to be detached from the Simate.
   */
  private detach(aListener: Listener) {
    const listenersAfterDetaching = this.listeners.filter(
      (listener) => listener.ID !== aListener.ID
    );

    this.listeners = listenersAfterDetaching;
  }
}

export function createSimate<T>(initialValue?: T) {
  return new Simate<T>(initialValue);
}
