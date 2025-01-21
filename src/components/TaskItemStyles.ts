import styled from 'styled-components';

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

export const PriorityBadge = styled.span<{ priority: 'Low' | 'Medium' | 'High' }>`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;

  background-color: ${(props) =>
    props.priority === 'Low'
      ? '#28a745' // Green for Low
      : props.priority === 'Medium'
      ? '#ffc107' // Orange for Medium
      : '#dc3545'}; // Red for High
`;

export const TaskDescription = styled.p`
  margin: 10px 0 0;
  color: #555;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const TaskActionButton = styled.button<{ color: 'primary' | 'danger' }>`
  background-color: ${(props) => (props.color === 'primary' ? '#007bff' : '#dc3545')};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.color === 'primary' ? '#0056b3' : '#c82333'};
  }
`;
