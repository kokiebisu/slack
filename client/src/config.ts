interface ConfigProps {
  http?: string | undefined;
  ws?: string | undefined;
}

var config: ConfigProps = {};

config.http =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SERVER_URL_PRODUCTION
    : process.env.REACT_APP_SERVER_URL_DEVELOPMENT;

config.ws =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SERVER_WEBSOCKET_PRODUCTION
    : process.env.REACT_APP_SERVER_WEBSOCKET_DEVELOPMENT;

export { config };
