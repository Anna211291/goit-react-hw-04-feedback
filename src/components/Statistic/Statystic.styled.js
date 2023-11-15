import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  margin: 0;
  border-radius: 4px;
  font-size: 20px;
  color: #f8f8f8;
`;
export const StatisticListItem = styled.ul`
  padding: 8px;
  border: 1px solid ${getRandomHexColor};
  border-radius: 6px;
  color: #f8f8f8;
`;
