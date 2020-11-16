import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string) {
  const url = {
    ...config.client.server,
    // @ts-ignore
    ...config.client.endpoint[endpointConfig].url,
  };
  return url;
}

export default getUrlWithParamsConfig;
