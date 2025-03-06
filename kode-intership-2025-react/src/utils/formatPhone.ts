const formatPhone = (phone: string): string => {
  const cleanedPhone = phone.replace(/[-]/g, '');

  return `${cleanedPhone.slice(0, 2)} (${cleanedPhone.slice(
    2,
    5
  )}) ${cleanedPhone.slice(5, 8)} ${cleanedPhone.slice(
    8,
    10
  )} ${cleanedPhone.slice(10)}`;
};

export default formatPhone;
