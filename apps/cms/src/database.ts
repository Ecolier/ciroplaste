import { mongooseAdapter } from "@payloadcms/db-mongodb";
import getEnv from "./utils/get-env";

const url = getEnv("DATABASE_URI");
const db = mongooseAdapter({
  url,
});

export default db;
