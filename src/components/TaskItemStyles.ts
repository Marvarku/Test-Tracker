import styled from 'styled-components';

export const TaskItemContainer = styled.li`
  background: white;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 5px;
    font-size: 18px;
  }

  p {
    margin: 0 0 10px;
    color: #6c757d;
  }
`;

export const TaskActionButton = styled.button<{ color: 'danger' | 'primary' }>`
  border: none;
  padding: 8px 12px;
  margin-right: 5px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.color === 'danger' ? '#dc3545' : '#17a2b8')};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;
