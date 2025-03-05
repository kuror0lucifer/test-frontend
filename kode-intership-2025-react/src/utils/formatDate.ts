import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-').map(x => Number(x));
  const birthday = new Date(year, month, day);
  const formatedDate = format(birthday, 'dd MMMM yyyy', { locale: ru });

  return formatedDate;
};

export default formatDate;
