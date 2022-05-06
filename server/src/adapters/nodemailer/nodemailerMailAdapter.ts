import { MailAdapter, SandMailData } from "./../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4c0f7f417d314f",
    pass: "9c95533d87ec36",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SandMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Pedro Pacheco <ppachecobr17@gmail.comv>",
      subject,
      html: body,
    });
  }
}
