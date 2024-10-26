import fs from "fs";
import requireEnv from "./require-env";
import payload from "payload";

const loadSecrets = (envs: readonly string[]) => {
  let secrets: {};
  secrets = envs.reduce((acc, env) => {
    let secret: string;
    try {
      secret = requireEnv(env);

      // Try with a file if the secret isn't found
    } catch {

      // Use standard Docker nomenclature for secret filenames
      const secretFilename = `${env}_FILE`;
      console.log(`$${env} not found, trying with $${secretFilename}`);
      const secretFilePath = requireEnv(secretFilename);
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
    return { ...acc, [env]: secret };
  }, {});
  return secrets;
};

export default loadSecrets;
