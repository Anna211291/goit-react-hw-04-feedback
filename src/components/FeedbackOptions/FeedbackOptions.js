import { ButtonsWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonsWrapper>
  );
};
