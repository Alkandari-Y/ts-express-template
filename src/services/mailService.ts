import { createTransport } from "nodemailer";
import type { Transport } from "nodemailer";
import { mail as mailConfig } from "../config";

class MailService {
  transporter: any;
  constructor() {
    this.transporter = createTransport(mailConfig);
  }

  sendMail(options: any) {
    this.transporter.sendMail(options, function (err: Error, info: any) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
}

const mailService = new MailService();

export default mailService;
