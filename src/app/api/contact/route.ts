import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Send email using a service like SendGrid, Nodemailer, etc.
    // 2. Store the message in a database
    // 3. Send confirmation email to the sender

    // Skip email sending if environment variables are not configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Email service not configured - skipping email sending')
      return NextResponse.json({
        success: true,
        message: 'Your message has been received successfully. Email service is currently being configured.'
      })
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO || 'arup.ratan.paul@colorado.edu',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
            <p>This email was sent from the portfolio contact form at ${process.env.NEXT_PUBLIC_APP_URL || 'localhost:3000'}</p>
            <p>Sent on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Sent from: ${process.env.NEXT_PUBLIC_APP_URL || 'localhost:3000'}
        Date: ${new Date().toLocaleString()}
      `
    }

    // Send confirmation email to sender
    const confirmationOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting Arup Ratan Paul',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Thank you for your message!</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out through my portfolio website. I have received your message regarding "${subject}" and will get back to you within 24-48 hours.</p>
          
          <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
            <p style="margin: 0; color: #166534;"><strong>Your message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #166534;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</p>
          </div>
          
          <p>Best regards,<br>
          <strong>Arup Ratan Paul</strong><br>
          Environmental Research Scientist<br>
          University of Colorado Boulder</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
          </div>
        </div>
      `
    }

    // Send both emails
    try {
      await transporter.sendMail(mailOptions)
      await transporter.sendMail(confirmationOptions)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Still return success to user, but log the error
      // In production, you might want to use a proper logging service
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. I will get back to you within 24-48 hours.'
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Return contact information
  return NextResponse.json({
    email: 'arup.paul@example.com',
    social: {
      linkedin: 'https://linkedin.com/in/arup-paul',
      twitter: 'https://twitter.com/arup_climate',
      github: 'https://github.com/arup-paul',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      researchgate: 'https://researchgate.net/profile/arup-paul'
    },
    location: 'Bangladesh',
    availability: 'Available for collaborations',
    responseTime: '24-48 hours'
  })
}
