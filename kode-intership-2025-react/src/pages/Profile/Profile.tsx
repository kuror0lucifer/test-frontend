import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { ProfileHeader } from '../../components/ProfileHeader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/users/selectors';
import { ProfileContent } from '../../components/ProfileContent';
import formatDate from '../../utils/formatDate';
import ageCalculator from '../../utils/ageCalculator';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button';
import { useTheme, useUsersData } from '../../hooks';
import themes from '../../constants/themes';
import { ThemeProvider } from 'styled-components';
import User from '../../types/user.type';

export const Profile: FC = () => {
  const [birthday, setBirthday] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [userData, setUserData] = useState<User | null>(null);
  const { userId } = useParams();
  const user = useSelector(selectUserById(userId));
  const { i18n } = useTranslation();
  const { data, isLoading } = useUsersData();
  const { theme, toggleTheme } = useTheme();

  useLayoutEffect(() => {
    if (user === null && !isLoading) {
      setUserData(data.filter((user: User) => user.id === userId));
    } else {
      setUserData(user);
    }
  }, [data, user, userId, isLoading]);

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user?.birthday) {
      const date = formatDate(user.birthday, i18n.language);
      const calculatedAge = ageCalculator(user.birthday);
      setBirthday(date);
      setAge(calculatedAge);
    }
  }, [i18n.language]);

  return (
    userData && (
      <ThemeProvider theme={themes[theme]}>
        {/* <ProfileHeader
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
        <Button
          variant='themes'
          $bottom={40}
          $right={100}
          $position='fixed'
          onClick={toggleTheme}
          themeMode={theme}
        />
        <Button
          variant='translate'
          $bottom={40}
          $right={40}
          $position='fixed'
          lang={i18n.language}
          onClick={() => toggleLang()}
        /> */}
        <ProfileHeader
          fullName={`${userData.firstName} ${userData.lastName}`}
          avatar={userData.avatarUrl}
          department={userData.department}
          nickName={userData.userTag}
        />
        <ProfileContent
          phone={userData.phone}
          birthday={birthday}
          age={age}
        />
        <Button
          variant='themes'
          $bottom={40}
          $right={100}
          $position='fixed'
          onClick={toggleTheme}
          themeMode={theme}
        />
        <Button
          variant='translate'
          $bottom={40}
          $right={40}
          $position='fixed'
          lang={i18n.language}
          onClick={() => toggleLang()}
        />
      </ThemeProvider>
    )
  );
};
