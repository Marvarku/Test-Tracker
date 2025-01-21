import styled from 'styled-components';

export const TaskListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const NoTasksMessage = styled.p`
  color: #6c757d;
  font-style: italic;
  text-align: center;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;
