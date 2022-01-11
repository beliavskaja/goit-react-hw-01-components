import {
    ProfileCard,
    ProfileInfo,
    ProfileImage,
    ProfileName,
    ProfileDescription,
    ProfilePerformance,
    ProfilePerformanceItem,
    PerformanceLabel,
    PerformanceQuantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({ avatar, username, tag, location, stats }) => {
      return (
        <ProfileCard>
            <ProfileInfo>
                <ProfileImage
                src={avatar}
                alt="User avatar"
                />
                <ProfileName>{username}</ProfileName>
                <ProfileDescription>@{tag}</ProfileDescription>
                <ProfileDescription>{location}</ProfileDescription>
            </ProfileInfo>

            <ProfilePerformance>
                <ProfilePerformanceItem>
                    <PerformanceLabel>Followers</PerformanceLabel>
                    <PerformanceQuantity> {stats.followers}</PerformanceQuantity>
                </ProfilePerformanceItem>
                  
                <ProfilePerformanceItem>
                    <PerformanceLabel>Views</PerformanceLabel>
                    <PerformanceQuantity> {stats.views}</PerformanceQuantity>
                </ProfilePerformanceItem>
                  
                <ProfilePerformanceItem>
                    <PerformanceLabel>Likes</PerformanceLabel>
                    <PerformanceQuantity> {stats.likes}</PerformanceQuantity>
                </ProfilePerformanceItem>
            </ProfilePerformance>
        </ProfileCard>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

export default Profile;