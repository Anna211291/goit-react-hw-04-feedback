import { StatisticList, StatisticListItem } from './Statystic.styled';

export const Statistic = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatisticList>
        <StatisticListItem>Good: {good}</StatisticListItem>
        <StatisticListItem>Neutral: {neutral}</StatisticListItem>
        <StatisticListItem>Bad: {bad}</StatisticListItem>
        <StatisticListItem>Total: {total}</StatisticListItem>
        <StatisticListItem>
          Positive feedback: {positivePercentage}&#37;
        </StatisticListItem>
      </StatisticList>
    </div>
  );
};
