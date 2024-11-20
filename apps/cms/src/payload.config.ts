import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import Users from './collections/Users'
import secrets from './secrets'
import Stories from './collections/Stories'
import Media from './collections/Media'
import Profile from './collections/Profiles'
import db from './database'
import cloudStorage from './cloud-storage'
import { defaultLexical } from './fields/defaultLexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import email from './email'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const {SECRET} = secrets;

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  email: nodemailerAdapter(email),
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
  collections: [Users, Stories, Media, Profile],
  editor: defaultLexical,
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
