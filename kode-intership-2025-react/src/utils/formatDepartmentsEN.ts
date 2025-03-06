const formatDepartmentsEN = (department: string) => {
  if (department.length === 2) return department.toUpperCase();
  else if (department.length === 3 && department !== 'all')
    return department.slice(0, 1) + department.slice(1).toUpperCase();
  else if (department.includes('_')) {
    const formattedDepartment = department.split('_').join('-');
    return (
      formattedDepartment.slice(0, 1).toUpperCase() +
      formattedDepartment.slice(1)
    );
  } else return department.slice(0, 1).toUpperCase() + department.slice(1);
};

export default formatDepartmentsEN;
