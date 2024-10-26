import loadSecrets from "./utils/load-secrets";

const secretKeys = [
    "SECRET",
    "EMAIL_USERNAME",
    "EMAIL_PASSWORD",
    "STORAGE_ACCOUNT",
    "STORAGE_KEY",
    "STORAGE_SECRET",
  ] as const;

type Key = typeof secretKeys[number];

type Secrets = {
    [index in Key]: string;
};

const secrets = loadSecrets(secretKeys) as Secrets;

export default secrets;
