import * as React from 'react';
import type { Simate } from 'simate';

export function useSimate<T>(simate: Simate<T>) {
  const [state, setState] = React.useState(simate.get());

  const handleChange = () => {
    const value = simate.get();
    setState(value);
  };

  React.useEffect(() => {
    // Attach `handleChange` to the `simate`, so that this function is called
    // whenever the simate's value changes.
    // Attach the listener when the component is mounted.
    const listenerAttached = simate.attach(handleChange);

    // Detach `handleChange` from the `simate` when the component is unmounted.
    return () => listenerAttached.detach();
  }, []);

  return state;
}
