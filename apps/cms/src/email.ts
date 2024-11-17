import secrets from "./secrets";
import getEnv from "./utils/get-env";

const {EMAIL_USERNAME, EMAIL_PASSWORD} = secrets;
const host = getEnv("EMAIL_HOST");

const email = {
  transportOptions: {
    host,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
    port: 587,
    secure: false,
    requireTLS: true,
  },
  fromName: "Ciroplaste",
  fromAddress: "contact@ciroplaste.com",
};

export default email;
