import { Staff } from '../models';

export const ExtractData = (res: any, countryCode?: string) => {
  let body = res;
  if (countryCode) {
    return body.results[countryCode] || {};
  } else {
    return body.results || {};
  }
};
export const ExtractDataCredits = (res: any): Staff[] => {
  let body = res;
  let staff: Staff[];

  staff = body.cast.slice(0, 7);
  staff.unshift(...body.crew.filter((x) => x.job === 'Director'));

  return staff;
};
export const ExtractMovieCredits = (res: any) => {
  let body = res;

  return body.cast || {};
};
