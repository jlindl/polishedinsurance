import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            )
        }

        const user = process.env.GMAIL_USER
        const pass = process.env.GMAIL_APP_PASSWORD

        if (!user || !pass) {
            console.error('Missing Gmail credentials in environment variables')
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            )
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass,
            },
        })

        const mailOptions = {
            from: user, // Sender address (must be the authenticated Gmail account)
            to: 'hello@polished-insurance.co.uk',
            replyTo: email, // Allow replying directly to the user
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true, message: 'Email sent successfully' })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}
