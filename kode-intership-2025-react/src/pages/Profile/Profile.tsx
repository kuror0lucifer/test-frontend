import { FC, useEffect, useState } from 'react';
import { ProfileHeader } from '../../components/ProfileHeader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/users/selectors';
import { ProfileContent } from '../../components/ProfileContent';
import formatDate from '../../utils/formatDate';
import ageCalculator from '../../utils/ageCalculator';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button';
import { useTheme } from '../../hooks';
import themes from '../../constants/themes';
import { ThemeProvider } from 'styled-components';

export const Profile: FC = () => {
  const [birthday, setBirthday] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const { userId } = useParams();
  const user = useSelector(selectUserById(userId));
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

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
    user && (
      <ThemeProvider theme={themes[theme]}>
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
