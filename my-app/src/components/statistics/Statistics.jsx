import {
    StatisticsSection,
    StatisticsTitle,
    StatisticsList,
    StatisticsItem,
    StatisticsItemLabel,
    StatisticsItemPercentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
    return (
<StatisticsSection>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}
    <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id}>
            <StatisticsItemLabel>{label}</StatisticsItemLabel>
            <StatisticsItemPercentage>{percentage}%</StatisticsItemPercentage>
        </StatisticsItem>
        ))}
    </StatisticsList>
</StatisticsSection>
    );
};

export default Statistics;