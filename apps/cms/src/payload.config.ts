import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import Users from './collections/Users'
import secrets from './secrets'
import Stories from './collections/Stories'
import Media from './collections/Media'
import db from './database'
import cloudStorage from './cloud-storage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const {SECRET} = secrets;

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    fallback: true,
  },
  collections: [Users, Stories, Media],
  editor: lexicalEditor(),
  secret: SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db,
  sharp,
  plugins: [
    cloudStorage
  ],
})

// export default buildConfig({
  
//   localization: {
//     locales: ['en', 'fr'],
//     defaultLocale: 'en',
//     fallback: true,
//   },
//   editor: lexicalEditor(),
//   collections: [Users, Stories, Media],
//   typescript,
//   graphQL: {
//     schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
//   },
//   plugins: [cloudStorage],
//   db,
//   cors: ['https://ciroplaste.com'],
// });
