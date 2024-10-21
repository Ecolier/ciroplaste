import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Articles from './collections/Articles'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import Media from './collections/Media'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Articles, Media],
  typescript: {
    outputFile: process.env.CMS_TYPES_PATH ?? path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: ['http://172.20.10.3:5173', 'http://172.20.10.2:5173', 'http://localhost:5173', 'http://172.20.10.3:4173', 'http://172.20.10.2:4173', 'http://localhost:4173', 'https://ciroplaste.com'],
})
