import User from '../types/user.type';

const sortByBirthday = (users: User[]) => {
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const birthdayThisYear: User[] = [];
  const birthdayNextYear: User[] = [];

  users.forEach(user => {
    const birthday = new Date(user.birthday);

    if (
      currentMonth > birthday.getMonth() ||
      (currentMonth === birthday.getMonth() && currentDay > birthday.getDate())
    ) {
      birthdayNextYear.push(user);
    } else {
      birthdayThisYear.push(user);
    }
  });

  const sorting = (a: User, b: User) => {
    const monthA = new Date(a.birthday).getMonth();
    const dayA = new Date(a.birthday).getDate();
    const monthB = new Date(b.birthday).getMonth();
    const dayB = new Date(b.birthday).getDate();
    if (monthA !== monthB) return monthA - monthB;
    return dayA - dayB;
  };

  birthdayThisYear.sort(sorting);

  birthdayNextYear.sort(sorting);

  return { birthdayThisYear, birthdayNextYear };
};

export default sortByBirthday;
