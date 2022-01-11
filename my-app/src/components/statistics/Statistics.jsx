import {
    StatisticsSection,
    StatisticsTitle,
    StatisticsList,
    StatisticsItem,
    StatisticsItemLabel,
    StatisticsItemPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};

export default Statistics;