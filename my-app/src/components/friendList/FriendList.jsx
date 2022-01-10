import { AllFriends } from './FriendList.styled';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return(
        <AllFriends>
            {friends.map(({ id, avatar, name, isOnline }) => <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            />)}
        </AllFriends>
    );
};

export default FriendList;