import { differenceInYears } from 'date-fns';

const ageCalculator = (date: string): number => {
  const currentDate = new Date();
  return differenceInYears(currentDate, date);
};

export default ageCalculator;
