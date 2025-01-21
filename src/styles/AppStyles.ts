import styled from 'styled-components';

export const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  margin-top:40px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    color: #470112;
    margin: 0;
  }
`;

export const Main = styled.main`
  margin-top: 20px;
  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin:10px;

    &:hover {
      opacity: 0.9;
    }
  }

  .addButton {
    background-color: #cc8d04;
  }
`;
