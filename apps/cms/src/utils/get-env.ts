const getEnv = (env: string, fallback: string = '') => process.env[env] ? process.env[env] : fallback;
export default getEnv;
