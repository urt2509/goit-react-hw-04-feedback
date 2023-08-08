import React from 'react';
import PropTypes, { string } from 'prop-types';

import {
  FeedbackContainer,
  FeedbackItem,
  FeedbackButton,
} from './Feedbacks.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      {options.map(option => {
        return (
          <FeedbackItem key={option}>
            <FeedbackButton type="button" onClick={onLeaveFeedback}>
              {option}
            </FeedbackButton>
          </FeedbackItem>
        );
      })}
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
};

export { FeedbackOptions };
