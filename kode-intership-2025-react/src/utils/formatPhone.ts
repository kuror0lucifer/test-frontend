const formatPhone = (phone: string): string => {
  const cleanedPhone = phone.replace(/[-]/g, '');

  return `+7 (${cleanedPhone.slice(0, 3)}) ${cleanedPhone.slice(
    3,
    6
  )} ${cleanedPhone.slice(6, 8)} ${cleanedPhone.slice(8, 10)}`;
};

export default formatPhone;
