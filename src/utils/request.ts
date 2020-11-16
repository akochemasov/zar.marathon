import url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string) {
  const uri = url.format(getUrlWithParamsConfig(endpoint));
  return fetch(uri).then((res) => res.json());
}

export default req;
