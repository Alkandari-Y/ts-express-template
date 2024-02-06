import { createTransport } from "nodemailer";
import type { Transport } from "nodemailer";
import { mail as mailConfig } from "../config";

export type MailOptions = {
  to: string;
  subject: string;
  text: string;
  from?: string;
};

class MailService {
  transporter: any;
  constructor() {
    this.transporter = createTransport(mailConfig);
  }

  async sendEmail(options: MailOptions) {
    const message: MailOptions = { from: mailConfig.from, ...options };
    await this.transporter.sendMail(message, function (err: Error, info: any) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }

  async sendResetPasswordEmail(to: string, token: string) {
    const subject = "Reset password";
    const resetPasswordUrl = `http://link-to-app/reset-password?token=${token}`;
    const text = `Dear user,
            To reset your password, click on this link: ${resetPasswordUrl}
            If you did not request any password resets, then ignore this email.`;
    await this.sendEmail({ subject, to, text });
  }

  async sendVerificationEmail(to: string, token: string) {
    const subject = "Email Verification";
    const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
    const text = `Dear user,
      To verify your email, click on this link: ${verificationEmailUrl}
      If you did not create an account, then ignore this email.`;
    await this.sendEmail({ to, subject, text });
  }
}

const mailService = new MailService();

export default mailService;
