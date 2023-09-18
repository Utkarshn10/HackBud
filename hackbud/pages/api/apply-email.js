// pages/api/sendEmail.js

import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs/promises';
import path from 'path'; // Import the 'path' module
import getConfig from 'next/config';

export default async (req, res) => {
  const {
    userEmail,
    teamName,
    applierEmail,
    applierName,
    applierGitHub,
    applierSkills,
  } = req.body;

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail'
      auth: {
        user: process.env.HACKATHON_EMAIL_SENDER_ID,
        pass: process.env.HACKATHON_EMAIL_SENDER_PASSWORD,
      },
    });

    // Get the PROJECT_ROOT from serverRuntimeConfig
    const { PROJECT_ROOT } = getConfig().serverRuntimeConfig;

    // Define the email data
    const mailOptions = {
      from: process.env.HACKATHON_EMAIL_SENDER_ID,
      to: userEmail,
      subject: 'Hackathon Team Application',
      // Use path.join to specify the template file path
      html: await renderEmailTemplate(
        teamName,
        applierEmail,
        applierName,
        applierGitHub,
        applierSkills,
        path.join(PROJECT_ROOT, 'apply-template.html') // Use path.join here
      ),
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

async function renderEmailTemplate(
  teamName,
  applierEmail,
  applierName,
  applierGitHub,
  applierSkills,
  templateFilePath // Pass the template file path as an argument
) {
  try {
    // Load and render your email template using EJS
    const templateFile = await fs.readFile(templateFilePath, 'utf-8');
    const renderedTemplate = ejs.render(templateFile, {
      teamName,
      applierEmail,
      applierName,
      applierGitHub,
      applierSkills,
    });

    return renderedTemplate;
  } catch (error) {
    console.error('Error rendering email template:', error);
    throw error;
  }
}
