import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'



var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9d75efcc7f6571",
      pass: "10fce10c63d4aa"
    }
  });




export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData): Promise<void> {
            
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Ain Jackson <m3u0v0@gmail.com>',
        subject: subject,
        html: body,
    })

    }

}