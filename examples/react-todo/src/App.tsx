import React from 'react';
import { SearchBar } from './SearchBar';
import { Todos } from './Todos';
import { simates } from './global-state';
import { useSimate } from 'react-simate';

const App: React.FC = () => {
  const todos = useSimate(simates.todos);

  return (
    <>
      <SearchBar />
      <Todos todos={todos} />
    </>
  );
};

export default App;
