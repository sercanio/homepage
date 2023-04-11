import nodemailer from 'nodemailer'
import { ContactFormTypes } from '@/types'
import { env } from 'process'

export default async function handler(
  req: { body: any },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: { (arg0: { data: ContactFormTypes | string }): void; new (): any }
    }
  }
) {
  const body = req.body
  console.log(process.env.SMTP_USER)

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  })

  let info = await transporter.sendMail({
    from: `"${body.firstName} ${body.lastName} 👻" <${body.email}>`,
    to: process.env.SMTP_USER,
    subject: 'sercan.io',
    text: body.message,
    html: `${body.message}<br/><br/><br/>Sent via sercan.io contact form.`
  })
  console.log('Message sent: %s', info.messageId)

  res.status(200).json({ data: req.body })
}
