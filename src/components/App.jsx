import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistic } from './Statistic/Statistic';
import { Wrapper } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  hendlerClick = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) return 0;
    return Math.round((this.state.good / totalFeedback) * 100);
  }
  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.hendlerClick}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback <= 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}
