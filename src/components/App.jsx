import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistic } from './Statistic/Statistic';
import { Wrapper } from './GlobalStyle';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedback;
  const hendlerClick = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();

    return totalFeedback === 0
      ? 0
      : Math.round((feedback.good / totalFeedback) * 100);
  };

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={hendlerClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback <= 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Wrapper>
  );
};
