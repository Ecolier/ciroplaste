import secrets from "./secrets";
import requireEnv from "./utils/require-env";

const {EMAIL_USERNAME, EMAIL_PASSWORD} = secrets;
const host = requireEnv("EMAIL_HOST");

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
