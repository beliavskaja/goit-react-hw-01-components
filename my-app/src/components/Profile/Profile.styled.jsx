import styled from 'styled-components';

export const ProfileCard = styled.div`
    display: block;
    text-align: center;
    width: 300px;
    background-color: #C4DFE6;
    border: 2px solid #66A5AD;
    margin-bottom: 20px;
`;

export const ProfileInfo = styled.div`
   padding: 25px 0;
`;

export const ProfileImage = styled.img`
    width: 50%;
    border-radius: 50%;
    background: #E2E8E4;
    padding: 5px;
    margin-bottom: 20px;
`;

export const ProfileName = styled.p`
    margin-top: 0px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
    color: #003B46;
`;

export const ProfileDescription = styled.p`
    margin-top: 0;
    margin-bottom: 10px;
    color: #07575B;
`;

export const ProfilePerformance = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    border-top: 1px solid #66A5AD;
`;

export const ProfilePerformanceItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: calc(100% / 3);
    padding: 15px 0;
    background-color: #E2E8E4;
    border-right: 1px solid #66A5AD;
        :last-child {
            border: none;
        }
`;

export const PerformanceLabel = styled.span`
    font-size: 14px; 
    color: #07575B;
    margin-bottom: 4px;
`;

export const PerformanceQuantity = styled.span`
    font-weight: 500;
    color: #003B46;
`;