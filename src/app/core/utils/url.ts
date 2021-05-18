import { environment } from '@src/environments/environment';

export const UrlGenerator = (
  urlKind,
  urlName = '',
  sectionName,
  restUrlValue = ''
): string => {
  // # Todo
  // # collect the url's Material
  // Enviroment params
  const urlBase = environment.apiConfig.urlBase;
  const urlConfigBase = environment.apiConfig.urlConfig;
  const apiKey = environment.apiConfig.apikey;

  // Input params
  // in argument

  // # combine them together
  let url = '';
  switch (urlKind) {
    case 'normal':
      url = `${urlBase}${urlName}/${sectionName}?api_key=${apiKey}${restUrlValue}`;
      break;
    case 'config':
      url = `${urlConfigBase}${sectionName}?api_key=${apiKey}${restUrlValue}`;
      break;
    default:
      return '';
  }

  return url;
};

export const StreamUrl = (streamName: string) => {
  switch (streamName) {
    case 'Netflix':
      return `https://www.netflix.com/`;
    case 'Hulu':
      return `https://www.hulu.com/`;
    case 'Disney Plus':
      return `https://www.disneyplus.com/`;
    case 'Amazon Prime Video':
      return `https://www.amazon.de/gp/video`;
    case 'Apple TV Plus':
      return `https://www.apple.com/apple-tv-plus/`;
    default:
      return '';
  }
};
