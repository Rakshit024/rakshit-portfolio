import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

// Email configuration (using Gmail as example)
// For production, use environment variables for credentials
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use App Password for Gmail
    },
  });
};

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address',
      });
    }

    // Save to database if MONGODB_URI is provided
    let savedContact = null;
    if (process.env.MONGODB_URI) {
      try {
        savedContact = await Contact.create({ name, email, message });
      } catch (dbError) {
        console.error('Database save failed:', dbError);
        // Continue even if DB save fails
      }
    }

    // If email is configured, send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = createTransporter();
        
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.CONTACT_EMAIL || 'patelrakshit024@gmail.com',
          subject: `Portfolio Contact Form: Message from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Sent from portfolio contact form at ${new Date().toLocaleString()}</small></p>
          `,
          replyTo: email,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails - still return success
      }
    }

    // Log the submission (in production, you might want to save to database)
    console.log('Contact form submission:', {
      name,
      email,
      message,
      saved: Boolean(savedContact?._id),
      id: savedContact?._id,
      timestamp: savedContact?.createdAt || new Date().toISOString(),
    });

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: {
        name,
        email,
        submittedAt: savedContact?.createdAt || new Date().toISOString(),
        id: savedContact?._id,
      },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process your message. Please try again later.',
    });
  }
};

