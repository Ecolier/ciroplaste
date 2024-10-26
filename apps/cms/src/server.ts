import express from 'express'
import payload from 'payload'
import getEnv from './utils/get-env'
import routes from './routes'
import secrets from './secrets'
import email from './email'

require('dotenv').config()

const app = express()

const baseUrl = getEnv('PAYLOAD_PUBLIC_BASE_URL', '/')

app.get(baseUrl, (_, res) => {
  res.redirect(routes.admin);
})

const {SECRET} = secrets;
const start = async () => {
  await payload.init({
    email,
    secret: SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })
  app.listen(3000)
}

start()
