import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  StatisticsList,
  StatisticsItem,
  StatisticsTitle,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsContainer>
      <StatisticsList>
        <StatisticsItem>
          <StatisticsTitle>Good: {good}</StatisticsTitle>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsTitle>Neutral: {neutral}</StatisticsTitle>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsTitle>Bad: {bad}</StatisticsTitle>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsTitle>Total: {total}</StatisticsTitle>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsTitle>
            Positive feedback: {positivePercentage}%
          </StatisticsTitle>
        </StatisticsItem>
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export { Statistics };
