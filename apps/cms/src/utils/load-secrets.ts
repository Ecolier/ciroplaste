import fs from "fs";
import requireEnv from "./require-env";
import getEnv from "./get-env";

const loadSecrets = (envs: readonly string[]) => {
  let secrets: {};
  secrets = envs.reduce((acc, env) => {
    const secret = process.env[env];
    if (!secret) {
      const secretFilename = `${env}_FILE`;
      console.log(`$${env} not found, trying with $${secretFilename}`);
      const secretFilePath = process.env[secretFilename];
      if (secretFilePath) {
        return {
          ...acc,
          [env]: fs
            .readFileSync(secretFilePath, {
              encoding: "utf8",
              flag: "r",
            })
            .trim(),
        };
      }
      console.log(`$${env} not loaded`);
    }
    return { ...acc, [env]: secret };
  }, {});
  return secrets;
};

export default loadSecrets;
