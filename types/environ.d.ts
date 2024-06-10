declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';

      SMTP_PASS: string;
      SMTP_USER: string;
      SMTP_SERVER: string;
      SMTP_PORT: string;

      PG_PASS: string;
      PG_USER: string;
      PG_HOST: string;
      PG_DATABASE: string;
    }
  }
}

declare module 'nodemailer' {
  export const createTransport: any;
}

export {};
