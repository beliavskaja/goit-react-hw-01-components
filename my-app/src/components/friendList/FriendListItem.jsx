import {
    Friend,
    FriendStatus,
    FriendAvatar,
    FriendName,
} from './FriendListItem.styled';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return(
<Friend key={id}>
    <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
    <FriendAvatar src={avatar} />
    <FriendName>{name}</FriendName>
</Friend>
    );
};

export default FriendListItem;