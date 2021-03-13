import * as React from 'react';
import styled from 'styled-components';
import { actions } from './global-state';

export const SearchBar: React.FC = () => {
  const [title, setTitle] = React.useState('');

  return (
    <>
      <h1 style={{ width: '100%', textAlign: 'center', marginTop: '2em' }}>
        React todo example with Simate
      </h1>

      <InputBoxContainer>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a todo"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              actions.addTodo(title);
              setTitle('');
            }
          }}
        />
        <AddTodoButton
          onClick={() => {
            actions.addTodo(title);
            setTitle('');
          }}
        >
          +
        </AddTodoButton>
      </InputBoxContainer>
    </>
  );
};

const InputBoxContainer = styled.div`
  margin: 4em 0 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddTodoButton = styled.button`
  font-size: 2rem;
  background: #041955;
  color: #ffffff;
  border: none;
  box-sizing: border-box;
  border-radius: 50%;
  width: 69px;
  height: 69px;
  margin-left: 1em;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 0.75em 0.5em;
  width: 60%;
  font-size: 1.25rem;
  font-family: 'Oxygen', sans-serif;
`;
