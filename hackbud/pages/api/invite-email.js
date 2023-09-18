// pages/api/sendEmail.js

import nodemailer from 'nodemailer'
import ejs from 'ejs'
import fs from 'fs/promises'
import { toast } from 'react-toastify'

export default async (req, res) => {
    const {
      userEmail,
      name,
      applierTeamEmail,
      applierTeamName,
      applierTeamDescription,
    } = req.body
  
    try {
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // e.g., 'Gmail'
            auth: {
                user: process.env.HACKATHON_EMAIL_SENDER_ID,
                pass: process.env.HACKATHON_EMAIL_SENDER_PASSWORD,
            },
        })

        // Define the email data
        const mailOptions = {
            from: process.env.HACKATHON_EMAIL_SENDER_ID,
            to: userEmail,
            subject: 'Hackathon Team Invitation',
            html: await renderEmailTemplate(
              name,
              applierTeamEmail,
              applierTeamName,
              applierTeamDescription,
            ),
        }

        // Send the email
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
        console.error('Error sending email:', error)
        res.status(500).json({ error: 'Failed to send email' })
    }
}

async function renderEmailTemplate(
  name,
  applierTeamEmail,
  applierTeamName,
  applierTeamDescription,
) {
    try {
        // Load and render your email template using EJS
        const templateFile = await fs.readFile(
            'public/invite-template.html',
            'utf-8'
        )
        const renderedTemplate = ejs.render(templateFile, {
          name,
          applierTeamEmail,
          applierTeamName,
          applierTeamDescription,
        })

        return renderedTemplate
    } catch (error) {
        console.error('Error rendering email template:', error)
        throw error
    }
}
