import * as React from 'react';
import styled from 'styled-components';
import { actions } from './global-state';
import { CancleIcon } from './CancleIcon';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoProps {
  todo: ITodo;
}

export const Todo: React.FC<TodoProps> = (props) => {
  const { id, title, completed } = props.todo;

  return (
    <Container completed={completed}>
      <Input type="checkbox" onClick={() => actions.toggleComplete(id)} />
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <p>{title}</p>
        <InvisibleBtn onClick={() => actions.removeTodo(id)}>
          <CancleIcon />
        </InvisibleBtn>
      </div>
    </Container>
  );
};

const Container = styled.div<{ completed: boolean }>`
  width: 80%;
  height: 50px;
  max-width: 500px;
  margin: 1em auto 0 auto;
  background: #041955;
  color: #ffffff;
  padding: 1.5em 1.5em;
  border-radius: 26px;
  display: flex;
  align-items: center;

  svg {
    fill: red;
    height: 26px;
    cursor: pointer;
  }

  p {
    font-size: 1.25rem;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 0.5em;
  }

  &:hover {
    background: #03206e;
  }
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
`;

const InvisibleBtn = styled.button`
  background: transparent;
  border: none;
`;
