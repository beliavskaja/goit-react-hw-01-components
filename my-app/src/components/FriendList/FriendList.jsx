import { AllFriends } from './FriendList.styled';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};

export default FriendList;