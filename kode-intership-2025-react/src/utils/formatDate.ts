import { format } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';

const formatDate = (date: string | Date, locale: string): string => {
  let parsedDate: Date | null = null;
  const currentLocale = locale === 'ru' ? ru : enUS;

  if (date instanceof Date) {
    parsedDate = date;
  } else if (typeof date === 'string') {
    parsedDate = new Date(date);
  }

  if (!parsedDate) {
    throw new Error('Неверный формат даты');
  }

  return format(parsedDate, 'dd MMMM yyyy', { locale: currentLocale });
};

export default formatDate;
