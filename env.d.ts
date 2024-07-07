declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string;
    PERSONAL_ACCESS_TOKEN: string;
    SENDGRID_API_KEY: string;
    SENDGRID_TO: string;
    SENDGRID_FROM: string;
  }
}
