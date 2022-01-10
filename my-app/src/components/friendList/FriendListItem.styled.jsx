import styled from 'styled-components';

export const Friend = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    background-color: #ffffff;
    border: 1px solid #66A5AD;
      :last-child {
        margin-bottom: 0;
      }
`;

export const FriendStatus = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 15px;
    background-color: ${({ isOnline }) => {
        return isOnline ? 'green' : 'red';
    }};
`;

export const FriendAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10%;
    margin-left: 15px;
    background: #cac9c9;
    padding: 5px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #003B46;
  margin-left: 15px;
`;