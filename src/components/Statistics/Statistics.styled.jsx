import styled from 'styled-components';

const StatisticsContainer = styled.div`
  display: flex;
  margin-top: 0;
  padding: 15px;
`;

const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const StatisticsItem = styled.li`
  list-style: none;
  font-weight: 500;
`;

const StatisticsTitle = styled.span`
  text-align: center;
  font-size: 16px;

  color: #555;
`;

export { StatisticsContainer, StatisticsList, StatisticsItem, StatisticsTitle };
