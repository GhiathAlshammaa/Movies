import countries from 'assets/countryNames.json';

export const CurrentCountryCode = async () => {
  const request = await fetch('https://ipinfo.io/json?token=f3a63529f63467');
  const jsonResponse = await request.json();
  const countryCode = jsonResponse.country;
  // console.log(`CountryCode: ${countryCode}`);

  return countryCode;
};
export const CountryName = async (shortcut) => {
  const countriesValue: any[] = ExtractCountry(countries);
  const countryName = countriesValue[shortcut];
  // console.log(`CountryName: ${countryName}`);

  return countryName;
};

export const ExtractCountry = (res: any): any[] => {
  let body = res;
  return body || {};
};
