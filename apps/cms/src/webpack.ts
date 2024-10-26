import path from 'path';

const mockLoadSecretsPath = path.resolve(__dirname, 'mocks/load-secrets.mock.js')
const fullLoadSecretsPath = path.resolve(
  __dirname,
  'utils/load-secrets'
)

const webpack = (config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        [fullLoadSecretsPath]: mockLoadSecretsPath
      },
    },
  };
};

export default webpack;
