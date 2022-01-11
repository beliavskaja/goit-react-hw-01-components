import styled from 'styled-components';
import getRandomColor from '../../helpers/getRandomColor';

export const StatisticsSection = styled.section`
    width: 300px;
    background-color: #ffffff;
    border: 1px solid #66A5AD;
    margin-bottom: 20px;
`;

export const StatisticsTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    color: #003B46;
    margin: 0px;
    padding: 16px 0;
    border-bottom: 1px solid #66A5AD;
`;

export const StatisticsList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

export const StatisticsItem = styled.li`
    background-color: ${getRandomColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 5);
    padding: 5px;
`;

export const StatisticsItemLabel = styled.span`
    font-size: 14px;
    margin-bottom: 5px;
    color: #ffffff;
`;

export const StatisticsItemPercentage = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
`;