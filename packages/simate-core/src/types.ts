export type AttachFunction = () => void;

export type DetachFunction = () => void;

export type SetFunction<T> = (currentVal: T) => T;

export type InitValFunction<T> = () => T;

export interface Listener {
  ID: number;
  function: AttachFunction;
}
