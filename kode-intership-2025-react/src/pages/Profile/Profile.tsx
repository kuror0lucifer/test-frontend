import { FC, useEffect, useState } from 'react';
import { ProfileHeader } from '../../components/ProfileHeader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/users/selectors';
import { ProfileContent } from '../../components/ProfileContent';
import formatDate from '../../utils/formatDate';
import ageCalculator from '../../utils/ageCalculator';

export const Profile: FC = () => {
  const [birthday, setBirthday] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const { userId } = useParams();
  const user = useSelector(selectUserById(userId));

  useEffect(() => {
    if (user?.birthday) {
      const date = formatDate(user?.birthday);
      const calculatedAge = ageCalculator(user?.birthday);
      setBirthday(date);
      setAge(calculatedAge);
    }
  }, []);

  return (
    user && (
      <>
        <ProfileHeader
          fullName={`${user.firstName} ${user.lastName}`}
          avatar={user?.avatarUrl}
          department={user?.department}
          nickName={user?.userTag}
        />
        <ProfileContent
          phone={user.phone}
          birthday={birthday}
          age={age}
        />
      </>
    )
  );
};
