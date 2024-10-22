import express from 'express'
import payload from 'payload'
import fs from 'fs'

require('dotenv').config()

let payloadSecret = process.env.PAYLOAD_SECRET;
try {
  payloadSecret = fs.readFileSync(process.env.PAYLOAD_SECRET_FILE, {encoding: 'utf8', flag: 'r'})
} catch (err) {
  payload.logger.info(`Secret file not found`)
}

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: payloadSecret,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000)
}

start()
