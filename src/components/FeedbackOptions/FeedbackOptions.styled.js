import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const Button = styled.button`
  width: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 6px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: #1e1e1e;
  border-radius: 14px;
  border: 2px solid #9bb537;
  background-color: #f8f8f8;
  &:hover {
    background-color: #9bb537;
    color: #f8f8f8;
  }
`;
