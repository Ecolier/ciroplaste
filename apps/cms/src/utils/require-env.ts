const requireEnv = (env: string) => {
  const value = process.env[env];
  if (!value) {
    throw `$${env} is required but wasn't found`;
  }
  return value;
};
export default requireEnv;
