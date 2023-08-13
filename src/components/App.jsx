import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { Section } from './Sections';
import { FeedbackOptions } from './Feedbacks';
import { Statistics } from './Statistics';
import { NotificationMessage } from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const onLeaveFeedback = evt => {
    const { textContent } = evt.currentTarget;
    switch (textContent) {
      case 'good':
        setGood(prevState => prevState + 1);

        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);

        break;

      case 'bad':
        setBad(prevState => prevState + 1);

        break;

      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage(prevState => Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <NotificationMessage />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string,
  options: PropTypes.number,
};

export { App };
