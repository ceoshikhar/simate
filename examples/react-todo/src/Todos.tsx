import * as React from 'react';
import { ITodo, Todo } from './Todo';
import styled from 'styled-components';

export const Todos: React.FC<{ todos: ITodo[] }> = ({ todos }) => {
  return (
    <Wrapper>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;
