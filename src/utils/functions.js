export const timeFormatter = (date) => {
  const dateObj = new Date(date);
  const formattedTime = dateObj.toLocaleTimeString();
  return formattedTime;
};

export const dateFormatter = (date) => {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString();
  return formattedDate;
};
