import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/users/selectors';
import { ProfileContent } from '../../components/layouts/ProfileContent';
import formatDate from '../../utils/formatDate';
import ageCalculator from '../../utils/ageCalculator';
import { useTranslation } from 'react-i18next';
import { useTheme, useUsersData } from '../../hooks';
import themes from '../../constants/themes';
import { ThemeProvider } from 'styled-components';
import User from '../../types/user.type';
import { ProfileHeader } from '../../components/layouts/ProfileHeader';
import { Button } from '../../components/ui/Button';

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
    if (!isLoading) {
      setUserData(
        user ?? data.find((user: User) => user.id === userId) ?? null
      );
    }
  }, [data, user, userId, isLoading]);

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (userData?.birthday) {
      const date = formatDate(userData.birthday, i18n.language);
      const calculatedAge = ageCalculator(userData.birthday);
      setBirthday(date);
      setAge(calculatedAge);
    }
  }, [userData, i18n.language]);

  return (
    userData && (
      <ThemeProvider theme={themes[theme]}>
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
