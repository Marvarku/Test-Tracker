import styled from 'styled-components';

export const TaskFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  resize: none;
`;

export const FormActions = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .save {
    background-color: #28a745;
  }

  .cancel {
    background-color: #6c757d;
  }
`;
