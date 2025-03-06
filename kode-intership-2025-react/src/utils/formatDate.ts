import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const formatDate = (date: string | Date): string => {
  let parsedDate: Date | null = null;

  if (date instanceof Date) {
    parsedDate = date;
  } else if (typeof date === 'string') {
    parsedDate = new Date(date);
  }

  if (!parsedDate) {
    throw new Error('Неверный формат даты');
  }

  return format(parsedDate, 'dd MMMM yyyy', { locale: ru });
};

export default formatDate;
