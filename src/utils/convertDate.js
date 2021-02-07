const convertDate = date => {
  const parsedDate = new Date(Date.parse(date));
  const day = parsedDate.getDate();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();
  return `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${year}`;
};

export default convertDate;
