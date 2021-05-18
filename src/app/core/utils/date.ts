export const SubtractDates = (date): number => {
  const today = new Date();
  const movieDate = new Date(date as string);

  const Time = today.getTime() - movieDate.getTime();
  const Days = Math.round(Time / (1000 * 3600 * 24));

  return Days;
};

export const YearOfDate = (date): number => {
  const movieDate = new Date(date as string);

  const Year = movieDate.getFullYear();

  return Year;
};
