export const date2ms = (d) => {
  let date = new Date(Math.round((d - 25569) * 864e5));
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date;
};
