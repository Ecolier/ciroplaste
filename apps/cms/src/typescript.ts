import path from "path";

const typescript = {
  outputFile:
    process.env.CMS_TYPES_PATH ?? path.resolve(__dirname, "payload-types.ts"),
};

export default typescript;
