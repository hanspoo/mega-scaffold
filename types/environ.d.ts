declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test' | 'dev';

      PG_PASS: string;
      PG_USER: string;
      PG_HOST: string;
      PG_DATABASE: string;

      RESEND_API_KEY: string;
      RESEND_FROM: string;
      SMTP_PASS: string;
      SMTP_PORT: string;
      SMTP_SERVER: string;
      SMTP_USER: string;
      ZITADEL_CLIENT_ID: string;
      ZITADEL_CLIENT_SECRET: string;
      ZITADEL_ISSUER: string;

      ZITADEL_REDIRECT_URI: string;
    }
  }
}

declare module 'nodemailer' {
  export const createTransport: any;
}

export {};
