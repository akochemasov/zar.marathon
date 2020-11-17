import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object) {
  const url = {
    ...config.client.server,
    // @ts-ignore
    ...config.client.endpoint[endpointConfig].url,
    query: {
      ...query,
    },
  };
  return url;
}

export default getUrlWithParamsConfig;
