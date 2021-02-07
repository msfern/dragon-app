const convertDate = date => {
  const parsedDate = new Date(Date.parse(date));
  const day = parsedDate.getDay();
  const month = parsedDate.getMonth();
  const year = parsedDate.getFullYear();
  return `${day}/${month + 1}/${year}`;
};

export default convertDate;
