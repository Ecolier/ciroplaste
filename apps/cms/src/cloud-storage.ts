import { s3Storage } from "@payloadcms/storage-s3";
import Media from "./collections/Media";
import secrets from "./secrets";
import getEnv from "./utils/get-env";

const { STORAGE_ACCOUNT, STORAGE_KEY, STORAGE_SECRET } = secrets;
const bucket = getEnv("STORAGE_BUCKET");
const region = getEnv("STORAGE_REGION");

export default s3Storage({
  collections: [Media.slug],
  bucket,
  config: {
    endpoint: `https://${STORAGE_ACCOUNT}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: STORAGE_KEY,
      secretAccessKey: STORAGE_SECRET,
    },
    region,
  },
});
