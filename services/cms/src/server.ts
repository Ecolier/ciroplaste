import express from 'express'
import payload from 'payload'
import fs from 'fs'

require('dotenv').config()

let payloadSecret = process.env.PAYLOAD_SECRET;
let smtpUsername = process.env.PAYLOAD_SMTP_USERNAME;
let smtpPassword = process.env.PAYLOAD_SMTP_PASSWORD;

try {
  payloadSecret = fs.readFileSync(process.env.PAYLOAD_SECRET_FILE, {encoding: 'utf8', flag: 'r'})
  smtpUsername = fs.readFileSync(process.env.PAYLOAD_SMTP_USERNAME_FILE, {encoding: 'utf8', flag: 'r'})
  smtpPassword = fs.readFileSync(process.env.PAYLOAD_SMTP_PASSWORD_FILE, {encoding: 'utf8', flag: 'r'})
} catch (err) {
  console.log(`Secrets not found`)
}

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    email: {
      transportOptions: {
        host: 'smtp.mail.me.com',
        auth: {
          user: smtpUsername,
          pass: smtpPassword,
        },
        port: 587,
        secure: false,
        requireTLS: true,
      },
      fromName: 'Ciroplaste',
      fromAddress: 'contact@ciroplaste.com',
    },
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
