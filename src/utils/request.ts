import url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = url.format(getUrlWithParamsConfig(endpoint, query));
  return fetch(uri).then((res) => res.json());
}

export default req;
