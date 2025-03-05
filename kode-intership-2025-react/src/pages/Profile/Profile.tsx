import { FC } from 'react';
import { ProfileHeader } from '../../components/ProfileHeader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/users/selectors';

export const Profile: FC = () => {
  const { userId } = useParams();
  const user = useSelector(selectUserById(userId));

  return (
    user && (
      <ProfileHeader
        fullName={`${user.firstName} ${user.lastName}`}
        avatar={user?.avatarUrl}
        department={user?.department}
        nickName={user?.userTag}
      />
    )
  );
};
