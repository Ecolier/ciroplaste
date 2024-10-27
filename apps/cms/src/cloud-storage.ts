import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import Media from "./collections/Media";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import secrets from "./secrets";
import getEnv from "./utils/get-env";

const { STORAGE_ACCOUNT, STORAGE_KEY, STORAGE_SECRET } = secrets;
const bucket = getEnv("STORAGE_BUCKET");
const region = getEnv("STORAGE_REGION");

export default cloudStorage({
  enabled: process.env.NODE_ENV === 'production',
  collections: {
    [Media.slug]: {
      adapter: s3Adapter({
        bucket,
        config: {
          endpoint: `https://${STORAGE_ACCOUNT}.r2.cloudflarestorage.com`,
          credentials: {
            accessKeyId: STORAGE_KEY,
            secretAccessKey: STORAGE_SECRET,
          },
          region,
        },
      }),
    },
  },
});
