/**
 * Drop-in replacement for `worker-mailer`.
 *
 * The original package speaks SMTP over `cloudflare:sockets`, a TCP module that
 * only exists inside Workers. EdgeOne Cloud Functions run real Node, so the same
 * job is done by nodemailer over a normal socket.
 *
 * The exported shape mirrors `WorkerMailer.send(transport, message)` so callers
 * do not change: `authType` is accepted and ignored, because nodemailer negotiates
 * the mechanism (PLAIN / LOGIN / XOAUTH2) with the server by itself.
 */
import nodemailer from "nodemailer";

export type AuthType = "plain" | "login" | "cram-md5";

export type MailTransportOptions = {
  host: string;
  port: number;
  authType?: AuthType | AuthType[];
  /** true => implicit TLS (port 465). */
  secure?: boolean;
  /** true => upgrade with STARTTLS when the server advertises it. */
  startTls?: boolean;
  credentials: {
    username: string;
    password: string;
  };
};

export type MailMessageOptions = {
  from: { name?: string; email: string };
  to: string;
  subject: string;
  html?: string;
  text?: string;
  headers?: Record<string, string>;
};

export const WorkerMailer = {
  async send(
    transport: MailTransportOptions,
    message: MailMessageOptions,
  ): Promise<void> {
    const mailer = nodemailer.createTransport({
      host: transport.host,
      port: transport.port,
      // 465 is implicit TLS; everything else starts in the clear and upgrades
      // if the server offers STARTTLS, which is what the original option meant.
      secure: transport.secure ?? transport.port === 465,
      ignoreTLS: false,
      requireTLS: false,
      auth: {
        user: transport.credentials.username,
        pass: transport.credentials.password,
      },
      connectionTimeout: 15_000,
      greetingTimeout: 15_000,
      socketTimeout: 20_000,
    });

    try {
      await mailer.sendMail({
        from: message.from.name
          ? { name: message.from.name, address: message.from.email }
          : message.from.email,
        to: message.to,
        subject: message.subject,
        html: message.html,
        text: message.text,
        headers: message.headers,
      });
    } finally {
      mailer.close();
    }
  },
};
