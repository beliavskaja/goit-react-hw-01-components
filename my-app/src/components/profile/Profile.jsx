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

const Profile = ({ user }) => {
      return (
        <ProfileCard>
            <ProfileInfo>
                <ProfileImage
                src={user.avatar}
                alt="User avatar"
                />
                <ProfileName>{user.username}</ProfileName>
                <ProfileDescription>@{user.tag}</ProfileDescription>
                <ProfileDescription>{user.location}</ProfileDescription>
            </ProfileInfo>

            <ProfilePerformance>
                <ProfilePerformanceItem>
                    <PerformanceLabel>Followers</PerformanceLabel>
                    <PerformanceQuantity> {user.stats.followers}</PerformanceQuantity>
                </ProfilePerformanceItem>
                  
                <ProfilePerformanceItem>
                    <PerformanceLabel>Views</PerformanceLabel>
                    <PerformanceQuantity> {user.stats.views}</PerformanceQuantity>
                </ProfilePerformanceItem>
                  
                <ProfilePerformanceItem>
                    <PerformanceLabel>Likes</PerformanceLabel>
                    <PerformanceQuantity> {user.stats.likes}</PerformanceQuantity>
                </ProfilePerformanceItem>
            </ProfilePerformance>
        </ProfileCard>
    );
};

export default Profile;